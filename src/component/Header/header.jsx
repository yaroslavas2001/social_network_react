import s from './header.module.css'
import imageLogo from "./../../style/blue-flower.png"
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.header_logo} src={imageLogo} alt="logo" />
      <div className={s.header_text}>Social network</div>
      {props.isAuth ? props.login : <NavLink to='/login'>Войти</NavLink>}
      {props.isAuth ? <button onClick={props.logoutMe}>Выйти</button> : ''}
    </header>
  );
}

export default Header;
