import Video from "./components/Video";
import videoDB from "./data/videos";
import { useState } from "react";
import "./components/AddVideo.css";

import "./App.css";
import PlayButton from "./components/PlayButton";
import Counter from "./components/Counter";
import AddVideo from "./components/AddVideo";
import State_Props from "./components/State_Props";
import Props from "./components/Props";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import Form from "./components/Form";
import LiftingStateUp from "./components/LiftingStateUp";
import RegistrationForm from "./components/RegistrationForm";
import UseOfMap from "./components/UseOfMap";
import UseStateWithObj from "./components/UseStateWithObj";
import UseStateWithArray from "./components/UseStateWithArray";
import ToDoList from "./components/ToDoList";
import CustomHooks from "./components/CustomHooks";
import AxiosGet from "./components/AxiosGet";
import AxiosPost_Put_Delete from "./components/AxiosPost_Put_Delete";
import Destructuring from "./components/Destructuring";
import ConditionalRendering from "./components/ConditionalRendering";
import React_Router from "./components/React-Router";

const App = () => {
  const onPlayed = () => {
    console.log("Video played.");
    // Add your logic for playing the video here
  };

  const onPaused = () => {
    console.log("Video paused.");
    // Add your logic for pausing the video here
  };

  const [videos, setVideos] = useState(videoDB);
  return (
    <>
      <div className="form">
        <AddVideo />
      </div>
      <div className="App"></div>
      <div className="App">
        <div className="video-btn">
          <button
            onClick={() =>
              setVideos([
                ...videos,
                {
                  id: 2,
                  title: "Next JS tutorial",
                  views: "100K",
                  time: "2 year ago",
                  channel: "DevWithMe",
                  verified: true,
                },
              ])
            }
          >
            Add Video
          </button>
        </div>
        {videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            views={video.views}
            time={video.time}
            channel={video.channel}
            verified={video.verified}
            id={video.id}
          />
        ))}
        <PlayButton onPlayed={onPlayed} onPaused={onPaused} />
      </div>
      <Counter />

      <State_Props defaultName="Topper Sai" color="blue" />
      <Props name="Tommper Sai" />
      <UseEffect />
      <UseReducer />
      <UseRef />
      <UseContext />
      <UseMemo />
      <UseCallback />
      <Form />
      <LiftingStateUp />
      <RegistrationForm />
      <UseOfMap />
      <UseStateWithObj />
      <UseStateWithArray />
      <ToDoList />
      <CustomHooks />
      <AxiosGet />
      <AxiosPost_Put_Delete />
      <Destructuring fName="Prajwal" lName="Kale" />
      <ConditionalRendering />
      <React_Router />
    </>
  );
};

export default App;

// Prop Drilling - Imp For Interviews
// Revise in GFG
