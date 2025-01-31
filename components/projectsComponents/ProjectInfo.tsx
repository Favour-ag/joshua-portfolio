import { Card } from "@/components/ui/card";

interface ProjectInfoProps {
  title: string;
  role: string;
  duration: string;
}

export default function ProjectInfo({
  title,
  role,
  duration,
}: ProjectInfoProps) {
  return (
    <Card className="md:col-span-4 bg-zinc-900 border-zinc-800 p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
      <div className="space-y-2 text-zinc-400">
        <p>Role: {role}</p>
        <p>Duration: {duration}</p>
      </div>
    </Card>
  );
}
