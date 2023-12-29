/**
 *partialUpdateComment.js
 */

const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Comment. {status, message, data}
 */
const partialUpdateComment = ({ CommentDb }) => async (params,req,res) => {
  const comment = await CommentDb.updateOne(params.query,params.dataToUpdate);
  if (!comment){
    return response.recordNotFound();
  }
  return response.success({ data:comment });
};
module.exports = partialUpdateComment;