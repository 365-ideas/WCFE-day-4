"use client";
import React from "react";
import { Logo, LogoSmall } from "../Logo/Logo";

import s from "./Header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { anim, LogoAnim, TitlePresence } from "@/helpers/anim";

export default function Header() {
  return (
    <header className={s.header}>
      <LogoSmall className={s.logo} {...anim(LogoAnim)}/>

      <div className={s.right}>
        <div>
          <motion.p {...anim(TitlePresence)} custom={{ id: 0, duration: 1 }}>
            Kyiv, Ukraine 16:23
          </motion.p>
        </div>
        <div className={s.nav}>
          <Link href="/" className={s.nav__link}>
            <motion.p
              {...anim(TitlePresence)}
              custom={{ id: 0.5, duration: 1 }}
            >
              Team
            </motion.p>
          </Link>
          <Link href="/" className={s.nav__link}>
            <motion.p {...anim(TitlePresence)} custom={{ id: 1, duration: 1 }}>
              About the project
            </motion.p>
          </Link>
          <Link href="/" className={s.nav__link}>
            <motion.p
              {...anim(TitlePresence)}
              custom={{ id: 1.5, duration: 1 }}
            >
              Contacts
            </motion.p>
          </Link>
        </div>
      </div>
    </header>
  );
}
