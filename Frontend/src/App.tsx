import Navbar from "./components/layout/Navbar";
import AppRouter from "./router/AppRouter";
import Footer from "./components/layout/Footer";
import { useGlobalContext } from "./context/useGlobal";
import { useLocation } from "react-router-dom";

const App = () => {
  const value = useGlobalContext();
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" && (
        <>{value?.showCalander && <div className="cool"></div>}</>
      )}

      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
