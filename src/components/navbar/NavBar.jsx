import Button from "../button/Button"
import styles from './navBar.module.css'
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Button variant="nav">
        <img
          src="/box.svg"
        />
        Входящие
      </Button>
    </nav>
  )
}
export default NavBar