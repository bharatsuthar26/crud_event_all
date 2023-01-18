const express = require("express");
const router = express.Router();
const {postDataAdmin,getDataevent,updateEvent,deleteEvent,getById}=require('../controller/eventController')
router.post("/",postDataAdmin)
router.get("/api/getall",getDataevent)
router.put("/api/update/:id",updateEvent)
router.delete("/api/delete/:id",deleteEvent)
router.get("/api/getbyid/:id",getById)
module.exports = router;