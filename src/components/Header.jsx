function Header({ getRoute }) {
  function getUrlHandler(e) {
    e.preventDefault();

    const url = new URL(e.target.href);

    getRoute(url.pathname);
  }

  return (
    <header onClick={getUrlHandler}>
      <h1>
        <a className="home" href="/home">
          GamesPlay
        </a>
      </h1>
      <nav>
        <a href="/catalog">All Games</a>
        <div id="user">
          <a href="/create">Create Game</a>
          <a href="/logout">Logout</a>
        </div>
        <div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
