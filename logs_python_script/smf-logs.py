import subprocess
import re
import json

def extract_info(line):
    SMF_Sessions_match = re.match(r'.*Number of SMF-Sessions is now (\d+).*', line)
    imsi_match = re.match(r'.*\[imsi-(\d+)].*', line)
    ipv4_match = re.match(r'.*IPv4\[(\d+\.\d+\.\d+\.\d+)\].*', line)

    if SMF_Sessions_match:
        return {"SMF_Sessions": int(SMF_Sessions_match.group(1))}
    elif imsi_match and ipv4_match:
        return {"imsi": int(imsi_match.group(1)), "ipv4": ipv4_match.group(1)}
    else:
        return None

def read_logs(pod_name, namespace):
    data = []
    command = ["microk8s", "kubectl", "logs", pod_name, "-n", namespace]
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    for line in process.stdout:
        line = line.decode().strip()
        info = extract_info(line)
        if info:
            data.append(info)
    return data

if __name__ == "__main__":
    pod_name = "my-open5gs-smf-deployment-8d5c57864-ftll6"
    namespace = "open5gs"
    output_data = read_logs(pod_name, namespace)
    print(json.dumps(output_data))
