import React from "react";
import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07070a] via-[#0e0e14] to-[#07070a] text-gray-200 font-sans scroll-smooth">

      {/* Purple grain texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#8338ec_1px,transparent_0)] bg-[size:26px_26px]" />

      {/* Header */}
      <header className="fixed w-full top-0 bg-black/70 backdrop-blur-xl border-b border-purple-500/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold tracking-wide text-purple-400"
          >
            Video Editor Portfolio
          </motion.h1>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#contact"
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg transition hover:scale-105"
          >
            Contact
          </motion.a>

        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >

            <h2 className="text-5xl font-bold mb-6 leading-tight">
              <span className="text-purple-400">Deepanshu</span> – Video Editor & Story teller
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mb-6">
              Turning raw footage into engaging stories for brands, podcasts and creators.
            </p>

            <p className="text-gray-400 text-lg max-w-xl mb-10">
              Minimal, clean and cinematic edits crafted for brands, agencies
              and companies.
            </p>

            <div className="flex gap-4">

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                href="#portfolio"
                className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg"
              >
                View Work
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-8 py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white transition"
              >
                Hire Me
              </motion.a>

            </div>

          </motion.div>


          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-2xl border border-purple-500/30 shadow-2xl"
            />

          </motion.div>

        </div>
      </section>

      

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl font-semibold text-center mb-16 text-purple-400">
            Portfolio
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Podcast's Teasers",
              "Reels Edit",
              "Ads & Sponsor Edit",
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-[#111117] rounded-xl shadow-lg hover:shadow-purple-600/40 hover:shadow-2xl transition overflow-hidden border border-purple-500/20"
              >

                <div className="h-56 flex items-center justify-center text-gray-500 overflow-hidden bg-gradient-to-br from-purple-900/20 to-black">

                  {item === "Reels Edit" ? (
                    <div className="flex gap-3 w-full h-full p-2 overflow-x-auto">
                      <iframe
                        className="h-full min-w-[160px] aspect-[9/16] rounded-md border border-purple-500/20"
                        src="https://www.youtube.com/embed/TbEmdbAejwk"
                        title="Reel Editing Work 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />

                      <iframe
                        className="h-full min-w-[160px] aspect-[9/16] rounded-md border border-purple-500/20"
                        src="https://www.youtube.com/embed/8XNsPd2QYGk"
                        title="Reel Editing Work 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : item === "Podcast's Teasers" ? (
                    <div className="grid grid-cols-3 gap-2 w-full h-full p-2">
                      <iframe
                        className="w-full h-full rounded-md"
                        src="https://www.youtube.com/embed/n6NrOFI9-f0"
                        title="Podcast Teaser 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />

                      <iframe
                        className="w-full h-full rounded-md"
                        src="https://www.youtube.com/embed/snSCb6uwpro"
                        title="Podcast Teaser 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />

                      <iframe
                        className="w-full h-full rounded-md"
                        src="https://www.youtube.com/embed/xb8yljohdYo"
                        title="Podcast Teaser 3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : item === "Ads & Sponsor Edit" ? (
                    <iframe
                      className="w-full h-full rounded-md"
                      src="https://www.youtube.com/embed/_Gado5H4anI"
                      title="Ad Edit"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <span>Project Preview</span>
                  )}

                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-purple-300">
                    {item}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Clean cuts, modern transitions and engaging visual storytelling.
                  </p>
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* About */}
      <section className="py-24 px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >

          <h3 className="text-3xl font-semibold mb-8 text-purple-400">
            About Me
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I’m a video editor specializing in podcast teasers, short‑form reels, and ad/sponsor edits. I help creators, brands, and podcasts turn raw footage into engaging, videos that grab attention and keep viewers watching. My focus is clean storytelling, strong pacing, and edits optimized for social media and modern digital platforms.
          </p>

        </motion.div>

      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">

        <div className="max-w-3xl mx-auto">

          <h3 className="text-3xl font-semibold text-center mb-12 text-purple-400">
            Contact
          </h3>

          <div className="text-center mb-8 space-y-2">
            <p className="text-gray-400">
              Email: <a href="mailto:editwithdeepanshu@gmail.com" className="text-purple-400 hover:underline">editwithdeepanshu@gmail.com</a>
            </p>
            <p className="text-gray-400">
              WhatsApp: <a href="https://wa.me/917508101813" className="text-purple-400 hover:underline">+91 7508101813</a>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#111117] shadow-xl rounded-xl p-10 space-y-6 border border-purple-500/20"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none text-white"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-black border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none text-white"
            ></textarea>

            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg hover:scale-105 transition">
              Send Message
            </button>

          </motion.div>

        </div>

      </section>

      {/* WhatsApp */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/917508101813"
        className="fixed bottom-6 right-6 font-semibold px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-lg"
      >
        WhatsApp
      </motion.a>

      {/* Footer */}
      <footer className="bg-black text-gray-500 text-center py-6 border-t border-purple-500/20">
        © {new Date().getFullYear()} Video Editor Portfolio
      </footer>

    </div>
  );
}
