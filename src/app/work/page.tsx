"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaFigma, FaReact } from "react-icons/fa";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "LedgerX",
    category: "Full stack",
    description:
      "LedgerX is an AI-powered, bank-grade ledger and transaction platform offering double-entry accounting, real-time WebSocket dashboards, and immutable audit trails. It features a hybrid ML fraud-detection pipeline (rule engine + LangChain/Gemini), compliance-ready reversal workflows, and is built with Next.js/TypeScript frontend and Node/Express/Prisma/Postgres backend, deployed on AWS/Render.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "LangChain" },
      { name: "Gemini" },
      { name: "AWS/Render" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    title: "AI Agile Master",
    category: "Full stack",
    description:
      "Enterprise-grade project management platform with vector semantic search, Redis caching and AI-assisted workflows to speed up sprint cycles.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "OpenAI GPT-4" },
      { name: "Pinecone" },
      { name: "LangChain" },
      { name: "Redis" },
      { name: "Redux" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    title: "CityScape",
    category: "Full stack",
    description:
      "Full-stack urban analytics platform leveraging Vertex AI, Gemini Vision, and Google Maps API to deliver real-time city insights through event classification, social media aggregation, and location-based intelligence. Built with Next.js, FastAPI, Firebase, and Docker, supporting 10,000+ concurrent users with sub-200ms response times.",
    stack: [
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "Vertex AI" },
      { name: "Gemini Vision" },
      { name: "Google Maps API" },
      { name: "Firebase" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    title: "BotSwarm",
    category: "Full stack",
    description:
      "BotSwarm — a real-time, multi-AI chat platform with customizable rooms where users can collaborate with domain-specific assistants (DevGPT, FitGPT, DocGPT, etc.). Next.js frontend, Express + Prisma API, and a WebSocket service power the real-time experience; file uploads (Cloudinary) and Markdown/syntax-highlighted messages are supported. AI responses are generated via a GROQ/LLM backend; the stack is designed for deployment on Render with clear env/secret separation and extensibility for document analysis and vector retrieval.",
    stack: [
      { name: "Next.js" },
      { name: "Express" },
      { name: "Prisma" },
      { name: "WebSocket" },
      { name: "Cloudinary" },
      { name: "GROQ/LLM" },
      { name: "Render" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    title: "ScholarAI — Autonomous Research Agent",
    category: "Tooling",
    description:
      "Scalable research pipeline and CLI tools for processing and summarizing large collections of academic papers using LangChain and FAISS.",
    stack: [
      { name: "Python" },
      { name: "LangChain" },
      { name: "HuggingFace" },
      { name: "FAISS" },
      { name: "OpenAI" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn", delay: 2.4 } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc50%_-_22px] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
