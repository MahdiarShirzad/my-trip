import Title from "../../components/common/Title/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "../../components/CustomRightArrow/CustomRightArrow.tsx";
import CustomLeftArrow from "../../components/CustomLeftArrow/CustomLeftArrow.tsx";
import CustomerCommentsCard from "../../components/CustomerCommentsCard/CustomerCommentsCard.tsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1325 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1324, min: 1125 },
    items: 2,
  },
  littleTablet: {
    breakpoint: { max: 1124, min: 700 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
  },
};

export default function CustomerComments() {
  return (
    <div className=" container max-w-[1320px] mx-auto flex max-xl:flex-col py-20 max-xl:gap-20">
      <div className=" w-2/5 max-xl:w-3/5 mx-auto">
        <Title
          title="TESTIMONIALS"
          desc="What Our Customers Are Saying Us?"
          isCommentTitle={true}
        />
        <p className=" font-inter text-gray-500 mt-4">
          There are many variations of passages contrary to popular belief
          available the but the majority have suffered alteration in some form
          by injected humour or randomised words which don't look even slightly
          going use a passage believable.
        </p>
        <button className=" bg-[#7167FF] flex text-center gap-1 font-interSemiBold text-white px-3 py-4 rounded-xl mt-4">
          <p>Explore More</p>
          <svg
            className="mt-1 w-[20px]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15.7071 5.29289C15.3166 4.90237 14.6834 4.90237 14.2929 5.29289C13.9024 5.68342 13.9024 6.31658 14.2929 6.70711L18.5858 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.5858 13L14.2929 17.2929C13.9024 17.6834 13.9024 18.3166 14.2929 18.7071C14.6834 19.0976 15.3166 19.0976 15.7071 18.7071L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L15.7071 5.29289Z"
                fill="#fff"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <div className="w-3/5 max-lg:w-3/5 mx-auto max-md:w-4/5">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style "
          // focusOnSelect={true}
          arrows={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          <CustomerCommentsCard />
          <CustomerCommentsCard />
          <CustomerCommentsCard />
          <CustomerCommentsCard />
          <CustomerCommentsCard />
        </Carousel>
      </div>
    </div>
  );
}
