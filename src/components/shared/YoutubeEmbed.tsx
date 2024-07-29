import { business } from "@/constants";

const YoutubeEmbed = () => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={business.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
