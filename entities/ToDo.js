module.exports = (ToDo) => {

  let newToDo = { 
    name: ToDo.name,
    description: ToDo.description,
    date: ToDo.date,
    dueDate: ToDo.dueDate,
    isCompleted: ToDo.isCompleted,
    settings: ToDo.settings,
    isActive: ToDo.isActive,
    createdAt: ToDo.createdAt,
    updatedAt: ToDo.updatedAt,
    addedBy: ToDo.addedBy,
    updatedBy: ToDo.updatedBy,
    isDeleted: ToDo.isDeleted,
  };

  // remove undefined values
  Object.keys(newToDo).forEach(key => newToDo[key] === undefined && delete newToDo[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newToDo) => {
   *   if (!newToDo.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newToDo) 
   */

  return Object.freeze(newToDo);
};
