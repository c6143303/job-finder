import productRouter from "./productRouter";

const indexRouter = require('express').Router()
import companyRouter from "./companyRoute";
import TypeRouter from "./typeRouter";
import CategoryRouter from "./categoryRouter";
import SubRouter from "./subRouter";
import FormRouter from "./formRouter";
import UploadsRouter from "./uploadsRouter";

indexRouter.use('/company', companyRouter)
indexRouter.use('/product', productRouter)
indexRouter.use('/type', TypeRouter)
indexRouter.use('/category', CategoryRouter)
indexRouter.use('/sub', SubRouter)
indexRouter.use('/form', FormRouter)
indexRouter.use('/upload', UploadsRouter)

export default indexRouter