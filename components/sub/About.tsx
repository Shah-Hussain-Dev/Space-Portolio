"use client"
import { motion } from "framer-motion";

import { styles } from "../../utils/styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { overview } from "../../assets";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import Title from "./Title";


const About = () => {
  return (
    <div className="flex flex-col z-[30]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Who I am </p>
        <Title title={"Introduction"} />

      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white  text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a MERN Stack Developer with expertise in developing web applications
        using cutting-edge technologies like MongoDB, Express, React, and
        Node.js. From designing intuitive user interfaces to building scalable
        back-end systems, I take pride in delivering custom solutions that
        exceed expectations. I'm a quick leanrer and collaborator closely with
        client to create efficient,scalable and user-friendly solutions that
        solve real-world problems. Let's work together to bring your ideas to
        life!.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
