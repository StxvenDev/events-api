import { InternatError } from "../Domain/Errors/InternalError";
import { NotCreatedError } from "../Domain/Errors/NotCreatedError";
import { NotFoundError } from "../Domain/Errors/NotFoundError";
import { IEvent,IEventCreate } from "../Domain/interfaces/Event.interfaces";
import { IEventServices } from "../Domain/Services/IEvent.services";

export class Event {

    constructor(
        private readonly EventServ:IEventServices
    ){}

    async CreateNewEvent(event:IEventCreate){
        try {
            const newEvent = await this.EventServ.create(event)
            return newEvent
        } catch (error) {
            throw new NotCreatedError()
        }
    }

    async getAllEvent(){
        try {
            const allEvent = await this.EventServ.getAll()
            return allEvent
        } catch (error) {
            throw new NotFoundError()
        }
    }
    async getByIdEvent(id:string):Promise<IEvent>{
        try {
            const getEventById = await this.EventServ.getById(id)
            return getEventById
        } catch (error) {
            throw new NotFoundError()
        }
    }
    async updateEvent(id:string,event:Partial<IEvent>):Promise<IEvent>{
        try {
            const Event = await this.getByIdEvent(id) 
            if(!Event) throw new NotFoundError()
            
           const eventUpdated = await this.EventServ.update(id,event)
            return eventUpdated
        } catch (error) {
            throw new InternatError()
        }
    }
    async DeleteEvent(id:string):Promise<boolean>{
        try {
            const Event = await this.getByIdEvent(id) 
            if(!Event) throw new NotFoundError()
            
           const eventDeleted = await this.EventServ.delete(id)
            return true
        } catch (error) {
            throw new InternatError()
        }
    }



}