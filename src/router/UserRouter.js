const { Router } = require("express");
const UserController = require('../controllers/UserController');
const { validadeUser,validadeUserId } = require("../middlewares/validadeUser");
const router = Router();

router.post('/', validadeUser, UserController.create);

router.put('/:id', validadeUser,UserController.update);

router.delete('/:id',validadeUserId,UserController.delte);

router.get('/', validadeUser ,UserController.getAll);

router.get('/:id', validadeUserId,UserController.getOne);

module.exports = router;