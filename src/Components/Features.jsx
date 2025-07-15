import { motion } from "framer-motion";
function Features() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex px-2 justify-evenly xl:justify-around flex-wrap py-12 items-center gap-4 container mx-auto transition-all duration-300">
      <div className="flex flex-col gap-4 w-80 h-72  py-4 px-8 rounded-lg border-dashed cursor-pointer group transition duration-300 border-2 border-transparent hover:border-dotted hover:border-gray-500 hover:scale-105">
        <img src="./icons__1.svg" className="w-12 h-12" />
        <h2 className="text-2xl text-white font-bold group-hover:text-gray-400 transition-colors duration-300">
          You're in Control
        </h2>
        <p className="text-white text-lg font-light group-hover:text-gray-500 transition-colors duration-300">
          aiDRs operate based on your rules. You guide the machine, the aiDRs
          execute the work.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-80 h-72  py-4 px-8 rounded-lg border-dashed cursor-pointer group transition duration-300 border-2 border-transparent hover:border-dotted hover:border-gray-500 hover:scale-105">
        <img src="./icons__2.svg" className="w-12 h-12" />
        <h2 className="text-2xl text-white font-bold group-hover:text-gray-400 transition-colors duration-300">
          Infinitely Scalable
        </h2>
        <p className="text-white text-lg font-light group-hover:text-gray-500 transition-colors duration-300">
          Train an aiDR on a patch. When you are happy with the results, scale
          it effortlessly.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-80 h-72 py-4 px-8 rounded-lg border-dashed cursor-pointer group transition duration-300 border-2 border-transparent hover:border-dotted hover:border-gray-500 hover:scale-105">
        <img src="./icons__3.svg" className="w-12 h-12" />
        <h2 className="text-2xl text-white font-bold group-hover:text-gray-400 transition-colors duration-300">
          Incredibly Flexible
        </h2>
        <p className="text-white text-lg font-light group-hover:text-gray-500 transition-colors duration-300">
          Train an aiDR on an outbound patch, to nurture inbound leads, or to
          reach out to your long tail of SMB customers at renewal time.
        </p>
      </div>
    </motion.div>
  );
}

export default Features;
