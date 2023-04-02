const multer = require("multer");
const path = require("path");
exports.docStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/cv/')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext
        cb(null, file.fieldname + '-' + uniqueSuffix)
    },
})