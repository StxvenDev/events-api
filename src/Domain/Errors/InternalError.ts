import { ERROR_MESSAGE } from "./Error.Message";

export class InternatError extends Error {
    constructor() {
        super(ERROR_MESSAGE.NOT_CREATED);
    }
}