const {Router} = require("express");
const { getToDos, saveToDos, updateToDo, deleteTODo } = require("../controller/ToDoController");

const router =Router();

router.get("/get",getToDos);
router.post("/save" ,saveToDos);
router.put("/update/:id" ,updateToDo);
router.delete("/delete/:id", deleteTODo );

module.exports =router;
