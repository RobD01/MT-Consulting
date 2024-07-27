import { Link } from "react-router-dom";
import React from "react";

const SponsorList = ({ list }) => {
  return (
    <ul className="grid grid-cols-1 gap-10" style={{ listStyleType: "none" }}>
      {list.map((item) => (
        <li key={item?.id} className="">
          <div className="my-4">
            <span className="font-semibold">{item?.title}</span>

            <Link
              to={item?.url || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="">{item?.description}</p>
              <img
                src={item?.imageUrl}
                alt="image"
                className=" object-fit-cover rounded w-25"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SponsorList;
