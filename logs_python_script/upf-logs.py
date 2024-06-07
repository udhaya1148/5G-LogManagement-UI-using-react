import subprocess
import re
import json

def extract_info(line):
    info = {}
    gtp_match = re.search(r'gtp_connect\(\) \[(.*?)\]:\d+', line)
    if gtp_match:
        info['gtp_connect'] = gtp_match.group(1)
    pdn_type_match = re.search(r'PDN-Type\[(.*?)\]', line)
    if pdn_type_match:
        info['PDN-Type'] = int(pdn_type_match.group(1))
    apn_match = re.search(r'APN\[(.*?)\]', line)
    if apn_match:
        info['APN'] = apn_match.group(1)
    upf_sessions_match = re.search(r'Number of UPF-Sessions is now (\d+)', line)
    if upf_sessions_match:
        info['UPF-Sessions'] = int(upf_sessions_match.group(1))
    return info

def get_filtered_logs():
    command = "microk8s kubectl logs my-open5gs-upf-deployment-c985d445c-7p4nv -n open5gs"
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    logs_data = []
    for line in iter(process.stdout.readline, b''):
        line = line.decode('utf-8').strip()
        extracted_info = extract_info(line)
        if extracted_info:
            logs_data.append(extracted_info)
    
    return logs_data

if __name__ == "__main__":
    logs_data = get_filtered_logs()
    print(json.dumps(logs_data, indent=4))
