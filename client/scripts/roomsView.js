var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {


    console.log('Children of Chats: ', $('#chats')[0].children);

    // LOAD INITIAL ROOMS
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

      this.renderRoom();

    });

    RoomsView.$select.change(() => {
      console.log('Current Room: ', RoomsView.$select[0].value);
      console.log([...$('#chats')[0].children].filter((elem) => elem.id === this.$select[0].value));
      // $('#chats')[0].children.filter((elem) => elem.id === this.$select[0].value);

      $('#chats').empty();
      App.startSpinner();
      App.fetch(App.stopSpinner, RoomsView.$select[0].value);

    });

    RoomsView.$button.click(() => {
      const result = window.prompt('Room name?');



      this.$select.append(`<option>${result}</option>`);
    });

  },

  renderRoom: function() {
    for (const key in Rooms) {
      const html = `<option>${key}</option>`;
      this.$select.append(html);
    }
  },

};
