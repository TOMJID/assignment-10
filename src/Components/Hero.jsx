import { Button } from "@heroui/button";
import { motion } from "framer-motion";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white px-6 py-16 md:px-20 h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('./hero.png')`,
        backgroundColor: "#0a2e36", // fallback color if image doesn't load
      }}>
      <div className="container mx-auto text-start ">
        <div className=" pt-16 rounded-lg pb-32 space-y-4">
          <h2 className="text-secondary  text-lg ">AI SDRs (aiDRs)</h2>
          <h1 className="text-4xl md:text-5xl italic leading-tight">
            <span className="font-bold not-italic"> More</span> leads,
            <br />
            <span className="font-bold not-italic">less</span> people.
          </h1>
          <p className="text-lg font-extralight max-w-lg">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <Button className="bg-secondary group mt-4 text-black font-semibold px-6 py-6 rounded-full  transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
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
