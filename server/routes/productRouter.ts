import {avatarFileFilter, storage} from "../config/multer";

const productRouter = require('express').Router()
import ProductController from "../controller/productController";

productRouter.post('/add-product', ProductController.addProduct)
productRouter.delete('/delete-product', ProductController.deleteProduct)
productRouter.post('/update-product', ProductController.updateProduct)
productRouter.get('/get-by-id/:id', ProductController.getById)
productRouter.get('/get-products', ProductController.getProducts)
productRouter.get('/get-companies-products', ProductController.getCompaniesProducts)
export default productRouter