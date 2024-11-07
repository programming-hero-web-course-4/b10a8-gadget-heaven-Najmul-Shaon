import img from "../../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="w-6/12 mx-auto absolute top-[380px] left-[25%]">
      <figure className="p-3 bg-white/30 rounded-xl border">
        <img className="w-full rounded-xl h-96" src={img} alt="banner image" />
      </figure>
    </div>
  );
};

export default BannerImg;
