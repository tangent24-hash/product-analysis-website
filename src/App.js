import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
