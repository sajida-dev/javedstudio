"use client";

import Image from "next/image";
import styles from "./module.module.scss";

export default function StyledComponent() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <main className={styles.main}>
                <section className={styles.headings}>
                    <h1 className={styles.title}>Javed Studio</h1>
                    <h2 className={styles.subtitle}>Photography & Videography</h2>
                </section>
                <section className={styles.banner}>
                    <div className={styles.bannerWrapper}>
                        <div className={styles.box}>
                            <svg height="50" width="50"><circle cx="25" cy="25" r="20" /></svg>
                            <p>Creative Shots</p>
                        </div>
                        <div className={styles.box}>
                            <svg height="50" width="50"><circle cx="25" cy="25" r="20" /></svg>
                            <p>Video Edits</p>
                        </div>
                        <div className={styles.box}>
                            <svg height="50" width="50"><circle cx="25" cy="25" r="20" /></svg>
                            <p>Weddings</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
