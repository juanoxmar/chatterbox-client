var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {

    const html = MessageView.render(message);
    MessagesView.$chats.append(html);

  }

};