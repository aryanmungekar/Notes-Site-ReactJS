function Header() {
    return ( 
        <>
        <header>
  <div className="header-content">
    <div>
      <h1>Pune University</h1>
    </div>
    <div>
      <nav>
        {/* Search Button */}
        <a href="/search/">
          <i className="fa-solid fa-magnifying-glass" />
        </a>
      </nav>
    </div>
  </div>
</header>

        </>
     );
}

export default Header;