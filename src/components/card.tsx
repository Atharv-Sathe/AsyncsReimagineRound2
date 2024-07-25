import { cn } from "../cn";

type CardProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export default function Card({ title, description, backgroundImage }: CardProps) {
  return (
    <div className="max-w-xs w-full md:m-[20vw]">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border opacity-80",
          "bg-cover",
          "before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-[-1]",
          "transition-all duration-500",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]"
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative z-10">
          <h1 className="font-extrabold text-4xl text-white relative mix-blend-overlay">
            {title}
          </h1>
          <p className="font-semibold text-xl text-white relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
