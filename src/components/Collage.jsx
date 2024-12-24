import { useState, useEffect } from "react";
import { motion } from "motion/react";

import img10 from "../assets/img_10.jpg";
import img9 from "../assets/img_09.jpg";
import img8 from "../assets/img_08.jpg";
import img7 from "../assets/img_07.jpg";
import img6 from "../assets/img_06.jpg";
import img5 from "../assets/img_05.jpg";
import img4 from "../assets/img_04.jpg";
import img3 from "../assets/img_03.jpg";
import img2 from "../assets/img_02.jpg";
import img1 from "../assets/img_01.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const randomInt = () => Math.floor(Math.random() * (20 + 20 + 1)) - 20;

const Collage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos([img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]);
  }, []);

  return (
    <motion.div
      className="collage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          className="photo"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: randomInt() }}
          transition={{ duration: 1.5, delay: index * 0.5 }}
        >
          <motion.img
            src={photo}
            alt={`Foto ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Collage;
