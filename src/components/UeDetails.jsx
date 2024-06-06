
import "./logs.css";
import DashboardNav from "./DashboardNav";

function UeDetails() {
  return (
    <div>
      <DashboardNav />
      <div className="singlelog">
        <iframe
          src="http://192.168.1.200:3000/d-solo/edlr4ktye0em8d/open5gs-5g-3e-nfv-log-management?orgId=1&refresh=5s&theme=dark&panelId=8"
          width="450"
          height="350"
          frameBorder="0"
          title="ue-details"
        ></iframe>
      </div>
    </div>
  );
}

export default UeDetails;
