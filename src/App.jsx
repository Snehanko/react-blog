import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Post from "./pages/Post";
import { Routes,Route,Link } from "react-router-dom";
import AddPost from "./pages/AddPost";
import { createContext,useState } from "react";

export const postContext = createContext(null);

function App() {

  const [posts,setPost]=useState( [
    { id: 1, title: "First Post", summary: "This is the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.",author:"John doe" },
    { id: 2, title: "Second Post", summary: "This is the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula ullamcorper metus, nec ullamcorper eros rhoncus rhoncus. Donec nunc turpis, cursus eget aliquam quis, aliquet non dolor. Fusce condimentum faucibus.", author:"Petter Kint" },
    { id: 3, title: "Third Post", summary: "Hello World, this is my first post for this Blog", author:"Snehanko Bose" },
  ])

  return (
    <postContext.Provider value={{posts,setPost}}>
      <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/post/:id" element={<Post/>} />
                <Route path="/addPost" element={<AddPost/>}/>
            </Routes>    
        </div>
    </postContext.Provider>
    
  );
}

export default App; 
