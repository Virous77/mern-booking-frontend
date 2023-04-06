import { Route, Routes } from "react-router-dom";
import { HomePage, HotelPage, HotelList } from "../pages/index";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
