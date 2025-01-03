import { motion } from "motion/react";
import Collage from "./Collage";

const Present = () => {
  const message =
    "Un mensaje de todos los que te amamos, \n los que estamos a tu lado, \n los que estan lejos \n y los que ya no pueden estar. \n Feliz cumpleaños, Muñequita hermosa";
  return (
    <div className="present">
      <motion.h1
        className="kaushan-script-regular message"
        initial={{ opacity: 0, scale: 0, color: "#ffffff" }}
        animate={{ opacity: 1, scale: 1.15, color: "#222" }}
        transition={{
          duration: 1.5,
          delay: 8,
          type: "spring",
          visualDuration: 1,
          bounce: 0.5,
        }}
      >
        {message}
      </motion.h1>
      <div>
        <Collage />
      </div>
    </div>
  );
};

export default Present;
