import { motion } from "framer-motion";
function Partners() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="partners bg-foreground py-8">
      <h2 className="text-center uppercase transition-all text-secondary my-8 font-light">
        Our trusted partners
      </h2>
      <div className="max-w-5xl flex flex-wrap px-4 justify-around items-center gap-4 mx-auto my-2">
        <img
          src="./BackHub__logo.svg"
          alt="BackHub logo displayed among other partner logos in a welcoming and professional environment. The logos are arranged in a row, conveying trust and collaboration. Text above reads Our trusted partners."
        />
        <img
          src="./CableLabs__logo.svg"
          alt="CableLabs logo shown alongside other partner logos in a collaborative setting. The environment is clean and organized, emphasizing partnership and reliability. Text above reads Our trusted partners."
        />
        <img
          src="./DBS__logo.svg"
          alt="DBS logo presented with other partner logos in a friendly and professional atmosphere. The arrangement highlights teamwork and mutual support. Text above reads Our trusted partners."
        />
        <img
          src="./EasyEuro__logo.svg"
          alt="EasyEuro logo featured among several partner logos in a supportive and trustworthy environment. The display suggests unity and shared values. Text above reads Our trusted partners."
        />
        <img
          src="./AMD__logo.svg"
          alt="AMD logo positioned with other partner logos in a positive and collaborative setting. The overall tone is inclusive and confident. Text above reads Our trusted partners."
        />
      </div>
    </motion.div>
  );
}

export default Partners;
