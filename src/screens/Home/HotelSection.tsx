import HotelCard from "../../components/common/HotelCard/HotelCard";
import Title from "../../components/common/Title/Title";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomRightArrow from "../../components/CustomRightArrow/CustomRightArrow.tsx";
import CustomLeftArrow from "../../components/CustomLeftArrow/CustomLeftArrow.tsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export default function HotelSection() {
  return (
    <div className="bg-slate-200 py-20 mt-10">
      <div className=" container max-w-[1420px] mx-auto">
        <Title
          title="HOTEL"
          desc="Our Most Popular Hotels"
          isCommentTitle={false}
        />
        <div className=" p-8 relative z-40">
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
