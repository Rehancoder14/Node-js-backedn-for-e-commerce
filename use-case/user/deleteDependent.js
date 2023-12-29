const response = require('../../utils/response');

const getDependencyCount = ({
  userDb,CommentDb,ToDoDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  await CommentDb.count(CommentFilter);

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  await ToDoDb.count(ToDoFilter);

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  await userDb.count(userFilter);

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  await userTokensDb.count(userTokensFilter);

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  await roleDb.count(roleFilter);

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  await projectRouteDb.count(projectRouteFilter);

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  await routeRoleDb.count(routeRoleFilter);

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  await userRoleDb.count(userRoleFilter);
    let result = {
      Comment :CommentCnt ,
      ToDo :ToDoCnt ,
      user :userCnt + 1,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  user : 0 }
    });
  }
};

const deleteWithDependency = ({
  userDb,CommentDb,ToDoDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
})=> async (filter) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  (await CommentDb.deleteMany(CommentFilter));

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.deleteMany(ToDoFilter));

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.deleteMany(userFilter));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.deleteMany(userTokensFilter));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.deleteMany(roleFilter));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.deleteMany(projectRouteFilter));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.deleteMany(routeRoleFilter));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.deleteMany(userRoleFilter));
    let deleted = (await userDb.deleteMany(filter));
    let result = {
      Comment :CommentCnt ,
      ToDo :ToDoCnt ,
      user :userCnt + deleted,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  userDb,CommentDb,ToDoDb,userTokensDb,roleDb,projectRouteDb,routeRoleDb,userRoleDb
}) => async (filter,updateBody) =>{
  let user = await userDb.findMany(filter);
  if (user.length){
    let userIds = user.map((obj) => obj.id);

    const CommentFilter = { '$or': [{ updatedBy : { '$in' : userIds } },{ addedBy : { '$in' : userIds } }] };
    const CommentCnt =  (await CommentDb.updateMany(CommentFilter,updateBody));

    const ToDoFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const ToDoCnt =  (await ToDoDb.updateMany(ToDoFilter,updateBody));

    const userFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userCnt =  (await userDb.updateMany(userFilter,updateBody));

    const userTokensFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userTokensCnt =  (await userTokensDb.updateMany(userTokensFilter,updateBody));

    const roleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const roleCnt =  (await roleDb.updateMany(roleFilter,updateBody));

    const projectRouteFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const projectRouteCnt =  (await projectRouteDb.updateMany(projectRouteFilter,updateBody));

    const routeRoleFilter = { '$or': [{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const routeRoleCnt =  (await routeRoleDb.updateMany(routeRoleFilter,updateBody));

    const userRoleFilter = { '$or': [{ userId : { '$in' : userIds } },{ addedBy : { '$in' : userIds } },{ updatedBy : { '$in' : userIds } }] };
    const userRoleCnt =  (await userRoleDb.updateMany(userRoleFilter,updateBody));
    let updated = (await userDb.updateMany(filter,updateBody));
    let result = {
      Comment :CommentCnt ,
      ToDo :ToDoCnt ,
      user :userCnt + updated,
      userTokens :userTokensCnt ,
      role :roleCnt ,
      projectRoute :projectRouteCnt ,
      routeRole :routeRoleCnt ,
      userRole :userRoleCnt ,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  user : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
