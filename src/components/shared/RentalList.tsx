import { Link } from "react-router-dom";

type RentalListProps = {
  list: [
    {
      id: number;
      imageUrl?: string;
      url?: string;
      title?: string;
      description?: string;
      deposit?: string;
    }
  ];
};

type RentalProps = {
  id: number;
  imageUrl?: string;
  url?: string;
  title?: string;
  description?: string;
  deposit?: string;
};

const RentalList = ({ list }: RentalListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-10">
      {list.map((item: RentalProps) => (
        <li key={item?.id} className="">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">{item?.title}</span>

            {item.url ? (
              <Link
                to={item?.url || ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-slate-800 pl-2 pb-2">{item?.description}</p>
                <p className="text-slate-800 pl-2 pb-2">
                  Deposit: ${item?.deposit}
                </p>
                <img
                  src={item?.imageUrl}
                  alt="image"
                  className=" object-cover rounded-[10px] w-1/3 md:w-1/6 pl-2"
                />
              </Link>
            ) : (
              <>
                <p className="text-slate-800 pl-2 pb-2">{item?.description}</p>
                <p className="text-slate-800 pl-2 pb-2">
                  Deposit: ${item?.deposit}
                </p>
                <img
                  src={item?.imageUrl}
                  alt="image"
                  className=" object-cover rounded-[10px] w-1/3 md:w-1/6  pl-2"
                />
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RentalList;
