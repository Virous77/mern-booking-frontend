import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  HotelPage,
  HotelList,
  LoginPage,
  RegisterPage,
} from "../pages/index";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
