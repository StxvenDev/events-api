export interface IEvent {
    id: string;
    title: string;
    Description: string;
    Date: Date;
    location:string;
    Organizer:string;
}

export interface IEventCreate extends Omit<IEvent, "id"> {}
// export interface IEventFound extends Partial<IEvent> {}