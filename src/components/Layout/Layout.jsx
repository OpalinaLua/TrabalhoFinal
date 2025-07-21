import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ onSearch, onClear }) => {
  return (
    <>
      <Header onClear={onClear} onSearch={onSearch} />
      <Outlet />
      <Footer />
    </>
  );
};
