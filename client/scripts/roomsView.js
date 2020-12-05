var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    console.log('Children of Chats: ', $('#chats')[0].children);

    RoomsView.$select.change(() => {
      console.log('Current Room: ', RoomsView.$select[0].value);
      console.log([...$('#chats')[0].children].filter((elem) => elem.id === this.$select[0].value));
      // $('#chats')[0].children.filter((elem) => elem.id === this.$select[0].value);

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
