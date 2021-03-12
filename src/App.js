
import "./style.scss";
import PrimaryNavigation from "./components/PrimaryNavigation";
import Gallery from "./components/Gallery"
import Pitch from "./components/Pitch";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <PrimaryNavigation />
      <Gallery />
      <Pitch />
      <Testimonials />
      <Plans />
    </>
  );
}

export default App;
