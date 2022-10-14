import { Outlet } from "react-router";
import { Header } from "../../shared/components/Header";

import styles from './styles.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div >
  )
}