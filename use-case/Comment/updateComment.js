/**
 *updateComment.js
 */

const  CommentEntity = require('../../entities/Comment');
const response = require('../../utils/response');

/**
 * @description : update record with data by id.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : updated Comment. {status, message, data}
 */
const updateComment = ({
  CommentDb, updateValidation
}) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const validateRequest = await updateValidation(dataToUpdate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let comment = CommentEntity(dataToUpdate);
  comment = await CommentDb.updateOne(query,comment);
  if (!comment){
    return response.recordNotFound();
  }
  return response.success({ data:comment });
};
module.exports = updateComment;