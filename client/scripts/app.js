// YOUR CODE HERE:
$(document).ready(function() { 
  $('#fetch').on('click', function() {
    app.fetch();
    // console.log(message);
  });
  $('#send .submit').on('submit', function(e) {
    e.preventDefault();
    app.handleSubmit();
  })
});

var app = {

  init: function() {
  },

  send: function(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message');
      }
    });

  },

  fetch: function() {
    $.ajax({
      url: this.server,
      type: 'GET',
      contentType: 'application/json',
      // console.log(contentType)
      success: function (data) {
        data: data,
        console.log(data);
        console.log('chatterbox: Message recieved');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to recieve message');
      }
    });
  },

  clearMessages: function() {  
    $('#chats').empty();
  },
  
  addMessage: function(message) {
    $('#chats').prepend('<div class="username"></div>');
    $('.username').on('click', function() {
      app.addFriend();
    });
    console.log('hi outside click');
  },
  
  addRoom: function(room) {
    $('#roomSelect').prepend('<div>');
  },

  addFriend: function(friend) {
    // should be putting in '#main', each with a class of '.username'
  },

  handleSubmit: function() {
    console.log('handle submit got executed');
  },

  server: 'https://api.parse.com/1/classes/chatterbox'

};



