import { notFound } from "next/navigation";

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

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound(); // Show 404 page if project not found

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-500">
        Role: {project.role} | Duration: {project.duration}
      </p>
      <img
        src={project.image}
        alt={project.title}
        className="w-full my-6 rounded-lg"
      />
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
