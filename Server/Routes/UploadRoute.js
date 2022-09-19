import express from "express";
const router = express.Router();
import multer from "multer";
// multer used to upload multimedia files

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("File has been uploaded");
  } catch (error) {
    console.log(error);
  }
});

export default router;
