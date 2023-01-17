const express = require("express");
const router = express.Router();
const {postDataAdmin,getDataevent,updateEvent,deleteEvent}=require('../controller/eventController')
router.post("/",postDataAdmin)
router.get("/api/getall",getDataevent)
router.put("/api/update/:id",updateEvent)
router.delete("/api/delete/:id",deleteEvent)
module.exports = router;