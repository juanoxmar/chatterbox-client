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
    App.fetch(App.stopSpinner, 'lobby');

  },

  fetch: function(callback = ()=>{}, room) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      const results1 = data.results.filter((elem) => 'username' in elem && 'roomname' in elem && 'text' in elem);

      const results = results1.filter(({username, roomname, text}) => username !== undefined || text !== undefined || roomname !== undefined || roomname !== null);

      const final = results.filter(({roomname}) => roomname === room);

      console.log(final);

      for (let i = 0; i < final.length; i++) {
        MessagesView.renderMessage(final[i]);
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
