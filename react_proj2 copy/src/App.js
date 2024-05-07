import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed useNavigate
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
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs'; 
import SideNavBarDonor from './Components/SideNavBarDonor';// Make sure to import StartPage

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row flex-nowrap">
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
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/SideNavBarDonor" element={<SideNavBarDonor />} />
              <Route path="/" element={<StartPage />} /> {/* Include the StartPage route */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
