var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {

    for (const value of data) {
      const html = MessageView.render(value);
      MessagesView.$chats.append(html);
    }

  }

};