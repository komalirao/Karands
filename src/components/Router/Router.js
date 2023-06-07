import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Dashboard/AdminDashboard";
import ICHPDashboard from "../Dashboard/ICHPDashboard";
import ICHPDashedit from "../Dashboard/ICHPDashedit";
import IUDashboard from "../Dashboard/IUDashboard";
import IUDashedit from "../Dashboard/IUDashedit";
import Documents from "../Documents/Documents";
import MyAccount from "../MyAccount/MyAccount";
import Myjob from "../Myjob/Myjob";
import Notification from "../Notification/Notification";
import Postjob from "../Post/Postjob";
import Editprofile from "../Profile/EditProfile";
import Viewprofile from "../Profile/Viewprofile";
import Settings from "../Settings/Settings";
import Sidebar from "../Sidebar/Sidebar";
import Adertise from "../pages/objSurvey/Advertise";
import Affiliate from "../pages/objSurvey/Affiliate";
import BuildNetwok from "../pages/objSurvey/BuildNetwork";
import Collaborate from "../pages/objSurvey/Collaborate";
import ForInvest from "../pages/objSurvey/ForInvest";
import Header from "../pages/objSurvey/Header";
import LookingForJob from "../pages/objSurvey/LookingForJob";
import LookingToHire from "../pages/objSurvey/LookingToHire";
import Mentoring from "../pages/objSurvey/Mentoring";
import Mentorship from "../pages/objSurvey/Mentorship";
import ObjProfileServey from "../pages/objSurvey/ObjProfileServey";
import ObjSurvey from "../pages/objSurvey/ObjSurvey";
import Pricing from "../pages/objSurvey/Pricing";
import ReferalCode from "../pages/objSurvey/ReferalCode";
import ReffererDetails from "../pages/objSurvey/ReffererDetails";
import ToInvest from "../pages/objSurvey/ToInvest";
import Signup from "../pages/signup/Signup";
import Verification from "../pages/verification/Verification";
import Dashboardedit from "../Dashboard/Dashboardedit";
import Dashboardsidebar from "../Dashboard/Dashboardsidebar";
import Dashboardadmin from "../Dashboard/Admin/Dashboardadmin";
import NavigationSteps from "../ObjectivSurvey/NavigationSteps";
import Mentor from "../ObjectivSurvey/Mentor";
import Invest from "../ObjectivSurvey/Invest";
import AddAffiliate from "../ObjectivSurvey/AddAffiliate";
import NetworkOrCollaborate from "../ObjectivSurvey/NetworkOrCollaborate";
import JobOrHire from "../ObjectivSurvey/JobOrHire";
import ForgetPassword from "../pages/signup/ForgetPassword";
import VerifyEmail from "../pages/signup/VerifyEmail";
import TermsNdConditions from "../pages/signup/TermsNdConditions";
import Postfeed from "../Post/Postfeed";
import Joblist from "../List/Joblist";
import Userlist from "../List/Userlist";
import List from "../List/List";
import Profilepreview from "../Profile/Profilepreview";
import Newjobpreview from "../Profile/Newjobpreview";
import PostFeeds from "../Dashboard/IchpDashboard/PostFeed";
import TopJob from "../Dashboard/IchpDashboard/TopJobs";
import TopUser from "../Dashboard/IchpDashboard/TopUser";
import Ichpdash from "../Dashboard/IchpDashboard/Ichpdash";
import MyPostedJobs from "../Dashboard/IchpDashboard/MyPostedJobs";
import ShortListed from "../Dashboard/IchpDashboard/ShortListed";
import MyJobs from "../Dashboard/IchpDashboard/MyJobs";
import IchpUser from "../Dashboard/IchpDashboard/IchpUser";
import RegAsIuIchp from "../Dashboard/IchpDashboard/RegAsIuIchp";
import SelectedObjects from "../pages/objSurvey/SelectedObjects";
import BecomeIchp from "../Dashboard/IchpDashboard/BecomeIchp";
import WantToPostJob from "../Dashboard/IchpDashboard/WantToPostJob";
import PostFeed1 from "../Post/PostFeed1";
import AdminSummary from "../Dashboard/Admin/adminSummary/AdminSummary";
import Tasks from "../Dashboard/Admin/AcceptTasks/Tasks";
import DeclnTasks from "../Dashboard/Admin/DeclineTasks/DeclnTasks";
import DeclnBgv from "../Dashboard/Admin/DeclineTasks/DeclnBgv";
import DecAffliAdd from "../Dashboard/Admin/DeclineTasks/DecAffliAdd";
import RefBonus from "../Dashboard/Admin/AcceptTasks/RefBonus";
import Bagver from "../Dashboard/Admin/AcceptTasks/Bagver";
import AffAdds from "../Dashboard/Admin/AcceptTasks/AffAdds";
import DecRefBonus from "../Dashboard/Admin/DeclineTasks/DecRefBonus";
import DeclDrvin from "../Dashboard/Admin/DeclineTasks/DeclDrvin";
import DriveInSupport from "../Dashboard/Admin/AcceptTasks/DriveInSupport";
import ListOfIU from "../Dashboard/Admin/ListOfIU";
import ListOfICHP from "../Dashboard/Admin/ListOfICHP";
import ListOfPostfeeds from "../Dashboard/Admin/ListOfPostfeeds";
import ListOfPostJobs from "../Dashboard/Admin/ListOfPostJobs";
import UsersSearchSuggstions from "../Dashboard/Admin/connectionSuggestions/UsersSearchSuggstions";
import Connections from "../Dashboard/Admin/MyNetwork/Connections";
import MyNetwork from "../Dashboard/Admin/MyNetwork/MyNetwork";
import Pending from "../Dashboard/Admin/MyNetwork/Pending";
import Request from "../Dashboard/Admin/MyNetwork/Request";
import Page from "../Dashboard/Admin/MyNetwork/Page";
import Group from "../Dashboard/Admin/MyNetwork/Group";
import Blocked from "../Dashboard/Admin/MyNetwork/Blocked";
import RecommendedGroup from "../Dashboard/Admin/Group/RecommendedGroup";
import YourGroup from "../Dashboard/Admin/Group/YourGroup";
import Groups from "../Dashboard/Admin/Group/Groups";
import Search from "../Dashboard/Admin/searchTab/Search";
import RefCode from "../pages/RefCode";
import TestForm from "../pages/signup/TestForm";
import PricingPage from "../pages/signup/PricingPage";
import OTPInput from "../pages/signup/OTPInput";
import ChangeNumber from "../pages/signup/ChangeNumber";
import JobExperience from "../Profile/JobExperience";
import ContactInfo from "../Profile/ContactInfo";
import EducationInfo from "../Profile/EducationInfo";
import AccountSetting from "../Profile/AccountSetting";
import ObjDemo from "../pages/ObjDemo";
import Registration from "../Registration";
import SignIn from "../SignIn";

