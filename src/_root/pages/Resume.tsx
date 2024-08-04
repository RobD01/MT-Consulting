import ResumeCard from "@/components/shared/ResumeCard";
import { resumeSoftware, resumeSummary } from "@/constants";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="flex flex-1">
      <div className="home-container bg-white ">
        {/* Title */}
        <section className="flex flex-col gap-2 items-center">
          <h2 className="text-xl">Robert Dao</h2>
          <div className="flex flex-col items-center">
            <p>Westminster, CA</p>
            <p>rdao5236@gmail.com</p>
            <div className="flex flex-center gap-2 items-center w-1/4 md:w-1/6 m-1">
              <Link to="http://Linkedin.com/in/robert-d2" target="_blank">
                <img
                  src="/assets/icons/linkedin.png"
                  alt="linkedin"
                  className=""
                />
              </Link>
              <Link to="http://Github.com/robd01" target="_blank">
                <img
                  src="/assets/icons/github.png"
                  alt="linkedin"
                  className="w-1/2"
                />
              </Link>
            </div>
          </div>
        </section>
        {/* Professional Summary */}
        <section className="flex flex-col gap-2 w-full">
          <h2 className="text-xl text-center">Professional Summary</h2>
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
            {resumeSummary.map((item) => (
              <ResumeCard post={item} key={item.id} />
            ))}
          </div>
        </section>

        {/* Software Development */}
        <section className="flex flex-col gap-2 w-full">
          <h2 className="text-xl text-center">
            Software Development Portfolio
          </h2>
          <div className="flex flex-row flex-wrap gap-5 items-center justify-center">
            {resumeSoftware.map((item) => (
              <ResumeCard post={item} key={item.id} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
