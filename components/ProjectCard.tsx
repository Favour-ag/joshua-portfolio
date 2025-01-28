import Image from "next/image";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  role: string;
  duration: string;
  image: string;
  description: string;
}

export function ProjectCard({
  title,
  role,
  duration,
  image,
  description,
}: ProjectCardProps) {
  return (
    <div className="grid md:grid-cols-12 gap-8">
      <Card className="md:col-span-4 bg-zinc-900 border-zinc-800 p-6">
        <h3 className="text-xl font-bold mb-6">{title}</h3>
        <div className="space-y-2 text-zinc-400">
          <p>Role: {role}</p>
          <p>Duration: {duration}</p>
        </div>
      </Card>

      <div className="md:col-span-8 space-y-6">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <Card className="bg-blue-500/10 border-blue-500/20 p-6">
          <p className="text-blue-400">{description}</p>
        </Card>
      </div>
    </div>
  );
}
