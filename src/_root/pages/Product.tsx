import RentalList from "@/components/shared/RentalList";
import SponsorList from "@/components/shared/SponsorList";
import { product, rental } from "@/constants";
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
              Equipment Rental
            </h2>
            <p className="text-slate-800 pb-8">
              Terms: 1 week rentals. Shipping not available. In-person delivery
              to Orange County only. Security deposit in the form of
              authorization charge required. Upon equipment return, the deposit
              will be refunded.
            </p>
            {
              // @ts-expect-error object type
              <RentalList list={rental} />
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
