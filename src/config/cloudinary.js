import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configura Cloudinary
cloudinary.v2.config({
  cloud_name: "HotelsBackend",
  api_key: "528121731391556",
  api_secret: "HPtqtzzSE2AuU2Bkc7upjCsqmE0"
});

// Configura multer para usar Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'HotelBackend', // Puedes cambiar el nombre de la carpeta
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

export { cloudinary, storage };