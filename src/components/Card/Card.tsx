import { useState } from "react";
import { Fruit } from "../../types/Fruit";
import { motion, useMotionValue } from "framer-motion";
import fruitsIcons from "../../assets/fruitsIcons";
import ThemedText from "../ThemedText/ThemedText";
import "./Card.css";

type CardProps = {
  fruit: Fruit;
  OnClick: () => void;
};

const Card = ({ fruit, OnClick }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotateValue = useMotionValue(0);

  return (
    <motion.div
      key={fruit.id}
      className="card-container"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        cursor: "pointer",
        scale: 1.1,
        boxShadow: "3px 3px 3px 3px rgba(247, 52, 94, 0.17)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.8 }}
      onClick={OnClick}
    >
      <div className="fruit-item">
        <motion.div
          style={{ rotate: rotateValue }}
          animate={
            isHovered
              ? { rotate: [rotateValue.get(), 20, -20, rotateValue.get()] }
              : { rotate: rotateValue.get() }
          }
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 1,
          }}
        >
          <img
            src={
              (fruitsIcons as Record<string, string>)[
                fruit.name.toLocaleLowerCase()
              ]
            }
            width={64}
            height={64}
            alt={fruit.name.toLocaleLowerCase()}
          />
        </motion.div>
        <div key={fruit.id}>
          {" "}
          <ThemedText>{fruit.name}</ThemedText>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
