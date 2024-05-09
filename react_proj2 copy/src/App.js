import Main from "./Pages/Main";
import Register from "./Pages/Register";
import "./App.css";
import Admin from "./Pages/Admin";
import Donor from "./Pages/Donor";
import Organ from "./Pages/Organ";
import RegisterDonor from "./Pages/RegisterDonor";
import RegisterOrgan from "./Pages/RegisterOrgan";
import ChangePassword from "./Pages/ChangePassword";
import Doctor from "./Pages/Doctor";
import Teacher from "./Pages/Teacher";
import OrganList from "./Pages/OrganList";
import DonorList from "./Pages/DonorList";
import ViewOrganizationDonor from "./Pages/ViewOrganizationDonor.js";
import ViewPendingDonations from "./Pages/ViewPendingDonations";
import ViewDeliveryDetails from "./Pages/ViewDeliveryDetails";
import React from "react";
import ViewReqDon from "./Pages/ViewReqDon";
import ViewListOfClothReq from "./Pages/ViewListOfClothReq";
import LoginTrial from "./Pages/LoginTrial";
import SchoolSupp from "./Pages/SchoolSupp";
import StartPage from "./Components/StartPage";
import Options from "./Components/Options";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs"; // Make sure to import StartPage
import { Routes, Route, useNavigate } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import SideNavBarDonor from "./Components/SideNavBarDonor";
import UpdateDeliveryTime from "./Pages/UpdateDeliveryTime";
import ListOfToys from "./Pages/ListOfToys";
import ListOfFood from "./Pages/ListOfFood";
import ListOfMedicalSupplies from "./Pages/ListOfMedicalSupplies";

// Make sure to import StartPage

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-3">
            <Routes>
              <Route path="/ViewReqDon" element={<ViewReqDon />} />
              <Route
                path="/ViewListOfClothReq"
                element={<ViewListOfClothReq />}
              />
              <Route path="/loginTrial" element={<LoginTrial />} />
              {/* check if any info changed between all logins */}
              <Route path="/register" element={<Register />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Donor" element={<Donor />} />
              <Route path="/Organ" element={<Organ />} />
              {/* <Route path="/ListofBloodDonation" element={<ListofBloodDonation/>}/> */}
              <Route path="/RegisterDonor" element={<RegisterDonor />} />
              <Route path="/RegisterOrgan" element={<RegisterOrgan />} />
              <Route path="/ChangePassword" element={<ChangePassword />} />
              <Route path="/OrganList" element={<OrganList />} />
              <Route path="/DonorList" element={<DonorList />} />
              <Route path="/SchoolSupp" element={<SchoolSupp />} />
              <Route path="/Options" element={<Options />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route
                path="/UpdateDeliveryTime"
                element={<UpdateDeliveryTime />}
              />
              <Route path="/" element={<StartPage />} />{" "}
              {/* Include the StartPage route */}
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/" element={<StartPage />} />{" "}
              {/* Include the StartPage route */}
              <Route path="/ListOfToys" element={<ListOfToys />} />
              <Route path="/ListOfFood" element={<ListOfFood />} />
              <Route
                path="/ListOfMedicalSupplies"
                element={<ListOfMedicalSupplies />}
              />
              {/* <Route path="/TeachingPosts" element={<TeachingPosts />} />
              <Route path="/MedicalCases" element={<MedicalCases />} /> */}
              {/* <Route path="/Organ" element={<Organ />} /> */}
              <Route path="/SideNavBarDonor" element={<SideNavBarDonor />} />
              <Route path="/" element={<StartPage />} />{" "}
              {/* Include the StartPage route */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
