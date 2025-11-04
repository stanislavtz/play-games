import { Route, Routes } from "react-router";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Catalog from "./components/games/Catalog";
import ErrorPage from "./components/ErrorPage";
import CreateGame from "./components/CreateGame";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";
import GameDetails from "./components/GameDetails";

// eslint-disable-next-line react-refresh/only-export-components
export const games = [
  {
    id: 1,
    title: "Cover Fire",
    imageUrl: "/images/CoverFire.png",
    category: "Action",
    rating: 0,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, illo?",
    maxLevel: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum id molestiae similique ea voluptas aspernatur ipsam labore reiciendis illo nostrum, aliquam quisquam sit laudantium hic necessitatibus facere itaque deserunt?",
  },
  {
    id: 2,
    title: "Zombie Lang",
    imageUrl: "/images/ZombieLang.png",
    category: "Vertical Shooter",
    rating: 0,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, illo?",
    maxLevel: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum id molestiae similique ea voluptas aspernatur ipsam labore reiciendis illo nostrum, aliquam quisquam sit laudantium hic necessitatibus facere itaque deserunt?",
  },
  {
    id: 3,
    title: "MineCraft 1",
    imageUrl: "/images/MineCraft.png",
    category: "Fun",
    rating: 0,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, illo?",
    maxLevel: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum id molestiae similique ea voluptas aspernatur ipsam labore reiciendis illo nostrum, aliquam quisquam sit laudantium hic necessitatibus facere itaque deserunt?",
  },
  {
    id: 4,
    title: "MineCraft 2",
    imageUrl: "/images/MineCraft.png",
    category: "Fun",
    rating: 0,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, illo?",
    maxLevel: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum id molestiae similique ea voluptas aspernatur ipsam labore reiciendis illo nostrum, aliquam quisquam sit laudantium hic necessitatibus facere itaque deserunt?",
  },
  {
    id: 5,
    title: "MineCraft 3",
    imageUrl: "/images/MineCraft.png",
    category: "Fun",
    rating: 0,
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, illo?",
    maxLevel: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum id molestiae similique ea voluptas aspernatur ipsam labore reiciendis illo nostrum, aliquam quisquam sit laudantium hic necessitatibus facere itaque deserunt?",
  },
];

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route index element={<WelcomeWorld />} />
          <Route path="/" element={<WelcomeWorld />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
