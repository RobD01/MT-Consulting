import SponsorList from "@/components/shared/SponsorList";
import { product } from "@/constants";
import { service } from "@/constants";

const Product = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container ">
        <div className="p-1 flex flex-col flex-1 gap-10">
          <div>
            <h2 className="h3-bold md:h2-bold text-left w-full px-5">
              Products
            </h2>
            {
              // @ts-expect-error object type
              <SponsorList list={product} />
            }
          </div>
          <div>
            <h2 className="h3-bold md:h2-bold text-left w-full px-5">
              Services
            </h2>
            {
              // @ts-expect-error object type
              <SponsorList list={service} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
