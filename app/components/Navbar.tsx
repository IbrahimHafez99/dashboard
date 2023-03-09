"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
type IconProps = {
  style: string;
  title: string;
  imgURL: string;
  alt: string;
};
const Icon = ({ style, title, imgURL, alt }: IconProps) => (
  <div className={styles.icon}>
    <Link className={styles.icon} href="/dashboard">
      <img src={imgURL} alt={alt} />
      <span>{title}</span>
    </Link>
  </div>
);

const Navbar = () => {
  const [isActive, setIsActive] = useState<string>("dashboard");
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.png.avif"
              alt="logo"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li>
          <Link className={styles.icon} href="/dashboard">
            <img
              style={{ width: "1rem", marginBottom: ".5em" }}
              src="/home.svg"
              alt="dashboard"
            />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link className={styles.icon} href="/refresh">
            <img
              style={{ width: "1rem", marginBottom: ".5em" }}
              src="/refresh-svgrepo-com.svg"
              alt="refresh"
            />
            <span>Refresh</span>
          </Link>
        </li>
        <li>
          <Link className={styles.icon} href="/close">
            <img
              style={{ width: "1rem", marginBottom: ".5em" }}
              src="/profile-svgrepo-com.svg"
              alt="close"
            />
            <span>Close</span>
          </Link>
        </li>
      </ul>
      <Link className={styles.icon} href="/logout">
        <img
          style={{ width: "1rem", marginBottom: ".5em" }}
          src="/logout-svgrepo-com.svg"
          alt="logout"
        />
        <span>Logout</span>
      </Link>
    </nav>
  );
};

export default Navbar;
