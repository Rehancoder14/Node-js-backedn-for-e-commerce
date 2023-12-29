const response = require('../../utils/response');

const getDependencyCount = ({ CommentDb })=> async (filter) =>{
  let Comment = await CommentDb.findMany(filter);
  if (Comment.length){
    let CommentIds = Comment.map((obj) => obj.id);

    const CommentFilter = { '$or': [{ parentItem : { '$in' : CommentIds } }] };
    const CommentCnt =  await CommentDb.count(CommentFilter);
    let result = { Comment :CommentCnt + 1, };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  Comment : 0 }
    });
  }
};

const deleteWithDependency = ({ CommentDb })=> async (filter) =>{
  let Comment = await CommentDb.findMany(filter);
  if (Comment.length){
    let CommentIds = Comment.map((obj) => obj.id);

    const CommentFilter = { '$or': [{ parentItem : { '$in' : CommentIds } }] };
    const CommentCnt =  (await CommentDb.deleteMany(CommentFilter));
    let deleted = (await CommentDb.deleteMany(filter));
    let result = { Comment :CommentCnt + deleted, };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Comment : 0 }
    });
  }
};

const softDeleteWithDependency = ({ CommentDb }) => async (filter,updateBody) =>{
  let Comment = await CommentDb.findMany(filter);
  if (Comment.length){
    let CommentIds = Comment.map((obj) => obj.id);

    const CommentFilter = { '$or': [{ parentItem : { '$in' : CommentIds } }] };
    const CommentCnt =  (await CommentDb.updateMany(CommentFilter,updateBody));
    let updated = (await CommentDb.updateMany(filter,updateBody));
    let result = { Comment :CommentCnt + updated, };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  Comment : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
