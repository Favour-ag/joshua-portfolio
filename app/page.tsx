import HeroSection from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "AI-POWERED TEACHER DASHBOARD FOR HIGHER EDUCATION",
      role: "UX Designer",
      duration: "4 Months",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      description:
        "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    },
    {
      title: "CIPHER",
      role: "UX Designer",
      duration: "4 Months",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
      description:
        "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    },
    {
      title: "BOOKTOPIA",
      role: "UX Designer",
      duration: "4 Months",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=60",
      description:
        "Instructors face increasing challenges in managing student performance across large classes. Tracking grades, attendance, and participation manually can be overwhelming and often results in missed opportunities for early intervention.",
    },
  ];
  return (
    <div>
      <HeroSection />
      {/* Projects Section */}
      <section className="px-6 md:px-16 pb-32">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
