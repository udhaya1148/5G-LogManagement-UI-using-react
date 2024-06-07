import subprocess
import re
import json

def extract_info(line):
    ngap_server_match = re.match(r'.*ngap_server\(\) \[(.*?)\].*', line)
    gNBs_match = re.match(r'.*Number of gNBs is now (\d+).*', line)
    gNB_UEs_match = re.match(r'.*Number of gNB-UEs is now (\d+).*', line)
    AMF_UEs_match = re.match(r'.*Number of AMF-UEs is now (\d+).*', line)
    AMF_Sessions_match = re.match(r'.*Number of AMF-Sessions is now (\d+).*', line)
    sst_sd_match = re.match(r'.*\[SST:(\d+) SD:(0x[0-9a-fA-F]+)\].*', line)
    cell_id_match = re.match(r'.*CellID\[(0x[0-9a-fA-F]+)\].*', line)

    if ngap_server_match:
        return {"ngap_server": ngap_server_match.group(1)}
    elif gNBs_match:
        return {"gNBs": int(gNBs_match.group(1))}
    elif gNB_UEs_match:
        return {"gNB_UEs": int(gNB_UEs_match.group(1))}
    elif AMF_UEs_match:
        return {"AMF_UEs": int(AMF_UEs_match.group(1))}
    elif AMF_Sessions_match:
        return {"AMF_Sessions": int(AMF_Sessions_match.group(1))}
    elif sst_sd_match:
        return {"SST": int(sst_sd_match.group(1)), "SD": sst_sd_match.group(2)}
    elif cell_id_match:
        return {"CellID": cell_id_match.group(1)}
    else:
        return None

def read_logs(pod_name, namespace):
    data = []
    command = ["kubectl", "logs", pod_name, "-n", namespace]
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    for line in process.stdout:
        line = line.decode().strip()
        info = extract_info(line)
        if info:
            data.append(info)
    return data


if __name__ == "__main__":
    pod_name = "my-open5gs-amf-deployment-5d5899dd88-vff9f"
    namespace = "open5gs"
    output_data = read_logs(pod_name, namespace)
    print(json.dumps(output_data))
