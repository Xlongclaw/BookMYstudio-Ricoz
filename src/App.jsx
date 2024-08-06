import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import BookTour from "./pages/BookTour";
import CustomSchedule from "./pages/CustomSchedule";
import ScheduleTour from "./pages/ScheduleTour";
import RequestTour from "./pages/RequestTour";
import Dashboard from "./pages/Dashboard";
import Studio from "./pages/Studio";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/booktour" element={<BookTour />} />
        <Route path="/customSchedule" element={<CustomSchedule />} />
        <Route path="/scheduleTour" element={<ScheduleTour />}>
          <Route path="requesttour" element={<RequestTour />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/studio" element={<Studio />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
