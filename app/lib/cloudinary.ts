const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
console.log(
  "Cloudinary Cloud Name:",
  CLOUDINARY_CLOUD_NAME,
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
);

if (!CLOUDINARY_CLOUD_NAME) {
  console.warn("Missing VITE_CLOUDINARY_CLOUD_NAME environment variable");
}

export async function uploadImageToCloudinary(file: File): Promise<string> {
  if (!CLOUDINARY_CLOUD_NAME) {
    throw new Error(
      "Cloudinary is not configured. Please set VITE_CLOUDINARY_CLOUD_NAME in your .env file",
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "awaniDigitals");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (!response.ok) {
      const errorMsg = data.error?.message || "Unknown error from Cloudinary";
      throw new Error(errorMsg);
    }

    if (!data.secure_url) {
      throw new Error("No URL returned from Cloudinary");
    }

    return data.secure_url;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(
      `Image upload failed: ${message}. Make sure you have an 'unsigned_upload' preset configured in Cloudinary dashboard.`,
    );
  }
}
