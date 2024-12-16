"use client";
import React from "react";
import s from "./HomePage.module.scss";
import { motion } from "framer-motion";
import { anim, TitlePresence } from "@/helpers/anim";
import ListSection from "./ListSection/ListSection";

export default function HomePage() {
  return (
    <div className={s.home}>
      <div className={s.title}>
        <h1>
          <motion.p {...anim(TitlePresence)} custom={{ id: 0, duration: 1.2 }}>
            Russia's missile
          </motion.p>
          <motion.p {...anim(TitlePresence)} custom={{ id: 1, duration: 1.2 }}>
            attacks on Ukraine.
          </motion.p>
        </h1>
        <motion.div
          className={s.title_symbol}
          {...anim(TitlePresence)}
          custom={{ id: 0, duration: 1.2 }}
        >
          <svg
            viewBox="0 0 39 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="0.78" height="14.04" fill="#868E96" />
            <rect
              width="3.12"
              height="14.04"
              transform="translate(4.67969)"
              fill="#868E96"
            />
            <rect
              width="9.36"
              height="14.04"
              transform="translate(11.6992)"
              fill="#868E96"
            />
            <rect
              width="14.04"
              height="14.04"
              transform="translate(24.9609)"
              fill="#868E96"
            />
          </svg>
        </motion.div>
      </div>
      <ListSection />
    </div>
  );
}
