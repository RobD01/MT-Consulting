import SponsorList from "@/components/shared/SponsorList";
import { product } from "@/constants";

const Product = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full px-5">Products</h2>
          {
            // @ts-expect-error object type
            <SponsorList list={product} />
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
