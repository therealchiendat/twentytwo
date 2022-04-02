import Routes from "./Router";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/media/logo.png";
import './App.css';

function App() {
  let navigate = useNavigate();
  function handleNav(event: any) {
    if (event) navigate(event.target?.id)
  }
  return (
    <div className="App">
      <div className="appBar">
        <div className="leftAligned a-link" onClick={handleNav} id="">
          <div className="logo">
            <img width="50" height="70" src={logo}></img>
          </div>
          <div>
            Twenty Two
          </div>
        </div>
        <div className="rightAligned">
          <div className="a-link" onClick={handleNav} id="about">About</div>
          <div className="a-link" >some menu</div>
          <div className="a-link">other menu</div>
        </div>
        <div className="rightAligned">
          <div className="action-button a-link" ><a href="https://forms.gle/rCdi3bkEjopC2vxW7">Contact Us 😁</a></div>
        </div>
      </div>
      <div className="Routes">
        <Routes />
      </div>
      <div className="footer">

        This is the footer
      </div>
    </div>
  );
}

export default App;
