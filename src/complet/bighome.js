function Bighome() {
  return (
    <div className="grid grid-cols-2  h-[800px] bg-[url('https://www.slavstol.ru/images/pages/905/start.jpg')]">
      <div className=" bg-slate-50 opacity-70 items-center justify-center">
        <h1 className="p-12 mt-[30px] text-bold text-[50px] font-mono">
          Sizning Tanlovingiz
        </h1>
        <p className=" p-12 text-[48px] font-lg  text-[#1616fb]">
          Hayotiy kechinmalar ish va oila davrasi uchun o'z o'rningiz yarating
          har bir joyda sizning ahamiyatingiz sezilarli bolishi shart!
        </p>
      </div>
      <div className="ml-20 mr-20 mt-32 mb-48  items-center justify-center rounded-lg bg-slate-400 opacity-70">
        <img
          className="rounded-lg"
          src="https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/198831d2150c7403373dd8df9d77c901.jpg"
        ></img>
        <p className="text-[32px] text-orange-600 px-20 pt-20">
          To'g'ri tanlov ishonchli baxt demakdir
        </p>
      </div>
    </div>
  );
}

export default Bighome;
