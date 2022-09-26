// import React, { useState } from "react";
// import "./Profile.css";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// export default function Profile() {
//   const [isOpenProfile, setIsOpenProfile] = useState(false);

//   function toggleModalProfile() {
//     setIsOpenProfile(!isOpenProfile);
//   }

//   return (
//     <div className="App">
//       <button onClick={toggleModalProfile}>Open modal</button>

//       <Modal
//         isOpen={isOpenProfile}
//         onRequestClose={toggleModalProfile}
//         contentLabel="My dialog"
//         className="modal-profile"
//         overlayClassName="myoverlay"
//       >
//         <div>My modal dialog.</div>
//         <button onClick={toggleModalProfile}>Close modal</button>
//       </Modal>
//     </div>
//   );
// }