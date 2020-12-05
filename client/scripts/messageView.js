var MessageView = {

  render: _.template(`
      <div class="chat" id=<%- roomname %>>
        <div class="username"><%- username %>:</div>
        <div><%- text %></div>
      </div>
    `)

};
