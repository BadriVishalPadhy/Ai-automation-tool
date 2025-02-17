import React from "react";
import UploadCareButton from "./upload-care-button";

type Props = {};

const ProfilePicture = (props: Props) => (
  <div className="flex flex-col">
    <p className="text-lg text-white "> Profile Picture </p>
    <div className="flex h-[30vh] flex-col justify-center  ">
      <UploadCareButton onUpload={undefined} />
    </div>
  </div>
);

export default ProfilePicture;
