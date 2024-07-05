import "./Video.css";

const Video = ({ title, id, channel, views, time, verified }) => {
  // let channelJSX;

  // if (verified) {
  //   channelJSX = <div className="channel">{channel}✅</div>;
  // } else {
  //   channelJSX = <div className="channel">{channel}</div>;
  // }

  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/200/300`} alt="Image" />
        </div>
        <div className="title">{title}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
      </div>
    </>
  );
};

export default Video;
