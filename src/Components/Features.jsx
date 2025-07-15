import { motion } from "framer-motion";
function Features() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="container mx-auto flex flex-wrap items-center justify-evenly gap-4 px-2 py-12 transition-all duration-300 xl:justify-around"
    >
      <div className="group flex h-72 w-80 cursor-pointer flex-col gap-4 rounded-lg border-2 border-dashed border-transparent px-8 py-4 transition duration-300 hover:scale-105 hover:border-dotted hover:border-gray-500">
        <img src="./icons__1.svg" className="h-12 w-12" />
        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-gray-400">
          You're in Control
        </h2>
        <p className="text-lg font-light text-white transition-colors duration-300 group-hover:text-gray-500">
          aiDRs operate based on your rules. You guide the machine, the aiDRs
          execute the work.
        </p>
      </div>
      <div className="group flex h-72 w-80 cursor-pointer flex-col gap-4 rounded-lg border-2 border-dashed border-transparent px-8 py-4 transition duration-300 hover:scale-105 hover:border-dotted hover:border-gray-500">
        <img src="./icons__2.svg" className="h-12 w-12" />
        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-gray-400">
          Infinitely Scalable
        </h2>
        <p className="text-lg font-light text-white transition-colors duration-300 group-hover:text-gray-500">
          Train an aiDR on a patch. When you are happy with the results, scale
          it effortlessly.
        </p>
      </div>
      <div className="group flex h-72 w-80 cursor-pointer flex-col gap-4 rounded-lg border-2 border-dashed border-transparent px-8 py-4 transition duration-300 hover:scale-105 hover:border-dotted hover:border-gray-500">
        <img src="./icons__3.svg" className="h-12 w-12" />
        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-gray-400">
          Incredibly Flexible
        </h2>
        <p className="text-lg font-light text-white transition-colors duration-300 group-hover:text-gray-500">
          Train an aiDR on an outbound patch, to nurture inbound leads, or to
          reach out to your long tail of SMB customers at renewal time.
        </p>
      </div>
    </motion.div>
  );
}

export default Features;
