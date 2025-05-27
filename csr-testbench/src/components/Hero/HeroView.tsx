export const HeroView = () => (
  <div className="flex flex-col justify-center items-center w-full mt-25 text-[#1D0609]">
    <h1 className="text-9xl font-['Shrikhand']">Feel the speed</h1>

    <p className="mt-4 text-2xl font-medium">
      Dive into the world of Formula 1
    </p>
    <p className="text-2xl font-medium">
      Where cutting-edge engineering meets raw adrenaline
    </p>

    <button className="mt-12 px-12 py-2 bg-[#1D0609] text-[#439361] text-xl font-medium rounded-4xl cursor-pointer">
      Explore
    </button>

    <div className="relative w-full max-w-[70%] mt-10">
      <img
        src="/images/hero-image.webp"
        alt="An image of Formula 1 cars on a racetrack."
        className="rounded-xl"
      />
    </div>
  </div>
);
