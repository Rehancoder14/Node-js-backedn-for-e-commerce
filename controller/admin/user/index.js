const userDb = require('../../../data-access/userDb');
const CommentDb = require('../../../data-access/CommentDb');
const ToDoDb = require('../../../data-access/ToDoDb');
const userTokensDb = require('../../../data-access/userTokensDb');
const roleDb = require('../../../data-access/roleDb');
const projectRouteDb = require('../../../data-access/projectRouteDb');
const routeRoleDb = require('../../../data-access/routeRoleDb');
const userRoleDb = require('../../../data-access/userRoleDb');

const userSchema = require('../../../validation/schema/user');

const createValidation = require('../../../validation')(userSchema.createSchema);
const updateValidation = require('../../../validation')(userSchema.updateSchema);
const filterValidation = require('../../../validation')(userSchema.filterValidationSchema);
const addUserUsecase = require('../../../use-case/user/addUser')({
  userDb,
  createValidation 
});
const findAllUserUsecase = require('../../../use-case/user/findAllUser')({
  userDb,
  filterValidation
});
const getUserCountUsecase = require('../../../use-case/user/getUserCount')({
  userDb,
  filterValidation
});
const getUserUsecase = require('../../../use-case/user/getUser')({
  userDb,
  filterValidation
});
const updateUserUsecase = require('../../../use-case/user/updateUser')({
  userDb,
  updateValidation 
});
const partialUpdateUserUsecase = require('../../../use-case/user/partialUpdateUser')({ userDb });
const softDeleteUserUsecase = require('../../../use-case/user/softDeleteUser')({
  userDb,
  CommentDb,
  ToDoDb,
  userTokensDb,
  roleDb,
  projectRouteDb,
  routeRoleDb,
  userRoleDb
});
const softDeleteManyUserUsecase = require('../../../use-case/user/softDeleteManyUser')({
  userDb,
  CommentDb,
  ToDoDb,
  userTokensDb,
  roleDb,
  projectRouteDb,
  routeRoleDb,
  userRoleDb
});
const bulkInsertUserUsecase = require('../../../use-case/user/bulkInsertUser')({ userDb });
const bulkUpdateUserUsecase = require('../../../use-case/user/bulkUpdateUser')({ userDb });
const deleteUserUsecase = require('../../../use-case/user/deleteUser')({
  userDb,
  CommentDb,
  ToDoDb,
  userTokensDb,
  roleDb,
  projectRouteDb,
  routeRoleDb,
  userRoleDb
});
const deleteManyUserUsecase = require('../../../use-case/user/deleteManyUser')({
  userDb,
  CommentDb,
  ToDoDb,
  userTokensDb,
  roleDb,
  projectRouteDb,
  routeRoleDb,
  userRoleDb
});
const changePasswordUsecase = require('../../../use-case/user/changePassword')({ userDb });
const updateProfileUsecase = require('../../../use-case/user/updateProfile')({
  userDb,
  updateValidation
});

const userController = require('./user');

const addUser = userController.addUser(addUserUsecase);
const findAllUser = userController.findAllUser(findAllUserUsecase);
const getUserCount = userController.getUserCount(getUserCountUsecase);
const getUserById = userController.getUser(getUserUsecase);
const updateUser = userController.updateUser(updateUserUsecase);
const partialUpdateUser = userController.partialUpdateUser(partialUpdateUserUsecase);
const softDeleteUser = userController.softDeleteUser(softDeleteUserUsecase);
const softDeleteManyUser = userController.softDeleteManyUser(softDeleteManyUserUsecase);
const bulkInsertUser = userController.bulkInsertUser(bulkInsertUserUsecase);
const bulkUpdateUser = userController.bulkUpdateUser(bulkUpdateUserUsecase);
const deleteUser = userController.deleteUser(deleteUserUsecase);
const deleteManyUser = userController.deleteManyUser(deleteManyUserUsecase);
const changePassword = userController.changePassword(changePasswordUsecase);
const updateProfile = userController.updateProfile(updateProfileUsecase);
const getLoggedInUserInfo = userController.getLoggedInUserInfo(getUserUsecase);

module.exports = {
  addUser,
  findAllUser,
  getUserCount,
  getUserById,
  updateUser,
  partialUpdateUser,
  softDeleteUser,
  softDeleteManyUser,
  bulkInsertUser,
  bulkUpdateUser,
  deleteUser,
  deleteManyUser,
  changePassword,
  updateProfile,
  getLoggedInUserInfo,
};