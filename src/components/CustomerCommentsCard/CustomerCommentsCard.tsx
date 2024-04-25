import profile from "../../assets/img/testimonial/04.jpg";
import quote from "../../assets/img/icon/quote.svg";
import RenderStars from "../common/RenderStars/RenderStars";

export default function CustomerCommentsCard() {
  return (
    <div className=" bg-white  relative mt-10 w-[360px] h-[310px] rounded-3xl mx-4">
      <div className=" absolute w-28 opacity-20 right-5 top-10">
        <img src={quote} alt="" className=" w-full" />
      </div>
      <img
        className=" rounded-full h-20 w-20 border-4 border-white shadow-lg mx-auto -mt-10 z-30"
        src={profile}
        alt=""
      />
      <p className=" text-[#4f4b8b] font-interSemiBold text-center mt-3 text-2xl">
        Parker Jimenez
      </p>
      <p className=" text-[#7167FF] text-center font-inter font-medium">
        Clients
      </p>
      <p className=" font-inter px-8  text-sm mt-4 text-gray-600">
        There are many variations passages of available but to the majority have
        suffered alteration in some form injected humour words which look even
        slig believable.
      </p>
      <div className=" flex items-center justify-center mt-6">
        <RenderStars rating={3.2} />
      </div>
    </div>
  );
}
