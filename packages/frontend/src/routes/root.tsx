import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Error from "../components/Error";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Navbar />
      </div>
      <Error />

      <Outlet />
    </>
  );
}
