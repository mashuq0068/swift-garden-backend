import { fileUploader } from "../../utils/fileUploader";

const uploadFileIntoCloudinary = async (req: any) => {

  const uploadToCloudinary = await fileUploader.uploadToCloudinary(
    req.file
  );
  return {
    photo: uploadToCloudinary?.secure_url,
  };
};

export const uploadServices = {
  uploadFileIntoCloudinary,
};
