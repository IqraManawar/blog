

import Image from "next/image";
import CommentSection from "./commentSection";


interface PlantCardProps {
  name: string;
  description: string;
  image: string;
}

export default function PlantCard({ name, description, image }: PlantCardProps) {
  return (
    <div className="border rounded p-4 shadow">
      <Image src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <CommentSection/>
    </div>
  );
}
