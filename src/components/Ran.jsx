
import DashboardNav from './DashboardNav'
import './logs.css'

function Ran() {
  return (
    <div>
        <DashboardNav />
        <div className="full-screen-iframe">
            <iframe src="http://192.168.1.210/lte/" title="Ran"></iframe>
        </div>
    </div>
  )
}

export default Ran