import React from "react";
import profile from "../assets/profile.jpg"; // your image path

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] text-gray-300 flex flex-col items-center justify-center px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#60a5fa]">
        About Me
      </h2>

      {/* Profile Image */}
      <img
        src={profile}
        alt="Zach"
        className="w-40 h-40 rounded-full object-cover mb-6 border-2 border-[#3b82f6]"
      />

      {/* About Paragraph */}
      <p className="max-w-3xl text-center text-gray-400 mb-10 leading-relaxed">
        I’m a Computer Science student from Cavite State University – Bacoor Campus and an ISSA-certified Personal Trainer.
        I combine technology, fitness, and creativity to help people build stronger bodies and better systems.
      </p>

      {/* Skills Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Frontend & Backend */}
        <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-[#3b82f6] transition">
          <h3 className="text-xl font-semibold mb-3 text-[#60a5fa]">Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#1a1a1a] border border-[#3b82f6] px-3 py-1 rounded-md text-sm">React</span>
            <span className="bg-[#1a1a1a] border border-[#3b82f6] px-3 py-1 rounded-md text-sm">JavaScript</span>
            <span className="bg-[#1a1a1a] border border-[#3b82f6] px-3 py-1 rounded-md text-sm">TailwindCSS</span>
            <span className="bg-[#1a1a1a] border border-[#3b82f6] px-3 py-1 rounded-md text-sm">HTML/CSS</span>
            <span className="bg-[#1a1a1a] border border-[#3b82f6] px-3 py-1 rounded-md text-sm">Python</span>
          </div>
        </div>

        {/* Education */}
        <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-[#3b82f6] transition">
          <h3 className="text-xl font-semibold mb-3 text-[#60a5fa]">Education</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>B.S. in Computer Science</strong> <br />
              Cavite State University, Bacoor Cavite <br />
              <span className="text-gray-500">2022 – Present</span>
            </li>
            <li>
              <strong>STEM Senior High School Diploma</strong> <br />
              APEC Schools, Bacoor Cavite <br />
              <span className="text-gray-500">2020 – 2022</span>
            </li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="bg-[#111] p-6 rounded-lg border border-gray-800 hover:border-[#3b82f6] transition sm:col-span-2">
          <h3 className="text-xl font-semibold mb-3 text-[#60a5fa]">Work Experience</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Front Desk Associate</strong> <br />
              Gold’s Gym Goliad, San Antonio TX <br />
              <span className="text-gray-500">2024 – 2025</span>
            </li>
            <li>
              <strong>E-Commerce Operations Assistant</strong> <br />
              Shopee (Eundy), Dasmariñas <br />
              <span className="text-gray-500">2022 – 2024</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
