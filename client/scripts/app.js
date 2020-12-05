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

      const results1 = data.results.filter((elem) => 'username' in elem && 'roomname' in elem && 'text' in elem);

      const results = results1.filter(({username, roomname, text}) => username !== undefined || text !== undefined || roomname !== undefined || roomname !== null);

      for (let j = 0; j < results.length; j++) {
        if (!(results[j].roomname in Rooms)) {
          Rooms[results[j].roomname] = 1;
        }
      }

      for (let i = 0; i < results.length; i++) {
        MessagesView.renderMessage(results[i]);
      }

      RoomsView.renderRoom();

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
