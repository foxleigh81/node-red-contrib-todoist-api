module.exports = function (RED) {
  const todoistQuery = require('../lib/todoist-query');
  function TodoistTaskDelete(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    const token = RED.nodes.getNode(config.token).credentials.token;

    node.on('input', function (msg) {
      const id = msg.payload.id;
      const options = {
        token,
        endpoint: `tasks/${id}`,
        method: 'DELETE'
      };
      todoistQuery(options)
        .then(function (response) {
          msg.payload = response;
          msg.response = response;
          node.send(msg);
          node.status({ fill: 'green', shape: 'dot', text: 'Success' });
        })
        .catch((error) => {
          msg.payload = error;
          msg.response = error;
          node.send(msg);
          node.status({ fill: 'red', shape: 'dot', text: 'API Error' });
        });
    });
  }
  RED.nodes.registerType('todoist-task-delete', TodoistTaskDelete);
};
