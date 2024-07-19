// config/multerConfig.js
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';

const uploadDirectory = path.resolve(__dirname, '../../uploads');

fs.ensureDirSync(uploadDirectory);

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory); // Directorio donde se almacenarán los archivos subidos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo con la fecha actual como prefijo
  }
});

console.log(storage.getDestination)

const upload = multer({ storage });

export default upload;