import React, { useRef,useState } from "react";
import YouTube from "react-youtube";
import backgroundImage from "../img/background.png"; // 画像ファイルのパスを指定
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);
  const [selectedDataId, setSelectedDataId] = useState(0)
 
  const selectData = data[selectedDataId];

  const videoId = selectData.videoID;
  const songName = selectData.name;

  const artistName = selectData.artist;
  
  const playerRef = useRef(null)

  const nextSong = () => {
    setSelectedDataId((prevIndex) => (prevIndex + 1) % data.length);
  };

  const backSong = () => {
    setSelectedDataId((prevIndex) => {
      if (prevIndex === 0) {
        // インデックスが0の場合、最後尾のインデックスに移動
        return data.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const onPlayerReady = (event) => {
    const player = event.target;
    playerRef.current = player;
  };

  const onPauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo(); // 動画を一時停止
    }
  };

  const containerStyle = {
    position: "relative",
    width: "100vw",
    height: "88vh",
  };

  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url(${backgroundImage}) center/cover no-repeat fixed`,
    zIndex: -1,
  };

  const videoContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
  };

  const rectangleStyle = {
    position: "absolute",
    top: "21.4%",
    left: "25.9%",
    width: "48%",
    height: "56.5%",
    border: "1px solid #fff",
    zIndex: -1,
  };

  const songdetails = {
    position: "absolute",
    top: "12%",
    left: "38%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "50px",
    textAlign: "center",
  };


 // ...

 const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Vertically center the buttons
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1,
  backgroundPosition: 'center center',
};

const backButtonStyle = {
  transform: "rotate(180deg)",
  fontSize: "24px", // Increase the font size of the button icon
  marginRight: "300px", // Add some margin to the right to increase spacing
};

const nextButtonStyle = {
  fontSize: "24px", // Increase the font size of the button icon
  marginLeft: "20px", // Add some margin to the left to increase spacing
};

// ...

return (
  <div style={containerStyle}>
    <div style={backgroundStyle}></div>
    <div style={videoContainerStyle}>
      <YouTube videoId={videoId} onReady={onPlayerReady} />
    </div>
    <div style={rectangleStyle}></div>
    <div style={songdetails}>
      {/* <p>{songName}/{artistName}</p> */}
    </div>
    <div style={buttonContainerStyle}>
      <button onClick={backSong} style={backButtonStyle}><FontAwesomeIcon icon={faAnglesRight} /></button>
      <button onClick={nextSong} style={nextButtonStyle}><FontAwesomeIcon icon={faAnglesRight} /></button>
    </div>
  </div>
);

}

const nextButtonStyle = {
  position: "absolute",
  top: "80%",
  left: "75%",
  transform: "translateX(-50%)",
  zIndex: 1,
};
const pauseButtonStyle = {
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: -1,
};


export default App;