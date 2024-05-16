import React from "react";

type Props = {};

export default function HotelFacilities({}: Props) {
  return (
    <div className=" font-inter">
      <p className=" text-lg font-interSemiBold pb-1 border-b">Facilities</p>
      <ul className=" mt-3">
        <li className=" flex items-center gap-1 px-2">
          <input
            className=" checked:accent-violet-500"
            type="checkbox"
            name=""
            id="parking"
            title="parking"
          />
          <label className=" cursor-pointer" htmlFor="parking">
            Parking
          </label>
        </li>
      </ul>
    </div>
  );
}
