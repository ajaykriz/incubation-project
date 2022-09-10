import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Header from "./components/Header";
import EditUser from "./pages/EditUser";
import IncubationForm from "./pages/IncubationForm";
import TrackApplication from "./pages/trackApplication";
import ViewApplication from "./pages/viewApplication";
import BookingSlots from "./pages/Bookingslot";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/editUser/:id" element={<EditUser />} />
            <Route path="/incubationForm" element={<IncubationForm />} />
            <Route path="/trackapplication" element={<TrackApplication />} />
            <Route path="/viewapplication" element={<ViewApplication />} />
            <Route path="/bookingslot" element={<BookingSlots />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
