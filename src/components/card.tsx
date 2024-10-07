// import { cn } from "../cn";

// type CardProps = {
//   title: string;
//   description: string;
//   backgroundImage: string;
// };

// export default function Card({ title, description, backgroundImage }: CardProps) {
//   return (
//     <div className="max-w-xs w-full md:m-[20vw]">
//       <div
//         className={cn(
//           "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border opacity-40 ",
//           "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
//           "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
//           "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
//           "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
//           "transition-all duration-500"
//         )}
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="text relative z-50">
//           <h1 className="md:font-bold font-extrabold md:font-custom text-4xl md:text-5xl text-pink-700 relative mix-blend-overlay">
//             {title}
//           </h1>
//           <p className="font-semibold text-xl text-green-800 relative my-4">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { cn } from "../cn";


type CardProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

export default function Card({ title, description, backgroundImage }: CardProps) {
  return (
    // <div className="max-w-xs w-full">
    //   <div
    //     className={cn(
    //       "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-2 border border-transparent ",
    //       "bg-cover"
    //     )}
    //     style={{ backgroundImage: `url(${backgroundImage})` }}
    //   >
    //     <div className="text relative z-50">
    //       <h1 className="font-bold text-xl md:text-3xl text-black relative mix-blend-overlay">
    //         {title}
    //       </h1>
    //       <p className="font-normal text-base text- relative my-4">
    //         {description}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="text relative z-50 p-3 bg-royal-gold rounded-md">
      <img src={backgroundImage} alt="image" />
      <h1 className="font-bold text-xl md:text-3xl text-black relative">
        {title}
      </h1>
      <p className="font-normal text-base text- relative">
        {description}
      </p>
    </div>
  );
}
