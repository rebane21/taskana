import Header from "../components/header/Header"
import NavBar from "../components/navbar/NavBar"
import SideBar from "../components/sidebar/SideBar"
import IncomingTasks from "../pages/incomingTasks/IncomingTasks"
import styles from './appLayout.module.css'

const AppLayout = () => {
  return (
    <>
    <Header />
    <main className={styles.mainContent}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </main>
    </>
  )
}
export default AppLayout