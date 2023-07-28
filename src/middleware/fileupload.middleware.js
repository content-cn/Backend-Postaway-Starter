// IMPORT MULTER MIDDLEWARE HERE

// UPLOAD MIDDLEWARE
const storage = multer.diskStorage({});
const upload = multer({ storage: storage });

// EXPORT UPLOAD MIDDLEWARE HERE
