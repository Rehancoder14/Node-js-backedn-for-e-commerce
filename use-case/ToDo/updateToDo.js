/**
 *updateToDo.js
 */

const  ToDoEntity = require('../../entities/ToDo');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated ToDo. {status, message, data}
 */
const updateToDo = ({
  ToDoDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let todo = ToDoEntity(dataToUpdate);
  todo = await ToDoDb.updateOne(query,todo);
  if (!todo){
    return response.recordNotFound();
  }
  return response.success({ data:todo });
};
module.exports = updateToDo;