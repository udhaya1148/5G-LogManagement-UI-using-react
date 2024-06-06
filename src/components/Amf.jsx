
import DashboardNav from "./DashboardNav";
import "./logs.css";

function Amf() {
  return (
    <>
      <DashboardNav />
      <div className="singlelog">
        <iframe
          src="http://192.168.1.200:3000/d-solo/edlr4ktye0em8d/open5gs-5g-3e-nfv-log-management?orgId=1&refresh=5s&theme=dark&panelId=4"
          width="450"
          height="350"
          frameBorder="0"
          title="AMF"
        ></iframe>
      </div>
    </>
  );
}

export default Amf;
