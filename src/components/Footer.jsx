import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    { name: "Contact", path: "/contact" },
    { name: "Terms", path: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white font-bold text-xl rounded-lg">
              P
            </div>

            <div>
              <p className="text-xl font-semibold text-white">Palace</p>
              <p className="text-sm text-gray-400">
                Elevate your experience
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 md:gap-8"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="hover:text-indigo-400 transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            © {new Date().getFullYear()} Palace. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-4 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Support
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;