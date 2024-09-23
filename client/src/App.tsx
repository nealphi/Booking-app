import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from './pages/EditHotel';
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Booking from "./pages/Booking";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<p>home page</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/detail/:hotelId" element={<Detail/>} />

          {isLoggedIn && (
            <>
              <Route path="/add-hotel" element={<AddHotel />} />
              <Route path="/my-hotels" element={<MyHotels />} />
              <Route path="/edit-hotel/:hotelId" element={<EditHotel />} />
              <Route path="/hotel/:hotelId/booking" element={<Booking />} />
              

            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
