import Shippinginput from "./shippinginput";

function Shipping() {
  return (
    <div className="grid grid-cols-2 gap-10 my-16">
      <Shippinginput />
      <div>
        <img src="https://media.gettyimages.com/id/1354206303/vector/fast-delivery-truck-icon.jpg?s=612x612&w=gi&k=20&c=4a4jrUvPfnhRdlk_3bCApQ94Fz8YYhsQhsm-YkVh7Vo="></img>
        <p className="text-center font-medium text-[32px] text-gray-700">
          Yetkazib berish bizlarda mutlaqo bepul
        </p>
      </div>
    </div>
  );
}

export default Shipping;
