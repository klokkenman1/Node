import moment from "moment";

class ApiError {
    constructor(message, code, datetime) {
        this.message = message;
        this.code = code;
        this.datetime = datetime || moment().unix();
    }
}
