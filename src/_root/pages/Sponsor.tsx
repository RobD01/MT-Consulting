import SponsorList from "@/components/shared/SponsorList";
import { Button } from "@/components/ui/button";
import { sponsor } from "@/constants";
import { Link } from "react-router-dom";

const Sponsor = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full px-5">Sponsors</h2>

          {/* home links */}
          <section className="grid grid-cols-1 p-5 gap-10">
            <div className="flex flex-col gap-3 mb-5">
              <h1 className="title">Become a sponsor</h1>

              <Link
                to="https://buy.stripe.com/bIY28n7vy1kd9MIfZ1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <Button className="shad-button_primary px-10">Buy</Button>
              </Link>
              <p className="text-rose-700 text-sm">
                Buy button will open a new window to the stripe platform
              </p>
              <p>
                This is a great way to put your brand and business in front of
                entrepreneurs and corporations.
              </p>

              <p>Sponsorship benefits include:</p>
              <ul className="pl-5">
                <li>&#x2022; Logo placement on sponsors page</li>
                <li>&#x2022; Link to your company website</li>
                <li>&#x2022; Company description, max 50 words</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="title">
                In partnership with our community sponsors
              </h1>
              {
                // @ts-expect-error object type
                <SponsorList list={sponsor} />
              }
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
