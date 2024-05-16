import React, { useEffect, useState } from "react";
import RenderStars from "../../components/common/RenderStars/RenderStars";

type Props = {};

const starRanges = [
  { min: 4.5, max: 5 },
  { min: 4, max: 5 },
  { min: 3.5, max: 5 },
  { min: 3, max: 5 },
];

export default function HotelStars({}: Props) {
  const [selectedStarRange, setSelectedStarRange] = useState([]);

  const handleStarRangeToggle = ({
    min,
    max,
  }: {
    min: number;
    max: number;
  }) => {
    const isRangeSelected = selectedStarRange.some(
      (range: number) => range.min === min && range.max === max
    );

    if (isRangeSelected) {
      setSelectedStarRange(
        selectedStarRange.filter(
          (range) => range.min !== min || range.max !== max
        )
      );
    } else {
      setSelectedStarRange([...selectedStarRange, { min, max }]);
    }
  };

  //   const applyStarFilter = () => {
  //     let filteredItems = [...items];

  //     if (selectedStarRange.length > 0) {
  //       filteredItems = filteredItems.filter((course) =>
  //         selectedStarRange.some(
  //           (range) => course.star >= range.min && course.star <= range.max
  //         )
  //       );
  //     }

  //     setPosts(filteredItems);
  //   };

  //   useEffect(() => {
  //     applyStarFilter();
  //   }, [selectedStarRange]);

  return (
    <div className="  mb-4 mt-6">
      <p className="text-lg font-interSemiBold pb-1 border-b">Hotel Stars</p>
      <div className="tab-content text-sm">
        {starRanges.map(({ min, max }) => (
          <div
            key={`${min}-${max}`}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2 my-1">
              <input
                className="checked:accent-violet-500 w-3 h-3"
                type="checkbox"
                name="sortBy"
                id={`${min}-${max}`}
                onChange={() => handleStarRangeToggle(min, max)}
              />

              <label
                className=" flex items-center gap-2 cursor-pointer"
                htmlFor={`${min}-${max}`}
              >
                <div className="flex gap-1 w-[105px]">
                  <RenderStars rating={min} />
                </div>
                {`More Than ${min}  `}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
