import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import profilePic from "./assets/profile.jpg";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

    const [showMessage, setShowMessage] = useState(null);

  if (loading) return <LoadingScreen />;

  return (
    <div className="bg-[#0a0a0a] text-gray-300 font-sans min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center h-[64px] px-6">
          <h1 className="text-[15px] font-semibold tracking-tight">
            <span className="text-blue-400">ZACH</span>
            <span className="text-gray-300">.POGI</span>
          </h1>
          <div className="flex items-center">
            <a href="#home" className="text-gray-400 hover:text-blue-400 ml-0 transition">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 ml-10 transition">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 ml-10 transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 ml-10 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <h2 className="text-6xl md:text-7xl font-bold mb-8 text-gray-100 leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Zach
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl leading-relaxed mb-14 text-[17px] md:text-[18px]">
          Computer Science student and ISSA-certified Personal Trainer passionate about clean design,
          technology, and fitness performance. I love building stronger bodies and better systems.
        </p>

        <div className="flex gap-6">
          <a
            href="#projects"
            className="inline-block bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen bg-[#0a0a0a] py-24 px-6 flex flex-col items-center"
      >
        {/* 🔹 Section Title */}
        <h3 className="text-4xl font-bold text-blue-400 mb-6 text-center">
          About Me
        </h3>

        {/* 🔹 Profile Image */}
        <motion.img
          src={profilePic}
          alt="Zach Profile"
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-400 shadow-lg mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* 🔹 Description */}
        <motion.p
          className="text-gray-300 text-center text-[16px] max-w-3xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Passionate Computer Science student and ISSA-certified Personal Trainer
          with a drive for innovation, discipline, and helping others build
          stronger bodies and smarter systems through fitness and technology.
        </motion.p>

        {/* 🔹 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {/* 🏋️‍♂️ Fitness & Coaching */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-400 font-semibold mb-4 text-lg">
              Fitness & Coaching
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Helping others achieve their physical potential through structured
              programming, nutrition guidance, and consistent training habits.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Strength Training",
                "Workout Programming",
                "Discipline",
                "Consistency",
                "Personal Coaching",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 💻 Technical Skills */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-400 font-semibold mb-4 text-lg">
              Technical Skills
            </h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Developing clean, responsive, and efficient web systems while
              combining technical precision with modern design.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"].map(
                (skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* 🎓 Education */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-400 font-semibold mb-4 text-lg">Education</h4>
            <ul className="text-gray-300 text-sm space-y-3">
              <li>
                <span className="font-medium text-gray-100">
                  BS in Computer Science
                </span>{" "}
                — Cavite State University, Bacoor Cavite (2022–Present)
              </li>
              <li>
                <span className="font-medium text-gray-100">
                  Senior High Diploma (STEM)
                </span>{" "}
                — APEC Schools, Bacoor Cavite (2020–2022)
              </li>
            </ul>
          </motion.div>

          {/* 💼 Work Experience */}
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-400 font-semibold mb-4 text-lg">
              Work Experience
            </h4>
            <ul className="text-gray-300 text-sm space-y-3">
              <li>
                <span className="font-medium text-gray-100">
                  Front Desk Associate
                </span>{" "}
                — Gold’s Gym Goliad, San Antonio, TX (2024–2025)
              </li>
              <li>
                <span className="font-medium text-gray-100">
                  E-Commerce Assistant
                </span>{" "}
                — Shopee Eundy, Dasmariñas (2022–2024)
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen bg-[#0a0a0a] py-24 px-6 flex flex-col items-center text-center"
      >
        <h3 className="text-3xl font-bold text-blue-400 mb-12 tracking-wide uppercase">
          Featured Projects
        </h3>

        {/* Grid layout for side-by-side design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {[
            {
              title: "Personal Trainer Website",
              desc: "A modern personal trainer portfolio showcasing my ISSA certification, fitness programs, and transformation systems built with React, Tailwind CSS, and Framer Motion.",
              skills: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
            },
            {
              title: "Workout Tracker App",
              desc: "A web app prototype that helps track lean bulk progress, organize workouts, and maintain a simple, efficient design using React and Local Storage.",
              skills: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="bg-[#111] border border-blue-400/20 p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-blue-400 mb-3">{p.title}</h4>
              <p className="text-gray-300 text-[15px] mb-6 leading-relaxed">{p.desc}</p>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {p.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#0f0f0f] border border-blue-400/30 text-blue-300 px-3 py-1 text-xs rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setShowMessage(prev => (prev === i ? null : i))}
                className="text-blue-400 border border-blue-400/50 px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-500/10 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                View Project →
              </button>

              {showMessage === i && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-blue-300 text-sm mt-3"
                >
                  🚧 Coming soon late 2025 🚧
                </motion.p>
              )}

            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" class="py-20">
        <h3>Get In Touch</h3>

        <div class="contact-box">
          <p>
            Want to collaborate or train with me? Reach out anytime through the details below.
          </p>

          <div class="contact-details space-y-3">
            <p>
              <i class="fas fa-envelope text-blue-400 mr-2"></i>
              <strong>Email:</strong>
              <a href="mailto:zacharymendoza200414@gmail.com">
                zacharymendoza200414@gmail.com
              </a>
            </p>

            <p>
              <i class="fas fa-phone text-blue-400 mr-2"></i>
              <strong>Phone:</strong>
              <a href="tel:+639938739283">+63 993 873 9283</a>
            </p>

            <p>
              <i class="fab fa-facebook text-blue-400 mr-2"></i>
              <strong>Facebook:</strong>
              <a
                href="https://www.facebook.com/share/14QUdcCH9YZ/?mibextid=wwXIfr"
                target="_blank"
              >
                Zach Mendoza
              </a>
            </p>

            <p>
              <i class="fab fa-instagram text-blue-400 mr-2"></i>
              <strong>Instagram:</strong>
              <a href="https://www.instagram.com/zc.hh_/" target="_blank">@zc.hh_</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Zach Mendoza | Built with React, TailwindCSS, and Framer Motion</p>
      </footer>
    </div>
  );
}
