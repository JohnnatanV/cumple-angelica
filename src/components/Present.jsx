import { motion } from "motion/react";
const Present = () => {
  const message = "Feliz cumpleaños, Muñequita hermosa";
  return (
    <div className="present">
      <motion.h1
        className="kaushan-script-regular message"
        initial={{ opacity: 0, sacle: 0, color: "#ffffff" }}
        animate={{ opacity: 1, scale: 1.5, color: "#000" }}
        transition={{ duration: 1.5 }}
      >
        {message}
      </motion.h1>
      <div>
        <p>Espero que este collage te guste. 🎉</p>
        <div className="collage">
          {/* Aquí puedes incluir las imágenes */}
          <img src="imagen1.jpg" alt="Foto 1" />
          <img src="imagen2.jpg" alt="Foto 2" />
          {/* Agrega más imágenes según necesites */}
        </div>
      </div>
    </div>
  );
};

export default Present;
