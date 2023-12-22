import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useAuthentication } from "../../Hooks/useAuthentication";
import { useAuthValue } from "../../Context/AuthContext";

import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";

const Navbar = ({ toggleTheme, theme }) => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();
  const [active, setActive] = useState(false);

  // Adicione a classe "active" ao clicar
  const handleClick = () => {
    setActive(!active);
    toggleTheme();
  };

  // Função para mudar o ícone do botão do tema
  const getThemeIcon = () => {
    if (theme === "light") {
      return Sun;
    } else {
      return Moon;
    }
  };

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <NavLink to="/" className={styles.brand}>
        Happy <span>Moments</span>
      </NavLink>
      <ul className={styles.link_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/create/post"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <li>
            <NavLink
            >
              <button onClick={logout}>Sair</button>
            </NavLink>
          </li>
        )}
        <li>
          <div className={styles.themeToggle}>
            <button
              className={active ? styles.active : ""}
              onClick={handleClick}
            >
              <img
                className={`${theme === "light" ? styles.sun : styles.moon}`}
                src={getThemeIcon()}
                alt={theme === "light" ? "Light mode" : "Dark mode"}
              />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
