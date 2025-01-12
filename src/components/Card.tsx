import { useState } from "react";
import { Fruit } from "../types/Fruit";
import fruitsIcons from "../assets/fruitsIcons";
import { motion, useMotionValue } from "framer-motion";

const Card = ({ fruit }: { fruit: Fruit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const rotateValue = useMotionValue(0); // Stocke la rotation actuelle

  return (
    <motion.div
      key={fruit.id}
      className="fruit-item-container"
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
        boxShadow: "3px 3px 3px 3px rgba(105, 16, 16, 0.2)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.8 }}
      onClick={() => console.log(`Show ${fruit.name} data.`)}
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
        <p className="fruit-name" key={fruit.id}>
          {fruit.name}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
