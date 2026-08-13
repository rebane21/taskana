import { Icon } from '@/components';
import { FOCUS_RING } from '@/constants';
import styles from './navItem.module.css';
import { clsx } from '@/utils';
export const NavItem = ({ href, icon, text }) => {
  return (
    <li className={styles.navItem}>
      <a href={href} className={clsx(styles.navLink, FOCUS_RING)}>
        <div className="iconWrapper">
          <Icon name={icon} className={styles.icon} />
        </div>
        <p className="body__md_semibold">{text}</p>
      </a>
    </li>
  );
};
