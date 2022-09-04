const grpc = require('grpc')
const notesProto = grpc.load('notes.proto')
const server = new grpc.Server()
server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051')
server.start()