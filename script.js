const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

$(function () {
    var socket = io();
  
    $('#send-btn').click(function() {
      var message = $('#input').val();
      if (message.trim() !== '') {
        socket.emit('chat message', message); // Send the message to the server
        $('#input').val('');
      }
    });
  
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
      // Scroll to the latest message
      $('.chat-messages').scrollTop($('.chat-messages')[0].scrollHeight);
    });
  });
  