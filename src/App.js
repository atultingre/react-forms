import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Layout from "./Components/Layout/Layout";
import Login1 from "./Components/Login/Login1/Login1";
import Login2 from "./Components/Login/Login2/Login2";
import Login3 from "./Components/Login/Login3/Login3";
import Login4 from "./Components/Login/Login4/Login4";
import Login5 from "./Components/Login/Login5/Login5";
import Registration1 from "./Components/Registration/Registration1/Registration1";
import Registration2 from "./Components/Registration/Registration2/Registration2";
import Registration3 from "./Components/Registration/Registration3/Registration3";
import Registration4 from "./Components/Registration/Registration4/Registration4";
import Registration5 from "./Components/Registration/Registration5/Registration5";
import Login6 from "./Components/Login/Login6/Login6";
import Login7 from "./Components/Login/Login7/Login7";
import Login8 from "./Components/Login/Login8/Login8";
import Login9 from "./Components/Login/Login9/Login9";
import Login10 from "./Components/Login/Login10/Login10";
import Registration6 from "./Components/Registration/Registration6/Registration6";
import Login11 from "./Components/Login/Login11/Login11";
import Login12 from "./Components/Login/Login12/Login12";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="/login1" element={<Login1 />} />
          <Route exact path="/login2" element={<Login2 />} />
          <Route exact path="/login3" element={<Login3 />} />
          <Route exact path="/login4" element={<Login4/>}/>
          <Route exact path="/login5" element={<Login5 />} />
          <Route exact path="/login6" element={<Login6 />} />
          <Route exact path="/login7" element={<Login7 />} />
          <Route exact path="/login8" element={<Login8 />} />
          <Route exact path="/login9" element={<Login9 />} />
          <Route exact path="/login10" element={<Login10 />} />
          <Route exact path="/login11" element={<Login11 />} />
          <Route exact path="/login12" element={<Login12 />} />
          <Route exact path="/register1" element={<Registration1 />} />
          <Route exact path="/register2" element={<Registration2 />} />
          <Route exact path="/register3" element={<Registration3 />} />
          <Route exact path="/register4" element={<Registration4 />} />
          <Route exact path="/register5" element={<Registration5/>}/>
          <Route exact path="/register6" element={<Registration6/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
