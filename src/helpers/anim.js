import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const LogoAnim = {
  initial: {
    opacity: 0,
    filter: "blur(1vw)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0vw)",
    transition: {
      duration: .5
    }
  },
  exit: {
    opacity: 1,
  }
}

export const TitlePresence = {
  initial: {
    clipPath: "inset(0% -20% 100% -20%)",
    y: "100%",
  },
  animate: ({id, duration}) => ({
    clipPath: "inset(0% -20% -20% -20%)",
    y: "0%",
    transition: {
      duration,
      ease: ease.outExpo,
      delay: ((id + 1) * 0.1),
    },
    transitionEnd: {
      clipPath: "none",
      y: "auto",
    }
  }),
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    y: "100%",
  },
}

export const ListAnim = {
  line: {
    initial: {
      clipPath: 'inset(0% 100% 0% 0%)',
    },
    animate: (id) => ({
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 2,
        ease: ease.outExpo,
        delay: (id + 1) * 0.03 + 0.25,
      }
    }),
    exit: {
      clipPath: 'inset(0% 0% 0%)',
    }
  },
  text: {
    initial: {
      clipPath: "inset(0% -20% 100% -20%)",
      y: "100%",
    },
    animate: (id) => ({
      clipPath: "inset(0% -20% -20% -20%)",
      y: "0%",
      transition: {
        duration: 2,
        ease: ease.outExpo,
        delay: ((id + 1) * 0.1) + 0.3,
      },
      transitionEnd: {
        clipPath: "none",
        y: "auto",
      }
    }),
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      y: "100%",
    },
  }
}