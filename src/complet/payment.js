function Payment() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <Style
        text="Imkoniyatingiz bor bolsa albatta naqt pulda tolang "
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvNeLqDPtEgIUWeflMIQDobQBKy9TB6e5Mw&usqp=CAU"
      />
      <Style
        text="Siz uchun biz foyizsiz tolovni yaratdik "
        img="https://sqb.uz/images/5.png"
      />
      <Style
        text="Biz bilan ishlang va uy jihozlariga tolov qiling "
        img="https://ipakyulibank.uz/uploads/images/widget/2021/06/widget_1622545983_2336.png"
      />
    </div>
  );
}

export default Payment;

function Style(props) {
  return (
    <div className="bg-green-400 opacity-60 mt-20  p-10 rounded-[40px] items-center justify-center">
      <img className="rounded-[40px] w-full" src={props.img} />
      <p className="text-gray-800 pt-10 font-normal text-[20px]">
        {props.text}
      </p>
    </div>
  );
}
