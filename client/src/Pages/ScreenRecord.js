// import React, { useState } from "react";
// import { useReactMediaRecorder } from "react-media-recorder";

// const ScreenRecording = ({
//   screen,
//   audio,
//   video,
//   downloadRecordingPath,
//   downloadRecordingType,
// }) => {
//   const [recordingNumber, setRecordingNumber] = useState(0);
//   const [record, setRecord] = useState(false);
//   const RecordView = () => {
//     const {
//       status,
//       startRecording: startRecord,
//       stopRecording: stopRecord,
//       mediaBlobUrl,
//     } = useReactMediaRecorder({ screen: !record, audio: true, video: true });

//     const startRecording = () => {
//       return startRecord();
//     };

//     const stopRecording = () => {
//       const currentTimeSatmp = new Date().getTime();
//       setRecordingNumber(currentTimeSatmp);
//       return stopRecord();
//     };

//     const viewRecording = () => {
//       window.open(mediaBlobUrl, "_blank").focus();
//     };
//     console.log(mediaBlobUrl);
//     const downloadRecording = () => {
//       const pathName = `${downloadRecordingPath}_${recordingNumber}.${downloadRecordingType}`;
//       try {
//         if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//           // for IE
//           window.navigator.msSaveOrOpenBlob(mediaBlobUrl, pathName);
//         } else {
//           // for Chrome
//           const link = document.createElement("a");
//           link.href = mediaBlobUrl;
//           link.download = pathName;
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     return (
//       <>
//         <div className="flex justify-between my-4">
//           <div>
//             {status && status !== "stopped" && (
//               <button className="border rounded-lg bg-cyan-700 p-2 text-white text-center">
//                 Screen Recording Status: {status && status.toUpperCase()}
//               </button>
//             )}
//             {status && status === "recording" && (
//               <button
//                 className="screen-recording-badge"
//                 color="#faad14"
//                 status="processing"
//                 offset={[2, 0]}
//                 style={{
//                   marginLeft: "5px",
//                 }}
//               />
//             )}
//           </div>
//           <div>
//             {status && status !== "recording" && (
//               <button
//                 onClick={startRecording}
//                 className="border rounded-lg bg-green-600  px-4 py-2  text-white"
//               >
//                 {mediaBlobUrl ? "Record again" : "Start Recording"}
//               </button>
//             )}
//             {status && status === "recording" && (
//               <button
//                 onClick={stopRecording}
//                 className="border rounded-lg bg-red-600  px-4 py-2  text-white"
//               >
//                 Stop Recording
//               </button>
//             )}
//             {mediaBlobUrl && status && status === "stopped" && (
//               <button
//                 className="border rounded-lg bg-green-600 px-4 py-2 mx-2 text-white"
//                 onClick={viewRecording}
//               >
//                 Open in new window
//               </button>
//             )}
//             {downloadRecordingType &&
//               mediaBlobUrl &&
//               status &&
//               status === "stopped" && (
//                 <button onClick={downloadRecording}>Download</button>
//               )}
//           </div>
//         </div>
//         <video width="780" className="mx-auto my-10 border border-black" controls autoPlay loop src={mediaBlobUrl}></video>
//       </>
//     );
//   };
//   return <div className="px-4">{RecordView()}</div>;
// };
// export default ScreenRecording;
