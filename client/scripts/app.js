// YOUR CODE HERE:
var app = {
  init: function() {
    //watch the .userName name and if it is clicked, execute the this.addFriend method
    // console.log('hi outside of click handler');
    // $('.username').click(function() {
    //   if(this === '.username') {
    //     console.log('hi');
    //   }
    // })
  },

  send: function(message) {

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/chatterbox',
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
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
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

  clearMessages: function() {  
    $('#chats').empty();
  },
  
  addMessage: function(message) {
    $('#chats').prepend('<div class="username"></div>');
    $('.username').on('click', function() {
      app.addFriend();
    });
  },
  
  addRoom: function(room) {
    $('#roomSelect').prepend('<div>');
  },

  addFriend: function(friend) {
    // should be putting in '#main', each with a class of '.username'
  },

  server: 'https://api.parse.com/1/classes/chatterbox'
};



