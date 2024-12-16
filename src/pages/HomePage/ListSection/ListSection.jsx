"use client";
import Image from "next/image";
import s from "./ListSection.module.scss";
import { useState } from "react";
import listContent from "./listContent.json";
import clsx from "clsx";
import { motion } from "framer-motion";
import { anim, ListAnim } from "@/helpers/anim";

export const ListSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSetActive = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={s.list}>
      <div className={`${s.top} ${s.grid} shadow`}>
        <motion.p {...anim(ListAnim.text)} custom={0}>Description</motion.p>
        <motion.p {...anim(ListAnim.text)} custom={0}>Day</motion.p>
        <motion.p {...anim(ListAnim.text)} custom={0}>Year</motion.p>
        <motion.p {...anim(ListAnim.text)} custom={0}>Killed</motion.p>
        <motion.span className={s.line} {...anim(ListAnim.line)}  custom={0}/>
      </div>

      {listContent.map((currI, i) => (
        <div
          className={clsx(`${s.mainItem}`, {
            [s.mainItem__active]: activeIndex === i,
          })}
          key={i}
        >
          <div
            className={`${s.grid} ${s.head}`}
            onClick={() => handleSetActive(i)}
          >
            <motion.p {...anim(ListAnim.text)} custom={i+1}>{currI.name}</motion.p>
            <motion.p {...anim(ListAnim.text)} custom={i+1}>{currI.day}</motion.p>
            <motion.p {...anim(ListAnim.text)} custom={i+1}>{currI.year}</motion.p>
            <motion.p {...anim(ListAnim.text)} custom={i+1}>{currI.victims}</motion.p>
          </div>
          <div className={`${s.grid} ${s.content}`}>
            <div className={s.image}>
              <Image src={currI.image} fill alt="" />
            </div>
          </div>
          <motion.span
            {...anim(ListAnim.line)}
            custom={i + 1}
            className={s.line}
          />
        </div>
      ))}
    </div>
  );
};
