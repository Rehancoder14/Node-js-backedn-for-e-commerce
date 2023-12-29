
/**
 *deleteToDo.js
 */
 
const response = require('../../utils/response');
/**
 * @description : delete record from database.
 * @param {Object} query : query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted ToDo. {status, message, data}
 */
const deleteToDo = ({ ToDoDb }) => async (query,req,res) => {
  let deletedToDo = await ToDoDb.deleteOne(query);
  if (!deletedToDo){
    return response.recordNotFound({});
  }
  return response.success({ data: deletedToDo });
};

module.exports = deleteToDo;