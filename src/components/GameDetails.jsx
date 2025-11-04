import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { games } from "../App";

function GameDetails() {
  const params = useParams();
  const [game, setGame] = useState({});

  const id = Number(params.gameId);

  useEffect(() => {
    const searchedGame = games.find((g) => g.id === id);

    setGame(searchedGame);
  }, [id]);

  if (Object.keys(game).length === 0) {
    return (
      <section id="game-details">
        <h1>No game details yet</h1>
      </section>
    );
  }

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.description}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            <li className="comment">
              <p>Content: I rate this one quite highly.</p>
            </li>
            <li className="comment">
              <p>Content: The best game.</p>
            </li>
          </ul>
          <p className="no-comment">No comments.</p>
        </div>

        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
}

export default GameDetails;
