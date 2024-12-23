import { useState, useEffect } from "react";
import { motion } from "motion/react";

import img6 from "../assets/img_06.jpg";
import img5 from "../assets/img_05.jpg";
import img4 from "../assets/img_04.jpg";
import img3 from "../assets/img_03.jpg";
import img2 from "../assets/img_02.jpg";
import img1 from "../assets/img_01.jpg";

const collageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/*variants={collageVariants}>*/

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// const photos = [img1, img2, img3, img4, img5, img6];
// console.log(photos.map((photo) => photo));

const Collage = () => {
  /*
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos([img1, img2, img3, img4, img5, img6]);
  }, []);
  */

  const photos = [img1, img2];

  const renderPhotos = [];
  for (let i = 0; i < photos.length; i++) {
    renderPhotos.push(
      <div key={i + 1}>
        <img src={photos[i]} />;
      </div>
    );
  }

  console.log("Photos array:", photos);
  return (
    <div className="collage">
      <div>{renderPhotos}</div>

      <motion.div
        className="photo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1>Renderizado</h1>
        <img src={img1} alt={`Foto ${1}`} />
      </motion.div>
      <motion.div
        className="photo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
      >
        <h1>Renderizado</h1>
        <img src={img2} alt={`Foto ${2}`} />
      </motion.div>
      <motion.div
        className="photo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3 }}
      >
        <h1>Renderizado</h1>
        <img src={img3} alt={`Foto ${3}`} />
      </motion.div>
    </div>
  );
};

export default Collage;
