// import HotelCard from "../../components/common/HotelCard/HotelCard.tsx";
import Title from "../../components/common/Title/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "../../components/CustomRightArrow/CustomRightArrow.tsx";
import CustomLeftArrow from "../../components/CustomLeftArrow/CustomLeftArrow.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store.ts";
import HotelCard from "../../components/common/HotelCard/HotelCard.tsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1325 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1324, min: 1125 },
    items: 3,
  },
  littleTablet: {
    breakpoint: { max: 1124, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
  },
};

export default function HotelSection() {
  const darkTheme = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`${darkTheme ? "bg-gray-700" : "bg-slate-200"} py-20 mt-10`}
    >
      <div className=" container max-w-[1420px] mx-auto max-md:px-1 max-sm:px-28">
        <Title
          title="HOTEL"
          desc="Our Most Popular Hotels"
          isCommentTitle={false}
        />
        <div className=" px-20 relative z-40">
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
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
