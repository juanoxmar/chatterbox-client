var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      //const rooms = [];

      /*
      messages have rooms attached to them
       we are going to iterate through results
       anytime we reach a room that is not located in our array, push it

      */
      const results = data.results.filter(({username, text, roomname}) => username !== undefined || text !== undefined || roomname !== undefined);

      for (let j = 0; j < results.length; j++) {
        console.log(results[j].roomname in Rooms);
        if (!(results[j].roomname in Rooms)) {
          Rooms[results[j].roomname] = 1;
        }
      }

      for (let i = 0; i < results.length; i++) {
        MessagesView.renderMessage(results[i]);

      }

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
