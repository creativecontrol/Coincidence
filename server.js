var io = require('socket.io').listen(8000);

// open the socket connection
io.sockets.on('connection', function (socket) {
   
   // listen for the chat even. and will recieve
   // data from the sender.
   socket.on('trig', function (data) {
      io.sockets.emit('trig', data);
      
   });

   socket.on('sync', function (data) {
      io.sockets.emit('sync', data);
      
   });

});
