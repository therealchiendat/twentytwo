import Routes from "./Router";
import logo from "../src/assets/media/logo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appBar">
        <div className="leftAligned">
          <div className="logo">
            <img width="50" height="70" src={logo}></img>
          </div>
          <div>
            Twenty Two
          </div>
        </div>
        <div className="rightAligned">
          <div>some</div>
          <div>menu</div>
        </div>
        <div className="rightAligned">
          <div className="action-button"><a href="https://forms.gle/rCdi3bkEjopC2vxW7">Contact Us 😁</a></div>
        </div>
      </div>
      <Routes />
      <div className="footer">

        Bla
      </div>
    </div>
  );
}

export default App;
