import s from  './header.module.css'
import imageLogo from "./../../style/blue-flower.png"
const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.header_logo} src={imageLogo} alt="logo" />
      <div className={s.header_text}>Social network</div>
      {props.isAuth? props.login:"Войти"}
    </header>
  );
}

export default Header;
