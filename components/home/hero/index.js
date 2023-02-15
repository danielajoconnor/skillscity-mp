export default function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="w-full flex flex-col items-center py-4 space-y-4 md:flex-row md:space-x-4">
        <div className="w-48">
          <img src={imgUrl} className="rounded-lg" alt="" />
        </div>
        <div className="w-full text-center md:text-left">
          <h1 className="text-6xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>

      {/* <div className=" min-[500px]:w-full flex space-x-2 py-4 flex-col min-[500px]:flex-row ">
        <div className="min-[500px]:w-2/12">
          <img src={imgUrl} className=" w-full rounded-lg h-48" alt="" />
        </div>
        <div className="min-[500px]:w-10/12">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div> */}
    </div>
  );
}
