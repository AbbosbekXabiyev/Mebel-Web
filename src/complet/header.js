function Header() {
  return (
    <div className="flex bg-gray-400 justify-between px-10 py-4">
      <div className="flex  items-center">
        <img className="w-[60px] rounded-full" src="/primum.png" />
        <p className="text-gray-800 font-bold text-[30px]">Primum</p>
      </div>
      <div className="flex items-center gap-4 ">
        <a className="text-gray-600 font-normal text-[20px]" href="#">
          Home
        </a>
        <a className="text-gray-600 font-normal text-[20px] mr-48" href="#">
          About
        </a>
        <button className="w-24 h-8 text-blue-200 bg-red-300 rounded-full">
          OK
        </button>
      </div>
    </div>
  );
}

export default Header;
