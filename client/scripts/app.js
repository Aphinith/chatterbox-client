// YOUR CODE HERE:
var app = {
  init: function() {},

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

    //get access to the index.html file so we can append the div tag there


    console.log('addMessage executed');
    console.log('this is body:', $('body'))
    var $div = $('<div class="test"></div>');
    $('#chats').prepend($div);

  server: 'https://api.parse.com/1/classes/chatterbox'
}
};



