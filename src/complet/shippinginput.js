function Shippinginput() {
  return (
    <div className="max-w-[800px] mx-auto shadow-lg rounded  pt-8 bg-gray-200">
      <h1 className="font-lg text-[24px] text-center text-orange-300 px-20">
        Malumotlaringizni kiriting
      </h1>
      <form className="flex flex-col space-y-4 p-10">
        <input
          className="border p-2 rounded-[10px]"
          type="text"
          placeholder="Name"
        />
        <input
          className="border p-2 rounded-[10px]"
          type="text"
          placeholder="Surname"
        />
        <input
          className="border p-2  rounded-[10px]"
          type="text"
          placeholder="Yashash manzilingiz"
        />
        <input
          className="border p-2 rounded-[10px]"
          type="text"
          placeholder="Emailingiz"
        />
        <input
          className="border p-2 rounded-[10px]"
          type="text"
          placeholder="tell "
        />
        <input
          className="border bg-green-500 p-2 mt-10 text-white rounded-[40px]"
          type="submit"
          value="Jonatish"
        />
      </form>
    </div>
  );
}

export default Shippinginput;
