import { Route, Routes } from "react-router-dom";
import { HomePage, HotelPage } from "../pages/index";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel" element={<HotelPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
