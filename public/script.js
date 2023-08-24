$(function () {
  var socket = io();

  $('#send-btn').click(function () {
    var message = $('#input').val();
    if (message.trim() !== '') {
      message = message.replace(/\bhey\b/gi, '👋');
      message = message.replace(/\bwoah\b/gi, '😮');
      message = message.replace(/\breact\b/gi, '*');
      message = message.replace(/\blike\b/gi, '❤️');
      message = message.replace(/\bcongratulations\b/gi, '🎉');
      socket.emit('chat message', message); // Send the message to the server
      $('#input').val('');
    }
  });

  socket.on('chat message', function (msg) {

    $('#messages').append($('<li>').text(msg));
    // Scroll to the latest message
    $('.chat-messages').scrollTop($('.chat-messages')[0].scrollHeight);
  });
});



