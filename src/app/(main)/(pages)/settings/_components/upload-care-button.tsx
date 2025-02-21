import { useState } from "react";
import { uploadFile } from "@uploadcare/upload-client";

export default function ProfilePictureUploader() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setLoading(true);

      // Upload to UploadCare
      const result = await uploadFile(file, {
        publicKey: process.env.NEXT_PUBLIC_KEY || "",
        store: "auto",
        metadata: {
          profilePicture: "true",
        },
      });

      // Get the CDN URL
      const cdnUrl = `https://ucarecdn.com/${result.uuid}/`;
      setImageUrl(cdnUrl);

      // Here you would typically save this URL to your user's profile in your database
      console.log("Profile picture uploaded:", cdnUrl);

      setLoading(false);
    } catch (error) {
      console.error("Upload failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>

      <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? "Uploading..." : "Upload Profile Picture"}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={loading}
        />
      </label>
    </div>
  );
}
