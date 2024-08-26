import path from "path";
import multer from "multer";
import fs from "fs";

const storage = (folder: "stones" | "categories" | "products") => {
  const folderPath = `public/${folder}/`;

  fs.access(folderPath, (error) => {
    // To check if given directory
    // already exists or not
    if (error) {
      // If current directory does not exist then create it
      fs.mkdir(folderPath, { recursive: true }, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("New Directory created successfully !!");
        }
      });
    } else {
      console.log("Given Directory already exists !!");
    }
  });

  return multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `public/${folder}/`);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
};

export const upload = (folder: "stones" | "categories" | "products") =>
  multer({
    storage: storage(folder),
    fileFilter: (req: any, file: any, cb: any) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });

export const uploadSingleImage = (
  folder: "stones" | "categories" | "products"
) => upload(folder).single("image");

export const uploadMultipleImages = (
  folder: "stones" | "categories" | "products"
) => upload(folder).array("images");
