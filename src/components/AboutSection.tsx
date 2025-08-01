import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white text-black shadow-xl px-10 py-16">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold font-sans text-black">About Me</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
            Blending AI innovation to solve real-world problems.
          </p>
          <div className="h-1 w-24 bg-black mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           <div className="space-y-6 leading-relaxed text-gray-700 font-sans">
  <p>
  Hey! I’m Sravani Tangallapally — a Computer Science and Engineering graduate specializing in Artificial Intelligence and Machine Learning. I enjoy building intelligent, user-focused solutions that solve real-world problems.
</p>
<p>
  My experience spans AI/ML, web development, and data-driven systems — translating technical expertise into meaningful applications. I thrive in collaborative environments and enjoy crafting solutions that blend technology with creativity.
</p>
<p>
  As President of the 'She Inspires' Women’s Chapter at Sphoorthy Engineering College, I’ve led initiatives that foster growth and empowerment. I also volunteer at Kanha Shanti Vanam, reflecting my commitment to community and mindfulness.
</p>
 <p>
   Curious, collaborative, and impact‑driven.
      </p>
</div>


          </motion.div>

          {/* Profile Logo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#111827] p-10 rounded-3xl border border-[#1f2937] text-center shadow-md text-white">
              <img
                src="/logos/st_logo.png"
                alt="Sravani Tangallapally Logo"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-contain border-4 border-white bg-white"
              />
              <h3 className="text-lg font-semibold text-white">
                Transforming ideas into impact, one project at a time.
              </h3>
              <p className="text-sm text-gray-300 mt-3">
                Merging AI, design, and social purpose into innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
