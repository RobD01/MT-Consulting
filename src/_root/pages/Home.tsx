import HomeCard from "@/components/shared/HomeCard";
import PostCard from "@/components/shared/PostCard";
import { business, homeLinks, homeInfo } from "@/constants";

const Home = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <h2 className="h3-bold md:h2-bold text-left w-full px-5">
          {business.name}
        </h2>

        {/* home info */}
        <ul className=" grid grid-cols-1  gap-7  sm:w-full">
          {homeInfo?.map((post) => (
            // @ts-expect-error homeInfo
            <HomeCard post={post} key={post.id} />
          ))}
        </ul>

        {/* home links */}
        <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-7  sm:w-full">
          {homeLinks?.map((post) => (
            <PostCard post={post} key={post.label} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
