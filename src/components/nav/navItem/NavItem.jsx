import Icon from '@/components/icon/Icon';
import styles from './navItem.module.css';

const NavItem = ({ href, icon, text }) => {
  return (
    <li className={styles.navItem}>
      <a href={href} className={styles.navLink}>
        <div className={styles.iconWrapper}>
          <Icon name={icon} className={styles.icon} />
        </div>
        <p className="body__md_semibold">{text}</p>
      </a>
    </li>
  );
};
export default NavItem;
