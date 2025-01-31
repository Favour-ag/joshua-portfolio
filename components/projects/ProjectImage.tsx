import Image from "next/image";

interface ProjectImageProps {
  image: string;
  title: string;
  description: string;
  isHovered: boolean;
}

export default function ProjectImage({
  image,
  title,
  description,
  isHovered,
}: ProjectImageProps) {
  return (
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
  );
}
