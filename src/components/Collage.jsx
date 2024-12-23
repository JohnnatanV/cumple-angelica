import { useState, useEffect } from "react";
import { motion } from "motion/react";

import img6 from "../assets/img_06.jpg";
import img5 from "../assets/img_05.jpg";
import img4 from "../assets/img_04.jpg";
import img3 from "../assets/img_03.jpg";
import img2 from "../assets/img_02.jpg";
import img1 from "../assets/img_01.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const Collage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos([img1, img2, img3, img4, img5, img6]);
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
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
