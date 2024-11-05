const { Router } = require("express");
const router = Router();
const userRoutes = require('./UserRouter')


router.use('/user', userRoutes);

module.exports = router;