import ProjectCard from "@/components/projectsComponents/ProjectCard";

const projects = [
  {
    title: "Web3 AI Code Builder",
    role: "Full-Stack Developer",
    duration: "Jan 2024 - Present",
    image: "/images/web3-project.png",
    description:
      "An AI-powered tool that helps beginners learn Web3 coding efficiently.",
    link: "/projects/ai-powered-teacher-dashboard",
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
