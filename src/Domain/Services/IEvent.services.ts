import { IEvent, IEventCreate } from "../interfaces/Event.interfaces";

export interface IEventServices {
  create: (Event: IEventCreate) => Promise<IEvent>;
  getAll: () => Promise<IEvent[]>;
  getById: (id: IEvent["id"]) => Promise<IEvent>;
  update: (id: IEvent["id"], Event: Partial<IEvent>) => Promise<IEvent>;
  delete: (id: IEvent["id"]) => Promise<IEvent>;
}
