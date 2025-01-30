"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  role: string;
  duration: string;
  image: string;
  description: string;
  link: string; // New: Link to project page
}

const projects: ProjectCardProps[] = [
  {
    title: "Web3 AI Code Builder",
    role: "Full-Stack Developer",
    duration: "Jan 2024 - Present",
    image: "/images/web3-project.png",
    description:
      "An AI-powered tool that helps beginners learn Web3 coding efficiently.",
    link: "/projects/web3-ai-code-builder",
  },
  {
    title: "E-commerce Platform",
    role: "Frontend Developer",
    duration: "Aug 2023 - Dec 2023",
    image: "/images/ecommerce.png",
    description:
      "Built a scalable and modern e-commerce platform with seamless UI/UX.",
    link: "/projects/ecommerce-platform",
  },
  {
    title: "UI/UX Design Showcase",
    role: "Product Designer",
    duration: "2023",
    image: "/images/uiux-showcase.png",
    description:
      "A curated collection of my best UI/UX design projects and case studies.",
    link: "/projects/uiux-showcase",
  },
];

function ProjectCard({
  title,
  role,
  duration,
  image,
  description,
  link,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-12">
      <Link href={link} passHref>
        <div
          className="grid md:grid-cols-12 gap-8  transition-transform duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Project Info Card */}
          <Card className="md:col-span-4 bg-zinc-900 border-zinc-800 p-6 shadow-lg ">
            <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
            <div className="space-y-2 text-zinc-400">
              <p>Role: {role}</p>
              <p>Duration: {duration}</p>
            </div>
          </Card>

          {/* Project Image & Hover Overlay */}
          <div className="md:col-span-8 relative rounded-lg overflow-hidden group">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay with Description */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/80 text-white text-center p-6 opacity-0 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : ""
              }`}
            >
              <p className="text-lg">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-[#060A0F] text-black dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Projects I've Built
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
//////////////////////
