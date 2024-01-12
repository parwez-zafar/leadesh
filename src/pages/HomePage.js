import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./examples/Signin";
import Signup from "./examples/Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./examples/ResetPassword";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";
import otp from "./examples/otp";
import QrPage from "./examples/QrPage";

// documentation pages

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Keywords from './examples/Keywords';
import Messages from './examples/Messages';
import PricingPage from './examples/PricingPage';
import StarMessage from './examples/StarMessage';
import Faq from '../components/Faq';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsAndCondition from '../components/TermsAndCondition';



const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => (<> <Preloader show={loaded ? false : true} /> <Component {...props} /> </>)} />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem('settingsVisible') === 'false' ? false : true
  }

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem('settingsVisible', !showSettings);
  }


  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
        </main>
      </>
    )}
    />
  );
};

// console.log(document.cookie);


const HomePage = () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
    <RouteWithLoader exact path={Routes.otp.path} component={otp} />
    <RouteWithLoader exact path={Routes.pricePage.path} component={PricingPage} />
    <RouteWithLoader exact path={Routes.faq.path} component={Faq} />
    <RouteWithLoader exact path={Routes.privacy.path} component={PrivacyPolicy} />
    <RouteWithLoader exact path={Routes.term.path} component={TermsAndCondition} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />
    <RouteWithSidebar exact path={Routes.keyword.path} component={Keywords} />
    {/* <RouteWithSidebar exact path={Routes.messages.path} component={Messages} /> */}
    <RouteWithSidebar exact path={Routes.messages.path} component={Messages} />
    <RouteWithSidebar exact path={Routes.StaredMessages.path} component={StarMessage} />
    <RouteWithSidebar exact path={Routes.QrPage.path} component={QrPage} />

    {/* components */}




    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
export default HomePage;