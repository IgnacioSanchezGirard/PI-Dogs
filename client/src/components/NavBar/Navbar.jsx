import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function PageOptions() {
  return (
    <div className={styles.cont}>
      <NavLink
        activeClassName={styles.active}
        style={{ textDecoration: "none" }}
        to="/home"
      >
        <p>Home</p>{" "}
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        style={{ textDecoration: "none" }}
        to="/create"
      >
        <p>Create New</p>{" "}
      </NavLink>
    </div>
  );
}