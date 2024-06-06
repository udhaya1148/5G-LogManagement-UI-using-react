
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './login/Login';
import MainDashboard from './components/MainDashboard';
import GnodeB from './components/GnodeB';
import UeDetails from './components/UeDetails';
import Upf from './components/Upf';
import Smf from './components/Smf';
import Amf from './components/Amf';
import Ran from './components/Ran';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/maindashboard' element={<MainDashboard />} />
        <Route path='/logout' element={<Login />} />
        <Route path='/gnodeb' element={<GnodeB />} />
        <Route path='/amf' element={<Amf />} />
        <Route path='/smf' element={<Smf />} />
        <Route path='/upf' element={<Upf />} />
        <Route path='/uedetails' element={<UeDetails />} />
        <Route path='/logout' element={<Login />} />
        <Route path='/dashhome' element={<MainDashboard />} />
        <Route path='/ran' element={<Ran />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App