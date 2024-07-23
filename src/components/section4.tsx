

export default function Section4() {
  return (
    <div className="relative h-screen flex flex-row gap-10 p-4 items-center">
    <video
      className="h-auto border-2px w-[50%] object-cover rounded-2xl"
      muted
      loop
      controls
    >
      <source src="/bluestone.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="flex items-center justify-between text-red-700 text-6xl font-custom">
      # Love Like Blue Stone
    </div>
    <video
      className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-80"
      loop
      muted
      autoPlay
    >
      <source src="/bgimage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}
