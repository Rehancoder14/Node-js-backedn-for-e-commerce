/**
 *softDeleteComment.js
 */

const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeSoftDeleteWithDependency = require('./deleteDependent').softDeleteWithDependency;
const response = require('../../utils/response');

/**
 * @description : soft delete record from database by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response..
 * @return {Object} : deactivated Comment. {status, message, data}
 */
const softDeleteComment = ({ CommentDb }) => async (params,req,res) => {
  let {
    query, dataToUpdate,isWarning 
  } = params;
  let updatedComment = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({ CommentDb });
    return await getDependencyCount(query);
  } else {
    const softDeleteWithDependency = makeSoftDeleteWithDependency({ CommentDb });
    return await softDeleteWithDependency(query, dataToUpdate);
  }
};
module.exports = softDeleteComment;