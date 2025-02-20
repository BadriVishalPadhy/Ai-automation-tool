"use client"; // Required for React Server Components
import { useState } from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

function ProfileUploader() {
  const [profileImageUrl, setProfileImageUrl] = useState("");

  const handleUploaderEvent = (event: any) => {
    if (event.type === "files-uploaded") {
      // Get the first file info
      const fileInfo = event.detail.files[0];

      // Create a CDN URL with transformations for profile image
      // Format as 400x400 crop with no compression
      const transformedUrl = `${fileInfo.cdnUrl}-/crop/400x400/center/-/format/auto/`;

      setProfileImageUrl(transformedUrl);

      // You could also save this URL to your backend here
      saveProfileImageToBackend(transformedUrl);
    }
  };

  const saveProfileImageToBackend = async (imageUrl: string) => {
    try {
      const response = await fetch("/api/profile/update-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profileImage: imageUrl }),
      });

      if (response.ok) {
        console.log("Profile image saved successfully");
      }
    } catch (error) {
      console.error("Error saving profile image:", error);
    }
  };

  return (
    <div className="profile-uploader-container">
      {profileImageUrl && (
        <div className="profile-preview">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="rounded-full w-34 h-32 object-cover mb-4"
          />
          <p>Profile image uploaded successfully!</p>
        </div>
      )}

      <FileUploaderRegular
        sourceList="local, camera"
        cameraModes="photo"
        imgOnly={true}
        cropPreset="1:1"
        previewStep={true}
        className="uc-light"
        pubkey="a096ea9ff6e42963cc61"
        onEvent={handleUploaderEvent}
      />
    </div>
  );
}

export default ProfileUploader;
