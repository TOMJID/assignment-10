import { Button } from "@heroui/button";
import { motion } from "framer-motion";
function GetStarted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mt-12 flex flex-col items-center justify-center space-y-6 pb-16 text-center"
    >
      <h6 className="text-light uppercase text-secondary">Get Started</h6>
      <h4 className="text-3xl font-semibold italic text-white">
        Embrace{" "}
        <span className="font-extrabold not-italic"> the new era of </span>{" "}
        outbound
      </h4>
      <p className="max-w-2xl text-lg text-neutral-400">
        Wizia lets you train, activate, and optimize aiDRs. <br />
        Take your outbound to new levels of performance and efficiency.
      </p>

      <Button className="group mt-4 rounded-full bg-secondary px-6 py-6 font-semibold text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
        Sign Up for the Beta{" "}
        <img
          src="./arrow.svg"
          className="transition-all group-hover:scale-125 group-hover:shadow-md"
        />
      </Button>
    </motion.div>
  );
}

export default GetStarted;
