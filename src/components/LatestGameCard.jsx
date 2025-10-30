function LatestGameCard({ game }) {
  const { title, imageUrl, rating } = game;
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={imageUrl} />
      </div>
      <h3>{title}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <p>Rating: {rating}</p>
      <div className="data-buttons">
        <a href="#" className="btn details-btn">
          Details
        </a>
      </div>
    </div>
  );
}

export default LatestGameCard;
