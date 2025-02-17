"use client";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as LR from "@uploadcare/react-uploader";
type Props = {
  onUpload: any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProvider = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);
  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload;
    };
  }, []);
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, camera, facebook, gdrive"
        cameraModes="photo, video"
        classNameUploader="uc-light"
        pubkey="a096ea9ff6e42963cc61"
      />
    </div>
  );
};

export default UploadCareButton;
