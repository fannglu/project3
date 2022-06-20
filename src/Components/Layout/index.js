// import { Outlet } from "react-router-dom";
import "./index.scss";
import NavBar from "../NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

//functional component

const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <div className="row">
          <div className="left col-4">
            
          </div>
          {/* <div className="right col-8"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
