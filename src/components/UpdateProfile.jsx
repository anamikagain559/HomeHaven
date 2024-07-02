import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2"; // Import SweetAlert library
import withReactContent from "sweetalert2-react-content";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MySwal = withReactContent(Swal);

function UpdateProfile() {
  const { user } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;

      case "photoURL":
        setPhotoURL(value);
        break;

      default:
    }
  };
  useEffect(() => {
    document.title = "Update Profile Page";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, { displayName, photoURL });
      MySwal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
      });
    } catch (error) {
      setError(error.message);
      console.error("Error updating profile:", error);
      MySwal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-2xl lg:text-2xl font-bold text-center mb-8 text-[#22cdc4] pt-[100px]">
       Your Profile Info
      </h1>
      <div className="mx-auto text-center">
      {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" className="w-24 h-24 mx-auto"/>
            </div>}
      </div>
      <h1 className="text-3xl lg:text-3xl font-bold text-center mb-8 text-[#22cdc4] pt-[100px]">
        Update Profile Name and Photo
      </h1>
      <div className="bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe]  flex justify-center items-center pb-[100px]">
        <div className="bg-white shadow-2xl rounded-3xl py-8 w-full max-w-md relative">
          <form onSubmit={handleSubmit} className="px-4 lg:px-10">
            <div className="py-6 flex flex-col gap-6">
              <input
                type="text"
                name="displayName"
                placeholder="Full Name"
                value={displayName}
                onChange={handleChange}
                className="h-12 lg:h-14 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />
              <input
                placeholder="Enter Your Photo Url"
                name="photoURL"
                type="text"
                value={photoURL}
                onChange={handleChange}
                className="h-12 lg:h-14 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5 px-6 py-2]"
              />

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-12 lg:h-14 text-white bg-[#0ca39a]"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default UpdateProfile;
