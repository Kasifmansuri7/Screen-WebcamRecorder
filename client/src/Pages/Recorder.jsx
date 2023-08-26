import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

function Recorder() {
  const { user, ready } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && ready) {
      navigate("/login");
    }
  }, [user, ready]);

  const [record, setRecord] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: !record, audio: true, video: record });
  return (
    <div className="my-12 px-4">
      <div className="text-center">
        {/* <button className="border rounded-lg bg-sky-600 p-2 text-white text-center mx-2">
        {status}
      </button> */}
        {status !== "recording" && (
          <button
            className="border rounded-lg bg-sky-600 p-2 text-white text-center"
            onClick={() => setRecord((prev) => !prev)}
          >
            {record ? "Record Camera" : "Record Screen"}
          </button>
        )}
        {status !== "recording" && (
          <button
            className="border rounded-lg bg-green-600 p-2 text-white text-center mx-2"
            onClick={startRecording}
          >
            {mediaBlobUrl ? "Record again" : "Start Recording"}
          </button>
        )}
        {status === "recording" && (
          <button
            className="border rounded-lg bg-red-600 p-2 text-white text-center mx-2 "
            onClick={stopRecording}
          >
            Stop Recording
          </button>
        )}
      </div>
      <video
        width="720"
        className="mx-auto my-4 border border-black"
        src={mediaBlobUrl}
        controls
        autoPlay
        loop
      />
    </div>
  );
}

export default Recorder;
