import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "AI-POWERED TEACHER DASHBOARD",
    slug: "ai-powered-teacher-dashboard",
    role: "UX Designer",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description:
      "Instructors face increasing challenges in managing student performance...",
  },
  {
    title: "CIPHER",
    slug: "cipher",
    role: "UX Designer",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    description: "A project focusing on secure communication and encryption...",
  },
  {
    title: "BOOKTOPIA",
    slug: "booktopia",
    role: "UX Designer",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    description: "An innovative book marketplace for avid readers...",
  },
];

export default function Projects() {
  return (
    <div className="px-6 md:px-16 pb-32">
      <div className="space-y-32">
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.slug}`}>
            <ProjectCard {...project} />
          </Link>
        ))}
      </div>
    </div>
  );
}
