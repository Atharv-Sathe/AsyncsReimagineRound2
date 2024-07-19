export default function Section1() {
    return (
      <div className="flex p-2 ">
        <video className="h-screen border-2px   w-full object-cover rounded-2xl" controls loop>
          <source src="/bluestone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  