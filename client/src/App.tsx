import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
import EditHotel from './pages/EditHotel';

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<p>home page</p>} />
          <Route path="/search" element={<p>search page</p>} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          {isLoggedIn && (
            <>
              <Route path="/add-hotel" element={<AddHotel />} />
              <Route path="/my-hotels" element={<MyHotels />} />
              <Route path="/edit-hotel/:hotelId" element={<EditHotel />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
