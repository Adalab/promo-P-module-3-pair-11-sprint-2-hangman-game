import "../styles/Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer class='footer'>
      <nav>
        <ul>
          <li class='footer__menu-item'>
            <Link to='/' class='footer__menu-link'>
              A jugar
            </Link>
          </li>
          <li class='footer__menu-item'>
            <Link to='/Menu/instructions' class='footer__menu-link active'>
              ¿Cómo se juega?
            </Link>
          </li>
          <li class='footer__menu-item'>
            <Link to='/Menu/options' class='footer__menu-link'>
              Más opciones
            </Link>
          </li>
        </ul>
      </nav>
      <small class='footer__copy'>© Adalab</small>
    </footer>
  );
}
export default Footer;
