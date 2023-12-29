/**
 *addComment.js
 */

const  CommentEntity = require('../../entities/Comment');
const response = require('../../utils/response');
/**
 * @description : create new record of Comment in database.
 * @param {Object} dataToCreate : data for create new document.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of create. {status, message, data}
 */
const addComment = ({
  CommentDb,createValidation 
}) => async (dataToCreate,req,res) => {
  const validateRequest = await createValidation(dataToCreate);
  if (!validateRequest.isValid) {
    return response.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
  }
  let Comment = CommentEntity(dataToCreate);
  Comment = await CommentDb.create(Comment);
  return response.success({ data:Comment });
};
module.exports = addComment;