import Main from "./Pages/Main";
import Register from "./Pages/Register";
import "./App.css";
import Admin from "./Pages/Admin";
import Donor from "./Pages/Donor";
import Organ from "./Pages/Organ";
import RegisterDonor from "./Pages/RegisterDonor";
import RegisterOrgan from "./Pages/RegisterOrgan";
import OrganList from "./Pages/OrganList";
import DonorList from "./Pages/DonorList";
import ViewOrganizationDonor from "./Pages/ViewOrganizationDonor.js";
import ViewPendingDonations from "./Pages/ViewPendingDonations";
import ViewDeliveryDetails from "./Pages/ViewDeliveryDetails";
import React from "react";
import ViewReqDonor from "./Pages/ViewReqDonor.js";
import ViewListOfClothReq from "./Pages/ViewListOfClothReq";
import LoginTrial from "./Pages/LoginTrial";
import SchoolSupp from "./Pages/SchoolSupp";
import StartPage from "./Components/StartPage";
import Options from "./Components/Options";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs"; // Make sure to import StartPage
import { Routes, Route } from "react-router-dom";
import SideNavBarDonor from "./Components/SideNavBarDonor";
import UpdateDeliveryTime from "./Pages/UpdateDeliveryTime";
import ListOfToys from "./Pages/ListOfToys";
import ListOfFood from "./Pages/ListOfFood";
import ListOfMedicalSupplies from "./Pages/ListOfMedicalSupplies";
import ViewOrganizationAdmin from "./Pages/ViewOrganizationAdmin.js";
import TeachingPosts from "./Pages/TeachingPosts.js";
import MedicalCases from "./Pages/MedicalCases.js";
import ListofBloodDonation from "./Pages/ListofBloodDonation.js";
import SideNavBarAdmin from "./Components/SideNavBarAdmin.js";
import SideNavBarOrganization from "./Components/SideNavBarOrganization.js";
import SideNavBarDoctor from "./Components/SideNavBarDoctor.js";
import SideNavBarTeacher from "./Components/SideNavBarTeacher.js";
import AccountSettings from "./Pages/AccountSettings.js";
import ViewDonorsAdmin from "./Pages/ViewDonorsAdmin.js";
import DonorDeliveries from "./Pages/DonorDeliveries.js";
import ClinicLocationForm from "./Pages/ClinicLocationForm.js";
import ClassandSubjectSelectionTeacher from "./Pages/ClassandSubjectSelectionTeacher.js";
import DonationPost from "./Pages/DonationPost.js";
import UpdateDeleteDonation from "./Pages/UpdateDeleteDonation.js";
import FulfilledDonationPosts from "./Pages/FulfilledDonationPosts.js";
import VolunteerPosts from "./Pages/VolunteerPosts";
// Make sure to import StartPage

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col py-3">
            <Routes>
              <Route path="/ViewReqDonor" element={<ViewReqDonor />} />
              <Route path="/VolunteerPosts" element={<VolunteerPosts />} />
              <Route path="/ListOfFood" element={<ListOfFood />} />
              <Route path="/TeachingPosts" element={<TeachingPosts />} />
              <Route path="/SchoolSupp" element={<SchoolSupp />} />
              <Route path="/MedicalCases" element={<MedicalCases />} />
              <Route path="/ListOfToys" element={<ListOfToys />} />
              <Route path="/DonationPost" element={<DonationPost />} />
              <Route
                path="/FulfilledDonationPosts"
                element={<FulfilledDonationPosts />}
              />
              <Route
                path="/UpdateDeleteDonation"
                element={<UpdateDeleteDonation />}
              />
              <Route
                path="/ListOfMedicalSupplies"
                element={<ListOfMedicalSupplies />}
              />
              <Route
                path="/ListofBloodDonation"
                element={<ListofBloodDonation />}
              />
              <Route
                path="/ViewDeliveryDetails"
                element={<ViewDeliveryDetails />}
              />
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
              <Route path="/OrganList" element={<OrganList />} />
              <Route path="/DonorList" element={<DonorList />} />
              <Route path="/SchoolSupp" element={<SchoolSupp />} />
              <Route path="/Options" element={<Options />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route
                path="/UpdateDeliveryTime"
                element={<UpdateDeliveryTime />}
              />
              <Route path="/" element={<StartPage />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/" element={<StartPage />} />
              <Route path="/ListOfToys" element={<ListOfToys />} />
              <Route path="/ListOfFood" element={<ListOfFood />} />
              <Route
                path="/ClassandSubjectSelectionTeacher"
                element={<ClassandSubjectSelectionTeacher />}
              />
              <Route
                path="/ClinicLocationForm"
                element={<ClinicLocationForm />}
              />
              <Route
                path="/ViewOrganizationAdmin"
                element={<ViewOrganizationAdmin />}
              />
              <Route
                path="/ViewOrganizationDonor"
                element={<ViewOrganizationDonor />}
              />
              <Route
                path="/ViewPendingDonations"
                element={<ViewPendingDonations />}
              />
              <Route
                path="/ListOfMedicalSupplies"
                element={<ListOfMedicalSupplies />}
              />
              <Route path="/SideNavBarDonor" element={<SideNavBarDonor />} />
              <Route path="/SideNavBarDoctor" element={<SideNavBarDoctor />} />
              <Route
                path="/SideNavBarTeacher"
                element={<SideNavBarTeacher />}
              />
              <Route path="/" element={<StartPage />} />{" "}
              {/* Include the StartPage route */}
              <Route path="/SideNavBarAdmin" element={<SideNavBarAdmin />} />
              <Route
                path="/SideNavBarOrganization"
                element={<SideNavBarOrganization />}
              />
              <Route path="/AccountSettings" element={<AccountSettings />} />
              <Route path="/ViewDonorsAdmin" element={<ViewDonorsAdmin />} />
              <Route path="/DonorDeliveries" element={<DonorDeliveries />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
