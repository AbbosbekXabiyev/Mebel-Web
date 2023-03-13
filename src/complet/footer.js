function Footer() {
  return (
    <footer className=" bg-gray-700 text-yellow-100  px-8">
      <div className="flex justify-between items-center h-[150px]">
        <div className="flex space-x-3 items-center">
          <img
            className="w-[52px] h-[52px] rounded-full"
            src="https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e"
          />
          <p className="text-2xl font-medium">SERVICES</p>
        </div>
        <div className="flex space-x-3 ">
          <a className="text-white font-normal text-[20px]" href="#">
            Home
          </a>
          <a className="text-white font-normal text-[20px] mr-48" href="#">
            About
          </a>
        </div>
        <div>
          <p className="text-white text-[20px]">2023 World</p>
        </div>
      </div>
      <hr />
      <p className="text-center text-2xl font-semibold py-5">
        Xizmatlar Litseziyalangan
      </p>
    </footer>
  );
}

export default Footer;
