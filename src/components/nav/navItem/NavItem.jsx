import Icon from '../../icon/Icon';
import styles from './navItem.module.css';

const NavItem = ({ href, icon, text }) => {
  return (
    <li className={styles.navItem} tabIndex={0}>
      <a href={href} tabIndex={-1}>
        <Icon name={icon} showWrapper={true} width="18" height="15" />
        <p className="body__md_semibold">{text}</p>
      </a>
    </li>
  );
};
export default NavItem;
