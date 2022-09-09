const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
      <router-view />
    </header>
  );
}

export default Header;
