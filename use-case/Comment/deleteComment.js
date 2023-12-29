
/**
 *deleteComment.js
 */
 
const makeGetDependencyCount = require('./deleteDependent').getDependencyCount;
const makeDeleteWithDependency = require('./deleteDependent').deleteWithDependency;
const response = require('../../utils/response');
    
/**
 * @description : delete record from database.
 * @param {Object} params : request body including query.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : deleted Comment. {status, message, data}
 */
const deleteComment = ({ CommentDb }) => async (params,req,res) => {
  let {
    query,isWarning 
  } = params;
  let deletedComment = {};
  if (isWarning) {
    const getDependencyCount = makeGetDependencyCount({ CommentDb });
    return await getDependencyCount(query);
  } else {
    const deleteWithDependency = makeDeleteWithDependency({ CommentDb });
    return await deleteWithDependency(query);
  }
};

module.exports = deleteComment;