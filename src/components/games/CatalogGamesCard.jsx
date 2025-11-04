function CatalogGamesCard({ game }) {
  const { id, title, imageUrl, category } = game;

  return (
    <div className="allGames">
      <div className="allGames-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <a href={`/games/${id}`} className="details-button">
          Details
        </a>
      </div>
    </div>
  );
}

export default CatalogGamesCard;
