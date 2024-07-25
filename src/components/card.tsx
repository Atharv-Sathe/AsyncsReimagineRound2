import { cn } from "../cn";

type CardProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export default function Card({ title, description, backgroundImage }: CardProps) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-2 border border-transparent ",
          "bg-cover"
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-500 relative mix-blend-overlay">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-500 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
