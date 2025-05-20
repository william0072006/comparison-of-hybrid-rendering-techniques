export const Navbar = () => (
  <div className="w-[90%] h-12 bg-[rgb(29,6,9,0.8)] rounded-4xl backdrop-blur-sm sticky top-6 z-10 shadow-xs shadow-[#1D0609]">
    <div className="flex justify-between items-center w-full h-full px-8 text-[#439361]">
      <a href="" className="text-2xl font-bold">
        F1 Pulse
      </a>
      <div className="flex space-x-8 text-xl font-medium">
        <a href="#featured-cars">Featured Cars</a>
        <a href="#">3D Garage</a>
        <a href="#">Race Schedule</a>
      </div>
    </div>
  </div>
);
