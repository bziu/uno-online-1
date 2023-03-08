class Server {
    socket;
    
    constructor(server) {
        this.socket =  io(server, { transports: ['websocket', 'polling', 'flashsocket'] });
        this.listen();
    }
    
    listen() {
        return new ServerListen(this.socket)
    };

    

}

const server = new Server('ws://localhost:3000');