/**
 *addToDo.js
 */

const  ToDoEntity = require('../../entities/ToDo');
const response = require('../../utils/response');
/**
 * @description : create new record of ToDo in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addToDo = ({
  ToDoDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let ToDo = ToDoEntity(dataToCreate);
  ToDo = await ToDoDb.create(ToDo);
  return response.success({ data:ToDo });
};
module.exports = addToDo;