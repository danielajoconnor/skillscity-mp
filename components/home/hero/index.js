export default function Hero({ imgUrl, title, subtitle }) {
  return (
    <div className="w-full max-w-7xl mx-auto py-4">
      <div className="w-full flex space-x-2 flex-row">
        <div className="w-2/12">
          <img src={imgUrl} className="rounded-lg h-48" alt="" />
        </div>
        <div className="w-10/12">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl text-gray-700">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
