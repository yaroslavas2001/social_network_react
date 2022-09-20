import s from  './header.module.css'
const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header_logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
      <div>12345678</div>
    </header>
  );
}

export default Header;
