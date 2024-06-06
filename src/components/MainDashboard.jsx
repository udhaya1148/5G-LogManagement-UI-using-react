

import DashboardNav from "./DashboardNav";

import "./logs.css";

function MainDashboard() {
  return (
    <div>
      <DashboardNav />
     
      <div className="dashboards">
        <iframe
          src="http://192.168.1.200:3000/d-solo/edlr4ktye0em8d/open5gs-5g-3e-nfv-log-management?orgId=1&refresh=5s&theme=dark&panelId=1"
          width="50"
          height="200"
          frameBorder="0"
          title="Dashboard1"
        ></iframe>
        <br />
        <iframe
          src="http://192.168.1.200:3000/d-solo/edlr4ktye0em8d/open5gs-5g-3e-nfv-log-management?orgId=1&refresh=5s&theme=dark&panelId=2"
          width="450"
          height="200"
          frameBorder="0"
          title="Dashboard2"
        ></iframe>
        <br />
        <iframe
          src="http://192.168.1.200:3000/d-solo/edlr4ktye0em8d/open5gs-5g-3e-nfv-log-management?orgId=1&refresh=5s&theme=dark&panelId=3"
          width="450"
          height="200"
          frameBorder="0"
          title="Dashboard3"
        ></iframe>
      </div>
    </div>
  );
}

export default MainDashboard;
