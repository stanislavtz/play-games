import CatalogGamesCard from "./CatalogGamesCard";

// eslint-disable-next-line react-refresh/only-export-components
export const games = [
  {
    id: 1,
    title: "Cover Fire",
    imageUrl: "/images/CoverFire.png",
    category: "Action",
    rating: 0,
  },
  {
    id: 2,
    title: "Zombie Lang",
    imageUrl: "/images/ZombieLang.png",
    category: "Vertical Shooter",
    rating: 0,
  },
  {
    id: 3,
    title: "MineCraft 1",
    imageUrl: "/images/MineCraft.png",
    category: "Fun",
    rating: 0,
  },
  {
    id: 4,
    title: "MineCraft 2",
    imageUrl: "/images/MineCraft.png",
    category: "Fun",
    rating: 0,
  },
  {
    id: 5,
    title: "MineCraft 3",
    imageUrl: "/images/MineCraft.png",
    category: "Fun",
    rating: 0,
  },
];

function Catalog() {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.length > 0 &&
        games.map((game) => <CatalogGamesCard key={game.id} game={game} />)}

      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
}

export default Catalog;
