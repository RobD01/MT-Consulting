import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CommunityPost = ({ data }) => {
  const { id } = useParams();

  let navigate = useNavigate();
  const handleExit = () => {
    navigate(-1);
  };

  const item = data.find((x) => x.id == id);

  const { Date, Name, Title, Tags, Message } = item;

  return (
    <div className="container text-center">
      <h2 className="text-center">CommunityPost</h2>
      <div className="message-grid">
        <div className="message-header">
          <p className="message-date">{Date}</p>
          <p className="message-name">Name: {Name}</p>
          <p className="message-tag"># {Tags}</p>
        </div>
        <p className="message-title">{Title}</p>
        <p className="message-content">{Message}</p>

        <button onClick={handleExit}>Previous Page</button>
      </div>
    </div>
  );
};

export default CommunityPost;
