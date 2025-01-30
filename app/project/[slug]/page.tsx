import Image from "next/image";

interface ProjectDetailsProps {
  params: { slug: string };
}

const projects = {
  "ai-powered-teacher-dashboard": {
    title: "AI-Powered Teacher Dashboard",
    overview: `As an instructor, managing student performance feels overwhelming at times. Manually tracking grades, attendance, and participation across large classes is exhausting, and I worry that I’m missing critical opportunities to identify and support students who are struggling.`,
    audience:
      "Instructors, professors, and academic advisors in higher education.",
    challenge:
      "Instructors lack real-time tools to identify struggling students or recognize top-performing students.",
    keyFindings: [
      "Instructors struggle with manual grade tracking.",
      "They need a predictive system to identify struggling students.",
      "A dashboard should visualize student performance effectively.",
    ],
    solution: [
      "Grade Prediction Analysis",
      "Visualized Performance Metrics",
      "AI-Driven Recommendations",
      "Focused Alerts",
    ],
    images: [
      "/images/classroom.jpg",
      "/images/insights.png",
      "/images/ai-dashboard.png",
      "/images/alerts.png",
    ],
  },
};

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projects[params.slug];

  if (!project) {
    return <div className="text-center text-white p-10">Project Not Found</div>;
  }

  return (
    <section className="bg-[#060A0F] text-white min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          {project.overview}
        </p>
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-6 space-y-16">
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={project.images[0]}
            alt="Classroom"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Audience & Challenge */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">The Audience</h3>
            <p className="text-gray-400 mt-2">{project.audience}</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold">The Challenge</h3>
            <p className="text-gray-400 mt-2">{project.challenge}</p>
          </div>
        </div>

        {/* Key Findings */}
        <div>
          <h3 className="text-3xl font-bold">Key Findings</h3>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            {project.keyFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))}
          </ul>
        </div>

        {/* Images & Solution */}
        <div className="grid md:grid-cols-2 gap-8">
          {project.images.slice(1).map((img, index) => (
            <div key={index} className="relative w-full h-[300px]">
              <Image
                src={img}
                alt="Project insight"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-3xl font-bold">Dreaming Up the Solution</h3>
          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
            {project.solution.map((sol, index) => (
              <li key={index}>{sol}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
