import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import { Routes,Route,Link } from "react-router-dom";
import AddPost from "./pages/AddPost";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Post/>} />
          <Route path="/addPost" element={<AddPost/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
