const CommentDb = require('../../../data-access/CommentDb');

const CommentSchema = require('../../../validation/schema/Comment');

const createValidation = require('../../../validation')(CommentSchema.createSchema);
const updateValidation = require('../../../validation')(CommentSchema.updateSchema);
const filterValidation = require('../../../validation')(CommentSchema.filterValidationSchema);
const addCommentUsecase = require('../../../use-case/Comment/addComment')({
  CommentDb,
  createValidation 
});
const findAllCommentUsecase = require('../../../use-case/Comment/findAllComment')({
  CommentDb,
  filterValidation
});
const getCommentCountUsecase = require('../../../use-case/Comment/getCommentCount')({
  CommentDb,
  filterValidation
});
const getCommentUsecase = require('../../../use-case/Comment/getComment')({
  CommentDb,
  filterValidation
});
const updateCommentUsecase = require('../../../use-case/Comment/updateComment')({
  CommentDb,
  updateValidation 
});
const partialUpdateCommentUsecase = require('../../../use-case/Comment/partialUpdateComment')({ CommentDb });
const softDeleteCommentUsecase = require('../../../use-case/Comment/softDeleteComment')({ CommentDb });
const softDeleteManyCommentUsecase = require('../../../use-case/Comment/softDeleteManyComment')({ CommentDb });
const bulkInsertCommentUsecase = require('../../../use-case/Comment/bulkInsertComment')({ CommentDb });
const bulkUpdateCommentUsecase = require('../../../use-case/Comment/bulkUpdateComment')({ CommentDb });
const deleteCommentUsecase = require('../../../use-case/Comment/deleteComment')({ CommentDb });
const deleteManyCommentUsecase = require('../../../use-case/Comment/deleteManyComment')({ CommentDb });

const CommentController = require('./Comment');

const addComment = CommentController.addComment(addCommentUsecase);
const findAllComment = CommentController.findAllComment(findAllCommentUsecase);
const getCommentCount = CommentController.getCommentCount(getCommentCountUsecase);
const getCommentById = CommentController.getComment(getCommentUsecase);
const updateComment = CommentController.updateComment(updateCommentUsecase);
const partialUpdateComment = CommentController.partialUpdateComment(partialUpdateCommentUsecase);
const softDeleteComment = CommentController.softDeleteComment(softDeleteCommentUsecase);
const softDeleteManyComment = CommentController.softDeleteManyComment(softDeleteManyCommentUsecase);
const bulkInsertComment = CommentController.bulkInsertComment(bulkInsertCommentUsecase);
const bulkUpdateComment = CommentController.bulkUpdateComment(bulkUpdateCommentUsecase);
const deleteComment = CommentController.deleteComment(deleteCommentUsecase);
const deleteManyComment = CommentController.deleteManyComment(deleteManyCommentUsecase);

module.exports = {
  addComment,
  findAllComment,
  getCommentCount,
  getCommentById,
  updateComment,
  partialUpdateComment,
  softDeleteComment,
  softDeleteManyComment,
  bulkInsertComment,
  bulkUpdateComment,
  deleteComment,
  deleteManyComment,
};