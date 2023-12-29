/**
 *partialUpdateToDo.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated ToDo. {status, message, data}
 */
const partialUpdateToDo = ({ ToDoDb }) => async (params,req,res) => {
  const todo = await ToDoDb.updateOne(params.query,params.dataToUpdate);
  if (!todo){
    return response.recordNotFound();
  }
  return response.success({ data:todo });
};
module.exports = partialUpdateToDo;