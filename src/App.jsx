import { Route, Routes } from "react-router-dom";
import Home from "./Sections/Home";
import PrivacyPolicy from "./Sections/PrivacyPolicy";
import Terms from "./Sections/Terms";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}  />
      <Route path="/TermsOfService" element={<Terms/>}  />
    </Routes>
  );
};

export default App;
