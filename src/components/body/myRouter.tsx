import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Services from "./services/servises";
import TheRevelotion from "../header/theRevelotion";
import AboutUs from "./aboutUs";
import ContactUs from "./contactUs";
import { Component } from "react";
import FreeEstimate from "./freeEstimate";

export default class MyRouter extends Component{
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
            </Routes>
          </div>
        </>
      );
    }
  }