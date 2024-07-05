import "./AddVideo.css";
import { useState } from "react";

const initialVideo = {
  id: 1,
  title: "",
  views: "",
  time: "1 year ago",
  channel: "DevWithMe",
  verified: true,
};

const AddVideo = ({}) => {
  const [video, setVideo] = useState({ initialVideo });

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(video);
    setVideo(initialVideo);
  };

  return (
    <>
      <div className="container">
        <form>
          <input
            className="ip1"
            name="title"
            onChange={handleClick}
            type="text"
            placeholder="Title"
            value={video.title}
          />
          <input
            className="ip2"
            name="views"
            onChange={handleClick}
            type="text"
            placeholder="Views"
            value={video.views}
          />

          <button onClick={handleSubmit}>Add Video</button>
        </form>

        <div className="results">
          <h1>The Added Video's Title : {video.title}</h1>
          <h1>The Added Video's Views : {video.views}</h1>
        </div>
      </div>
    </>
  );
};
export default AddVideo;
