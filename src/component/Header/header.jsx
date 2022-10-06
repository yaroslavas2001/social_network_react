import s from  './header.module.css'
import imageLogo from "./../../style/blue-flower.png"
const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.header_logo} src={imageLogo} />
      <div className={s.header_text}>Social network</div>
    </header>
  );
}

export default Header;
