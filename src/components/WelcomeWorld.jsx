import LatestGameCard from "./games/LatestGameCard";
import { games } from "./games/Catalog";

function WelcomeWorld() {
  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="/images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>

        {games.length > 0 &&
          games
            .slice(games.length - 3)
            .map((game) => <LatestGameCard key={game.id} game={game} />)}

        {games.length === 0 && <p className="no-articles">No games yet</p>}
      </div>
    </section>
  );
}

export default WelcomeWorld;
