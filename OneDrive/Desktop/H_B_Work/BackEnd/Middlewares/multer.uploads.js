import multer from 'multer';

// Store uploaded files in memory (use memory storage for Cloudinary)
const storage = multer.memoryStorage();
 
// Multer middleware for handling multiple image uploads
const upload = multer({ storage }).array('images', 12); // 'images' is the field name in the form

export default upload;
