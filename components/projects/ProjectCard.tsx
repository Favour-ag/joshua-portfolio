"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectInfo from "@/components/projects/ProjectInfo";

interface ProjectCardProps {
  title: string;
  role: string;
  duration: string;
  image: string;
  description: string;
  link: string;
}

export default function ProjectCard({
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
          className="grid md:grid-cols-12 gap-8 transition-transform duration-300 hover:scale-105 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProjectInfo title={title} role={role} duration={duration} />
          <ProjectImage
            image={image}
            title={title}
            description={description}
            isHovered={isHovered}
          />
        </div>
      </Link>
    </div>
  );
}
