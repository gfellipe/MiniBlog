import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "./Hooks/useAuthentication";

// context
import { AuthProvider } from "./Context/AuthContext";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CreatePost from "./Pages/CreatePost/CreatePost";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Search from "./Pages/Search/Search";
import Posts from "./Pages/Posts/Posts";
import EditPost from "./Pages/EditPost/EditPost";

const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  const [theme, setTheme] = useState("light");

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={`App ${theme}`}>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Posts />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="login" />}
              />
              <Route
                path="/create/post"
                element={user ? <CreatePost /> : <Navigate to="login" />}
              />
              <Route
                theme={theme}
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="login" />}
              />
            </Routes>
          </div>
          <Footer theme={theme} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
