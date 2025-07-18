import { motion } from "framer-motion";
function Train() {
  const bg = {
    backgroundImage: "url('./card__bg.png')",
    backgroundSize: "cover ",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#f0f0f0",
    height: "300px",
    width: "100%",
    borderRadius: "1rem",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="px-12"
    >
      <div
        className="flex flex-col items-center justify-center py-12 text-start"
        style={bg}
      >
        <div className="mb-4 text-2xl font-semibold text-white">
          <h3>Train your aiDR on your...</h3>
          <h3 className="italic text-secondary">preferred email st/</h3>
        </div>
        <p className="mb-6 text-lg text-neutral-500">
          You're in control, Train your aiDR on <br /> elements of your
          marketing strategy
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src="./check.svg" alt="" />
            <p className="text-secondary">Quick to ramp</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src="./check.svg" alt="" />
            <p className="text-secondary">Easy to optimize</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src="./check.svg" alt="" />
            <p className="text-secondary">Quick to scale up</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img src="./check.svg" alt="" />
            <p className="text-secondary">Works with all yours tools</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Train;
