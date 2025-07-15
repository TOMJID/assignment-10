import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    title: "Chief Strategy Officer @ Company",
  },
  {
    quote:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Jane Smith",
    title: "VP of Innovation @ Agency",
  },
  {
    quote:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "Chris Johnson",
    title: "Product Lead @ Startup",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="text-white py-12 px-2 sm:px-8 rounded-xl max-w-4xl mx-auto w-full">
      <div className="relative flex flex-col items-center justify-center w-full">
        <div className="flex justify-center mb-6">
          <motion.div
            className="bg-teal-900/60 rounded-full p-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={index + "-icon"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-teal-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h.01M15 7h.01M7 11c0 2.21 1.79 4 4 4s4-1.79 4-4"
              />
            </svg>
          </motion.div>
        </div>
        <div className="w-full flex items-center justify-center relative">
          <button
            onClick={handlePrev}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-teal-300 rounded p-2 transition z-10"
            aria-label="Previous">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>
                <p className="text-center text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto mb-6">
                  {testimonials[index].quote}
                </p>
                <div className="text-center mb-2">
                  <span className="text-teal-400 font-bold block text-base md:text-lg">
                    {testimonials[index].name}
                  </span>
                  <span className="text-xs md:text-sm text-white/60 block">
                    {testimonials[index].title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={handleNext}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-teal-300 rounded p-2 transition z-10"
            aria-label="Next">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <motion.span
              key={i}
              className={
                i === index
                  ? "h-2 w-2 rounded-full bg-teal-400"
                  : "h-2 w-2 rounded-full bg-white/30"
              }
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: i === index ? 1.2 : 1, opacity: 1 }}
              transition={{ duration: 0.3 }}></motion.span>
          ))}
        </div>
        <div className="flex sm:hidden justify-center gap-8 mt-8 w-full">
          <button
            onClick={handlePrev}
            className="bg-white/10 hover:bg-white/20 text-teal-300 rounded p-2 transition"
            aria-label="Previous">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/10 hover:bg-white/20 text-teal-300 rounded p-2 transition"
            aria-label="Next">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
