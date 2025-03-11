import React from "react";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/Home/home-page";
import Dashboard from "./Dashboard/Dashboard";
import Withdrawal from "./Dashboard/withdraw";
import Deposit from "./Dashboard/Deposit";
import Monitor from "./Dashboard/Mining";
import Profile from "./Dashboard/profile";
import MiningHistory from "./Dashboard/MiningHistory";
import Settings from "./Dashboard/Settings";
import Support from "./Dashboard/Support";
import AboutUs from "./pages/About-Us/about-us";
import EditInfo from "./pages/Edit-Information/edit-info";
import PrivacyPolicy from "./pages/Privacy-Policy/privacy-policy";
import TermsAndConditions from "./pages/Terms-and-Conditions/terms-and-conditions";
import Contact from "./pages/Contact/contacts";
import Referral from "./pages/Referral/referral";
import ChangePassword from "./pages/Change-Password/change-password";
// import ProfileDetails from "./pages/Profile/profile-detail+s";
import AdminPage from "./Admin/Admin-page/admin-page";
import Feeds from "./pages/FeedsPage/feeds";
import FundAccount from "./pages/Fund-Account/fund-account";
import PlanAccountCreation from "./pages/Fund-Account/Plan-Account-Creation/plan-account-creation";
import PlanCreation from "./pages/Plan-Creation/plan-creation";
import FundSuccess from "./pages/Fund-Success/fund-success";
// import AccountVerification from "./pages/Account-verification/account-verification";
import Plan from "./pages/Plan/plan";
import SignUpVerification from "./pages/SignupVerification";
import AdminLogin from "./Admin/Auth/login";
import AdminOverview from "./Admin/dashboard/adminoverview";
import TransactionsPage from "./Admin/dashboard/Transactionpage";

function App() {
  return (
    <div className="Gen">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="sign-up" element={<Signup />} />
            {/* <Route path="search" element={<SearchAppBar />} /> */}
            <Route path="plan" element={<Plan />} />
            <Route path="login" element={<Login />} />
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="account/dashboard" element={<Dashboard />} />
            <Route path="account/withdrawal" element={<Withdrawal />} />
            <Route path="account/Deposit" element={<Deposit />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="account/Monitor" element={<Monitor />} />
            <Route path="account/Profile" element={<Profile />} />
            <Route path="account/History" element={<MiningHistory />} />
            <Route path="account/Settings" element={<Settings />} />
            <Route path="account/Support" element={<Support />} />
            <Route
              path="account/profile/edit-information"
              element={<EditInfo />}
            />
            <Route path="account/profile/contact-us" element={<Contact />} />
            <Route path="account/profile/referral" element={<Referral />} />
            <Route
              path="account/profile/change-password"
              element={<ChangePassword />}
            />
            <Route path="account/profile/contact-us" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="admin/over" element={<AdminOverview />} />
            <Route path="admin/users" element={<AdminPage />} />
            <Route path="admin/transactions" element={<TransactionsPage />} />
            <Route path="crypto/feeds" element={<Feeds />} />
            <Route path="fund-account" element={<FundAccount />} />
            <Route path="fund-success" element={<FundSuccess />} />
            <Route
              path="plan-account-creation"
              element={<PlanAccountCreation />}
            />
            <Route path="plan-creation" element={<PlanCreation />} />
            <Route
              path="account-verification"
              element={<SignUpVerification />}
            />
            {/* //AccountVerification */}

            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
