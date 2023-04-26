// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// // import { ProfileForm } from "../components/ProfileForm.jsx";
// import { useState } from "react";
// import { Button, ButtonGroup, Stack } from "@mui/material";

// import "../styles/App.css";

// export default function ProfilePage(props) {
//     const [signupSelected, setSignupSelected] = useState([false]);
//     const [loggedInToken, setLoggedInToken] = useState("");

//     let [firstName, setFirstName] = useState("First Name");
//     let [lastName, setLastName] = useState("Last Name");
//     let [aboutMe, setAboutMe] = useState("About Me");
//     let [linkedIn, setLinkedIn] = useState("Upload LinkedIn Profile");
//     let [profilePicture, setProfilePicture] = useState("Set Profile Picture");
//     let [interest, setInterests] = useState("Interests");
//     let [submit, setSubmit] = useState("Submit");

//     return (
//         <div class="profilepage-container">
//             <main>
//                 <div>
//                     <form>
//                         <span>
//                             <label>First Name</label>
//                             <input></input>
//                         </span>
//                         <span>
//                             <label>Last Name</label>
//                             <input></input>
//                         </span>
//                         <div>
//                             <span>
//                                 <label>About Me</label>
//                                 <input></input>
//                             </span>
//                         </div>

//                         <div>
//                             <label>Profile Picture</label>
//                             <input></input>
//                         </div>
//                         <span>
//                             <label>LinkedIn</label>
//                             <input></input>
//                         </span>
//                         <span>
//                             <form>
//                                 <label>Interests</label>
//                                 <div class="flex-container">
//                                     <div>
//                                         <label>Interest 1</label>
//                                         <input type="checkbox" />
//                                     </div>
//                                     <div>
//                                         <label>Interest 2</label>
//                                         <input type="checkbox" />
//                                     </div>
//                                     <div>
//                                         <label>Interest 3</label>
//                                         <input type="checkbox" />
//                                     </div>
//                                     <div>
//                                         <label>Interest 4</label>
//                                         <input type="checkbox" />
//                                     </div>
//                                     <div>
//                                         <label>Interest 5</label>
//                                         <input type="checkbox" />
//                                     </div>
//                                     <div>
//                                         <label>Interest 6</label>
//                                         <input type="checkbox" />
//                                     </div>
//                                 </div>
//                             </form>
//                         </span>
//                     </form>

//                     <div>
//                         <Button>
//                             <h2>Submit</h2>
//                         </Button>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }

// import React, { useState, useCallback } from "react";
// // Import image// npm install --save next-images
// import Image from "next-images";
// // Import local CSS file
// import "../styles/ProfilePage.css";
// // import images from "../img";
// import Form from "../components/ProfileForm";

// // $ npm install --save dropzone// for the feature of image dropping
// import { Dropzone } from "dropzone";

// const ProfilePage = () => {
//   const [fileUrl, setFileurl] = useState(null);
//   const onDrop = useCallback(async (acceptedFile) => {
//     setFileurl(acceptedFile[0]);
//   }, []);
//   const { getRootProps, getInputProps } = new Dropzone({
//     onDrop,
//     accept: "image/*",
//     maxSize: 5000000,
//   });

//   return (
//     <div className={Style.profilePage}>
//       <div className={Style.profilePage_info}>
//         <h1>Profile settings</h1>
//         <p>
//           you can set preferred display name, create your profile and other
//           personal settings.
//         </p>
//       </div>
//       <div className={Style.profilePage_box}>
//         <div className={Style.profilePage_box_img} {...getRootProps()}>
//           {" "}
//         </div>
//         <input {...getInputProps()} />
//         <Image
//           src={fileUrl.user1}
//           alt="account upload"
//           width={150}
//           height={150}
//           className={Style.profilePage_box_img_img}
//         />
//         <p className={Style.profilePage_box_img_para}>Change Image</p>
//         <div>
//           <div className={Style.profilePage_box_form}></div>
//           <Form />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import { Signupform } from "../components/Signupform.jsx";
// import { useState } from "react";
// import { Button, ButtonGroup, Stack } from "@mui/material";

// import "../styles/App.css";

// export default function HomePage(props) {
//     const [signupSelected, setSignupSelected] = useState([false]);
//     const [loggedInToken, setLoggedInToken] = useState("");

//     let [ButtonName1, setButtonName1] = useState("");
//     let [ButtonName2, setButtonName2] = useState("");

//     ButtonName1 = "Sign In";
//     ButtonName2 = "Sign Up";
//     return (
//         <div>
//             <main>
//                 <div>
//                     <h2>Volunteer Signup</h2>
//                     {/* <Button>{props.signin}</Button> */}
//                     <Button
//                         onClick={() => {
//                             setSignupSelected(!signupSelected);
//                         }}
//                     >
//                         {ButtonName1}
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             setSignupSelected(!signupSelected);
//                         }}
//                     >
//                         {ButtonName2}
//                     </Button>
//                     <Routes>
//                         <Route path="/home" element={<p></p>} />
//                         {signupSelected == true && <Route path="/" element={<Signupform setLoggedInToken={setLoggedInToken} title="Sign Up Today" />} />}
//                     </Routes>
//                 </div>
//             </main>
//         </div>
//     );
// }
