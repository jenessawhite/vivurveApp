var express = require('express');
var Pusher = require('pusher');
var app = express();

app.set('port', (process.env.PORT || 5000));

const pusher = new Pusher({
   appId: '290244',
   key:    '78fbf2314b05eac7feea',
   secret: '909d37bbb2b59d01ef1d'
})

app.get('/chat/:chat', function(req,res){
  const chat_data = JSON.parse(req.params.chat);
  pusher.trigger('chat_channel', 'new-message', {chat:chat_data});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
