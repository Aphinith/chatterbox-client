// YOUR CODE HERE:
$(document).ready(function() { 
  $('#fetch').on('click', function(e) {
    e.preventDefault();
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
        var results = data.results;
        data: data;
        for (var i = 0; i < results.length; i++) {
          var message = {
            username: results[i].username,
            text: results[i].text,
            roomname: results[i].roomname
          }
          //create condition to see if message.text is a script
            //if it is not a script, run the the code
          var badScript = document.getElementsByTagName('script');
          // console.log(.getElementsByTagName('script'));

          if (message.text === badScript) {
            console.log('found it!')
          }
              console.log(message.text)
          $('#chats').append('<div>'+message.username+'</div>');
        }
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



