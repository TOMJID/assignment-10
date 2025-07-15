import { motion } from "framer-motion";
function Allocate() {
  const bg = {
    backgroundColor: "#002228",
    backgroundImage: "url('./card__bg1.png')",
    backgroundSize: "cover ",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    height: "auto",
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
        style={bg}
        className="mt-10 flex flex-col items-center justify-center space-y-4"
      >
        <div className="grid grid-cols-1 p-8 text-white sm:grid-cols-2 md:p-12">
          <div>
            <div className="pb-2 text-xl">
              <h4 className="text-balance">
                Allocate effort where your reps make an impact.
              </h4>
              <h4 className="italic text-secondary">Let us handle the rest.</h4>
            </div>
            <p className="mb-4 text-neutral-500">
              Keep your reps “in the air” -- out in the field and on the phone
              where they can build relationships.
            </p>
            <div className="flex flex-col flex-wrap items-start justify-between gap-y-8">
              <div>
                <span className="text-2xl font-bold text-secondary">32%</span>
                <h6>Improvement in open Rates</h6>
              </div>
              <div>
                <span className="text-2xl font-bold text-secondary">75 %</span>
                <h6>Improvement in Ramp Time </h6>
              </div>
              <div>
                <span className="text-2xl font-bold text-secondary">32%</span>
                <h6>Improvement in Meeting Booked</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Allocate;
