import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import SideNavBar from './Components/SideNavBar';
import ViewReqDon from './Pages/ViewReqDon';
import ViewListOfClothReq from './Pages/ViewListOfClothReq';
import LoginTrial from './Pages/LoginTrial';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import Donor from './Pages/Donor';
import Organ from './Pages/Organ';
import RegisterDonor from './Pages/RegisterDonor';
import RegisterOrgan from './Pages/RegisterOrgan';
import SchoolSupp from './Pages/SchoolSupp';
import StartPage from './Components/StartPage';
import Options from './Components/Options';
import AboutUs from './Components/AboutUs'; // Make sure to import StartPage
import UpdateDeliveryTime from './Pages/UpdateDeliveryTime'
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavigationBar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="d-flex flex-column align-items-center align-items-sm-start p-0 text-white min-vh-100 w-auto">
            <SideNavBar />
          </div>

          <div className="col py-3">
            <Routes>
              <Route path="/ViewReqDon" element={<ViewReqDon />} />
              <Route path="/ViewListOfClothReq" element={<ViewListOfClothReq />} />
              <Route path="/loginTrial" element={<LoginTrial />} />
              {/* check if any info changed between all logins */}
              <Route path="/register" element={<Register />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Donor" element={<Donor />} />
              <Route path="/Organ" element={<Organ />} />
              <Route path="/RegisterDonor" element={<RegisterDonor />} />
              <Route path="/RegisterOrgan" element={<RegisterOrgan />} />
              <Route path="/SchoolSupp" element={<SchoolSupp />} />
              <Route path="/Options" element={<Options />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/UpdateDeliveryTime" element={<UpdateDeliveryTime />} />
              <Route path="/" element={<StartPage />} /> {/* Include the StartPage route */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
