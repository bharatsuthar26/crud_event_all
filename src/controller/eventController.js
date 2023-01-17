const eventModel=require('../model/EventModel')
const endOfDay = require('date-fns/endOfDay')
const startOfDay = require('date-fns/startOfDay')
function postDataAdmin(req,res){
    console.log(req.body)
    eventModel.create({
        ...req.body,
        startDate:startOfDay(new Date()),
        endDate:endOfDay(new Date())
    }).then(resa=>res.send(resa))
    .catch(err=>console.log(err))
}
async function getDataevent(req,res){
    let dataEvent= await eventModel.find()
    res.status(200).json(dataEvent)
}

async function updateEvent(req,res){
    let dataEvent = await eventModel.findById(req.params.id);

    if(!dataEvent) {
        res.status(404).send(`Event with id ${req.params.id} not found`);
        return;
    }

    const requestBody = req.body;
    
    try {
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, requestBody);
        res.send(updatedEvent); 
    }  catch(ex) {
        return res.status(400).send(ex.message);
    }
}

async function deleteEvent(req, res) {
    try {
        const dataEvent = await eventModel.findByIdAndDelete(req.params.id);
        if(!dataEvent) {
            res.send({"err":1,"msg":`Event with id ${req.params.id} not found`});
            return;
        }

        res.send({"err":0,"msg":"Event deleted"});   
    } catch(ex) {
        return res.send({"err":1,"msg":ex.message});
    }
}

module.exports={postDataAdmin,getDataevent,updateEvent,deleteEvent}