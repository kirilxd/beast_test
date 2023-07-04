import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Notification from "../components/Notification";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <Navbar />
      </div>
      <Notification />

      <Outlet />
    </>
  );
}
