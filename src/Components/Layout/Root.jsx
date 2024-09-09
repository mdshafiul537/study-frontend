import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="w-full grid grid-cols-1 items-center justify-center gap-4">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
