function ErrorPage({ children }) {
  return (
    <section id="catalog-page">
      <h1>404, Page Not Found</h1>
      <p className="no-articles">{children}</p>
    </section>
  );
}

export default ErrorPage;
