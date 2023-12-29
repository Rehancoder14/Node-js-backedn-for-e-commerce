const ToDoDb = require('../../../../data-access/ToDoDb');

const ToDoSchema = require('../../../../validation/schema/ToDo');

const createValidation = require('../../../../validation')(ToDoSchema.createSchema);
const updateValidation = require('../../../../validation')(ToDoSchema.updateSchema);
const filterValidation = require('../../../../validation')(ToDoSchema.filterValidationSchema);
const addToDoUsecase = require('../../../../use-case/ToDo/addToDo')({
  ToDoDb,
  createValidation 
});
const findAllToDoUsecase = require('../../../../use-case/ToDo/findAllToDo')({
  ToDoDb,
  filterValidation
});
const getToDoCountUsecase = require('../../../../use-case/ToDo/getToDoCount')({
  ToDoDb,
  filterValidation
});
const getToDoUsecase = require('../../../../use-case/ToDo/getToDo')({
  ToDoDb,
  filterValidation
});
const updateToDoUsecase = require('../../../../use-case/ToDo/updateToDo')({
  ToDoDb,
  updateValidation 
});
const partialUpdateToDoUsecase = require('../../../../use-case/ToDo/partialUpdateToDo')({ ToDoDb });
const softDeleteToDoUsecase = require('../../../../use-case/ToDo/softDeleteToDo')({ ToDoDb });
const softDeleteManyToDoUsecase = require('../../../../use-case/ToDo/softDeleteManyToDo')({ ToDoDb });
const bulkInsertToDoUsecase = require('../../../../use-case/ToDo/bulkInsertToDo')({ ToDoDb });
const bulkUpdateToDoUsecase = require('../../../../use-case/ToDo/bulkUpdateToDo')({ ToDoDb });
const deleteToDoUsecase = require('../../../../use-case/ToDo/deleteToDo')({ ToDoDb });
const deleteManyToDoUsecase = require('../../../../use-case/ToDo/deleteManyToDo')({ ToDoDb });

const ToDoController = require('./ToDo');

const addToDo = ToDoController.addToDo(addToDoUsecase);
const findAllToDo = ToDoController.findAllToDo(findAllToDoUsecase);
const getToDoCount = ToDoController.getToDoCount(getToDoCountUsecase);
const getToDoById = ToDoController.getToDo(getToDoUsecase);
const updateToDo = ToDoController.updateToDo(updateToDoUsecase);
const partialUpdateToDo = ToDoController.partialUpdateToDo(partialUpdateToDoUsecase);
const softDeleteToDo = ToDoController.softDeleteToDo(softDeleteToDoUsecase);
const softDeleteManyToDo = ToDoController.softDeleteManyToDo(softDeleteManyToDoUsecase);
const bulkInsertToDo = ToDoController.bulkInsertToDo(bulkInsertToDoUsecase);
const bulkUpdateToDo = ToDoController.bulkUpdateToDo(bulkUpdateToDoUsecase);
const deleteToDo = ToDoController.deleteToDo(deleteToDoUsecase);
const deleteManyToDo = ToDoController.deleteManyToDo(deleteManyToDoUsecase);

module.exports = {
  addToDo,
  findAllToDo,
  getToDoCount,
  getToDoById,
  updateToDo,
  partialUpdateToDo,
  softDeleteToDo,
  softDeleteManyToDo,
  bulkInsertToDo,
  bulkUpdateToDo,
  deleteToDo,
  deleteManyToDo,
};