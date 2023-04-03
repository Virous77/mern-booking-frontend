import Navbar from "./components/layout/Navbar";
import AppRouter from "./router/AppRouter";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <div className="cool"></div> */}
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
