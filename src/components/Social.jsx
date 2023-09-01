const SocialComponent = () => {
  const socialLink = [
    {
      id: "Youtube",
      image: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
      link: "https://www.youtube.com/@moneytheory",
    },
    {
      id: "Instagram",
      image:
        "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
      link: "https://www.instagram.com/rd.fin/",
    },
    {
      id: "Patreon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Patreon_logo.svg/2048px-Patreon_logo.svg.png",
      link: "https://www.patreon.com/moneytheory",
    },
  ];

  return (
    <div className="d-flex justify-content-center">
      <img src="imagesource.com/levi" alt="" />
      {socialLink.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="flexItem"
        >
          <img src={item.image} alt={item} width="100%" />
        </a>
      ))}
    </div>
  );
};

export default SocialComponent;
