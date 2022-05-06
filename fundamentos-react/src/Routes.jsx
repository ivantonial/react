import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { Home } from "./pages/home";
import { EditProfile } from "./pages/editProfile";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/editprofile" element={<EditProfile />} />
      </Routes>
    </Router>
  )
};