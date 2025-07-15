import { useState } from "react";
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
    <section className="mx-auto w-full max-w-4xl rounded-xl px-2 py-12 text-white sm:px-8">
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="mb-6 flex justify-center">
          <motion.div
            className="rounded-full bg-teal-900/60 p-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={index + "-icon"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-teal-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h.01M15 7h.01M7 11c0 2.21 1.79 4 4 4s4-1.79 4-4"
              />
            </svg>
          </motion.div>
        </div>
        <div className="relative flex w-full items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded bg-white/10 p-2 text-teal-300 transition hover:bg-white/20 sm:flex"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="min-w-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mx-auto mb-6 max-w-2xl text-center text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                  {testimonials[index].quote}
                </p>
                <div className="mb-2 text-center">
                  <span className="block text-base font-bold text-teal-400 md:text-lg">
                    {testimonials[index].name}
                  </span>
                  <span className="block text-xs text-white/60 md:text-sm">
                    {testimonials[index].title}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded bg-white/10 p-2 text-teal-300 transition hover:bg-white/20 sm:flex"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
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
              transition={{ duration: 0.3 }}
            ></motion.span>
          ))}
        </div>
        <div className="mt-8 flex w-full justify-center gap-8 sm:hidden">
          <button
            onClick={handlePrev}
            className="rounded bg-white/10 p-2 text-teal-300 transition hover:bg-white/20"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="rounded bg-white/10 p-2 text-teal-300 transition hover:bg-white/20"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
