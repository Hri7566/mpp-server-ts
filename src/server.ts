import { EventEmitter } from "events";

class Server {
    static events = new EventEmitter();

    static start() {
        this.hostWebFiles();
    }

    static hostWebFiles() {
        // TODO: express server
    }

    static startWSServer() {
        // TODO: WebSocket server
    }
}

export {
    Server
}
