import CatalogGamesCard from "./CatalogGamesCard";

import { games } from "../../App";

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
