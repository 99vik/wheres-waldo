function ChoosePictureCard({ img, title }) {
  return (
    <div className="flex flex-col gap-2 items-center hover:bg-gray-300 cursor-pointer bg-gray-200 p-4 pb-2 rounded-[10px]">
      <img src={img} alt="image" className="w-[320px] h-[200px]" />
      <h1 className="text-xs text-neutral-700 font-semibold">{title}</h1>
    </div>
  );
}

export default ChoosePictureCard;
