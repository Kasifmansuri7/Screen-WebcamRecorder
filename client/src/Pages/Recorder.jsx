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
        {/* <button className="border rounded-lg bg-cyan-700 p-2 text-white text-center mx-2">
        {status}
      </button> */}
        {status !== "recording" && (
          <button
            className="border rounded-lg bg-cyan-700 p-2 text-white text-center"
            onClick={() => setRecord((prev) => !prev)}
          >
            {record ? (
              <span className="inline-flex items-center gap-1">
                Record Camera
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                Record Screen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </button>
        )}
        {status !== "recording" && (
          <button
            className="border rounded-lg bg-green-600 p-2 text-white text-center mx-2 "
            onClick={startRecording}
          >
            {mediaBlobUrl ? (
              <span className="inline-flex items-center gap-1">
                Record Again
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M15 6.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H15zM20.25 6.75a.75.75 0 00-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75zM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1">
                Start Recording{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </button>
        )}
        {status === "recording" && (
          <button
            className="border rounded-lg bg-red-600 p-2 text-white text-center mx-2 inline-flex items-center gap-1 "
            onClick={stopRecording}
          >
            Stop Recording{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clip-rule="evenodd"
              />
            </svg>
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
