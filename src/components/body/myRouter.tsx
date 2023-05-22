import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Services from "./services menu/servises";
import TheRevelotion from "../header/theRevelotion";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import { Component } from "react";
import FreeEstimate from "./freeEstimate";
import CustomSoftwareDevelopment from "./services menu/customSoftwareDevelopment";
import MobileAppDevelopment from "./services menu/mobileAppDevelopment";
import WebsiteDevelopment from "./services menu/websiteDevelopment";
export default class MyRouter extends Component {
  render(): React.ReactNode {
    return (
      <>
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/revelotion" element={<TheRevelotion />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/freeEstimate" element={<FreeEstimate />} />
            <Route path="/customSoftwareDevelopment" element={<CustomSoftwareDevelopment />} />
            <Route path="/mobileAppDevelopment" element={<MobileAppDevelopment />} />
            <Route path="/websiteDevelopment" element={<WebsiteDevelopment />} />
          </Routes>
        </div>
      </>
    );
  }
}