function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          {/*<Route path="/signup" element={<Signup />} />*/}
          <Route path="/Verification" element={<Verification />} />
          <Route path="/ObjSurvey" element={<ObjSurvey />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/VerifyEmail" element={<VerifyEmail />} />
          <Route path="/LookingForJob" element={<LookingForJob />} />
          <Route path="/ObjProfileServey" element={<ObjProfileServey />} />
          <Route path="/LookingToHire" element={<LookingToHire />} />
          <Route path="/BuildNetwork" element={<BuildNetwok />} />
          <Route path="/Collaborate" element={<Collaborate />} />
          <Route path="/Mentoring" element={<Mentoring />} />
          <Route path="/Mentorship" element={<Mentorship />} />
          <Route path="/Advertise" element={<Adertise />} />
          <Route path="/Affiliate" element={<Affiliate />} />
          <Route path="/ToInvest" element={<ToInvest />} />
          <Route path="/ForInvest" element={<ForInvest />} />
          <Route path="/ReferalCode" element={<ReferalCode />} />
          <Route path="/ReffererDetails" element={<ReffererDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/TermsNdConditions" element={<TermsNdConditions />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/dashboard" element={<Sidebar />} />
          {/* <Route path='/editprofile' element={<Editprofile />} /> */}
          <Route path="/IUDashboard" element={<IUDashboard />} />
          <Route path="/ICHPDashboard" element={<ICHPDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/viewprofile" element={<Viewprofile />} />
          <Route path="/editprofile" element={<Editprofile />} />
          <Route path="/dashboard/editprofile" element={<Dashboardedit />} />
          <Route path="/IU/editprofile" element={<IUDashedit />} />
          <Route path="/ICHP/editprofile" element={<ICHPDashedit />} />
          <Route path="/dashboard/myaccount" element={<MyAccount />} />
          <Route path="/dashboard/myjob" element={<Myjob />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/documents" element={<Documents />} />
          <Route path="/dashboard/dashboard" element={<Dashboardsidebar />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/admin" element={<Dashboardadmin />} />
          <Route path="/joblist" element={<Joblist />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="/ICHP/lists" element={<List />} />
          <Route path="/jobpreview" element={<Profilepreview />} />
          <Route path="/jobpre" element={<Newjobpreview />} />
          <Route path="/test" element={<TestForm />} />
          <Route path="/price" element={<PricingPage />} />

          <Route path="/postfeed" element={<Postfeed />} />
          <Route path="/postjob" element={<Postjob />} />
          <Route path="/ichp/postfeed" element={<PostFeeds />} />
          <Route path="/ichp/topjob" element={<TopJob />} />
          <Route path="/ichp/topuser" element={<TopUser />} />
          <Route path="/ichp/dashboard" element={<Ichpdash />} />

          <Route path="/joborhire" element={<JobOrHire />} />
          <Route
            path="/networkOrcollaborate"
            element={<NetworkOrCollaborate />}
          />
          <Route path="/NavigationSteps" element={<NavigationSteps />} />
          {/* <Route path="/objctsurvey" element={</>} /> */}
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/addaffiliate" element={<AddAffiliate />} />
          <Route path="/mypostedjobs" element={<MyPostedJobs />} />
          <Route path="/Shortlisted" element={<ShortListed />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/ichpuser" element={<IchpUser />} />
          <Route path="/regasiuichp" element={<RegAsIuIchp />} />
          <Route path="/selectedobjects" element={<SelectedObjects />} />
          <Route path="/becomeichp" element={<BecomeIchp />} />
          <Route path="/wanttopostjob" element={<WantToPostJob />} />
          <Route path="/PostFeed1" element={<PostFeed1 />} />
          <Route path="/adminSummary" element={<AdminSummary />} />
          <Route path="/declntask" element={<DeclnTasks />} />
          <Route path="/declbgv" element={<DeclnBgv />} />
          <Route path="/decAffiliAdd" element={<DecAffliAdd />} />
          <Route path="/declrefbonus" element={<DecRefBonus />} />
          <Route path="/decDrivein" element={<DeclDrvin />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/refbonus" element={<RefBonus />} />
          <Route path="/bagver" element={<Bagver />} />
          <Route path="/affadds" element={<AffAdds />} />
          <Route path="/drvinsupport" element={<DriveInSupport />} />
          <Route path="/listofuser" element={<ListOfIU />} />
          <Route path="/listofichp" element={<ListOfICHP />} />
          <Route path="/listofpostfeed" element={<ListOfPostfeeds />} />
          <Route path="/listofpostjobs" element={<ListOfPostJobs />} />
          <Route
            path="/usersearchsuggestion"
            element={<UsersSearchSuggstions />}
          />
          <Route path="/connections" element={<Connections />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/requests" element={<Request />} />
          <Route path="/page" element={<Page />} />
          <Route path="/group" element={<Group />} />
          <Route path="/blocked" element={<Blocked />} />
          <Route path="/recommendedgroup" element={<RecommendedGroup />} />
          <Route path="/yourgroup" element={<YourGroup />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/search" element={<Search />} />
          <Route path="/ref" element={<RefCode />} />
          <Route path="/otpinput" element={<OTPInput />} />
          <Route path="/changenumber" element={<ChangeNumber />} />
          <Route path="/jobexperince" element={<JobExperience />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/educaionalinfo" element={<EducationInfo />} />
          <Route path="/accountsetting" element={<AccountSetting />} />
          <Route path="objdemo" element={<ObjDemo />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
