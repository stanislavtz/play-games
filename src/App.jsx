import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Catalog from "./components/Catalog";
import ErrorPage from "./components/ErrorPage";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  const [page, setPage] = useState("/home");

  const pages = {
    "/home": <WelcomeWorld />,
    "/catalog": <Catalog />,
    "/create": <CreateGame />,
    "/login": <Login />,
    "/register": <Register />,
  };

  function getRoute(path) {
    setPage(path);
  }

  return (
    <div id="box">
      <Header getRoute={getRoute} />

      <main id="main-content">{pages[page] || <ErrorPage />}</main>
    </div>
  );
}

export default App;
