
import mongoose from "mongoose";
import { IEvent } from "../../Domain/interfaces/Event.interfaces";

const eventSchema = new mongoose.Schema<IEvent>({
  id : {
    type : String,
    required : true
  },
  title : {
    type : String,
    require : true
  },
  Description : {
    type : String,
    require : true
  },
  Date : {
    type : Date,
    require : true
  },
  location : {
    type : String,
    require : true
  },
  Organizer : {
    type : String,
    require : true
  }
});

eventSchema.methods.toJSON = function () {
  const { __v,...event } = this.toObject();
  return event;
}

const Event = mongoose.model('Event', eventSchema);

export default Event; 