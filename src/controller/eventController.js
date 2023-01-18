const eventModel = require("../model/EventModel");
const { eventHandler } = require("../services/eventServices");
async function postDataAdmin(req, res) {
  let data = await eventHandler.PostData(req.body);
  if (!data) {
    res.status(404).json({ err: 1, message: "Please Provide Data" });
  } else {
    res.status(200).json(data);
  }
}
async function getDataevent(req, res) {
  let data = await eventHandler.getDataall();
  if (!data) {
    res.status(404).json({ err: 1, message: "Something is wrong with getting data" });
  } else {
    res.status(200).json(data);
  }
}

async function updateEvent(req, res) {
  let databody = req.body;
  let data = await eventHandler.updateEvent(req.params.id, databody);
  if (!data) {
    res.status(404).json({ err: 1, message: "data is not update" });
  } else {
    res.status(200).json(data);
  }
}

async function deleteEvent(req, res) {
  let data = await eventHandler.deleteEvent(req.params.id);
  if (!data) {
    res.status(404).json({ err: 1, message: "id is wrong" });
  } else {
    res.status(200).json(data);
  }
}
async function getById(req,res){
//   res.send(req.params.id)
    let data= await eventHandler.getbyid(req.params.id);
    if(!data){
        res.status(404).json({err:1,message:"Id is Wrong"})
    }
    else{
        res.status(200).json(data);
    }

}
module.exports = { postDataAdmin, getDataevent, updateEvent, deleteEvent,getById};
