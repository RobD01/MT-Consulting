import { Link } from "react-router-dom";

type ResumeCardProps = {
  post: {
    id: number;
    name: string | undefined;
    detail?: Array<string> | undefined;
    link?: string | undefined;
  };
};

const ResumeCard = ({ post }: ResumeCardProps) => {
  return (
    <div className="resume-card">
      <div className=" p-3 text-center flex flex-col gap-2">
        <p className="text-center font-semibold">{post.name}</p>
        {post.link ? (
          <Link to={post.link} target="_blank">
            <button className="px-10 bg-amber-100">View Product</button>
          </Link>
        ) : null}
        <ul>
          {post.detail?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeCard;
