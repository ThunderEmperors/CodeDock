import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About Me
      </h1>

      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Who Am I?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Hi, I'm <span className="font-semibold">Thunder</span>, a passionate
          developer who loves building impactful projects. I specialize in
          modern web technologies like React, Node.js, and Tailwind CSS.
        </p>
      </div>

      <div className="bg-gray-50 shadow rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Why I Created This Project
        </h2>
        <p className="text-gray-600 leading-relaxed">
          I built this project to solve
          a real-world problem and to improve my skills in full-stack
          development. This project reflects my journey of learning and
          creating.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Get In Touch
        </h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-center space-x-3">
            <FaEnvelope className="w-5 h-5 text-blue-500" />
            <span>[puranjayjoshi2004.com]</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaLinkedin className="w-5 h-5 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/puranjay-joshi-361972289/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <FaGithub className="w-5 h-5 text-blue-500" />
            <a
              href="https://github.com/ThunderEmperors"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default About
