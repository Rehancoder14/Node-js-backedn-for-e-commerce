const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./CommentRoutes'));
router.use(require('./ToDoRoutes'));
router.use(require('./userRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
