import { Button } from "@heroui/button";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="h-full bg-cover bg-center px-6 py-16 text-white md:px-20"
      style={{
        backgroundImage: `url('./hero.png')`,
        backgroundColor: "#0a2e36", // fallback color if image doesn't load
      }}
    >
      <div className="container mx-auto text-start">
        <div className="space-y-4 rounded-lg pb-32 pt-16">
          <h2 className="text-lg text-secondary">AI SDRs (aiDRs)</h2>
          <h1 className="text-4xl italic leading-tight md:text-5xl">
            <span className="font-bold not-italic"> More</span> leads,
            <br />
            <span className="font-bold not-italic">less</span> people.
          </h1>
          <p className="max-w-lg text-lg font-extralight">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <Button className="group mt-4 rounded-full bg-secondary px-6 py-6 font-semibold text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            Sign Up for the Beta{" "}
            <img
              src="./arrow.svg"
              className="transition-all group-hover:scale-125 group-hover:shadow-md"
            />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
