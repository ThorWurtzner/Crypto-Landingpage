
import "./style.scss";
import PrimaryNavigation from "./components/PrimaryNavigation";
import Gallery from "./components/Gallery"
import Pitch from "./components/Pitch";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import CookieConsent from "./components/CookieConsent";
import SetCookies from "./components/helpers/setCookies";
import { useEffect, useState } from "react";

function App() {
  var [hasCookie, setHasCookie] = useState(false);
  useEffect(function() {
    var cookie = document.cookie;
    setHasCookie(cookie.includes("landingpagedemo"));

    if (hasCookie) {
      var cookieArray = cookie.split("; ");
      var config = cookieArray.filter(string => string.includes("acceptnecessary"));

      config = new URLSearchParams(config[0]).get("landingpagedemo");
      SetCookies(JSON.parse(config));
      document.body.className = "";
    }
  }, [hasCookie, setHasCookie])

  return (
    <>
      <PrimaryNavigation />
      <Gallery />
      <Pitch />
      <Testimonials />
      <Plans />
      { hasCookie ? null : <CookieConsent />}
    </>
  );
}

export default App;
