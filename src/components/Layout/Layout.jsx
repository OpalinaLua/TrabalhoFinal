import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ onSearch, onClear }) => {
  return (
    <>
      <div>
        <div>
          <Header onClear={onClear} onSearch={onSearch} />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
