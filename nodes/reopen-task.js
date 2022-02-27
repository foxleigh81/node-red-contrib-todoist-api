module.exports = function (RED) {
  var todoistQuery = require("../lib/todoist-query");
  function TodoistTaskReopen(config) {
    RED.nodes.createNode(this, config);

    var node = this;

    var token = RED.nodes.getNode(config.token).credentials.token;

    node.on("input", function (msg) {
      var data = msg.payload;
      var options = {
        token,
        endpoint: `tasks/${data.id}/reopen`,
        method: "POST",
        data
      };
      todoistQuery(options)
        .then(function (response) {
          msg.payload = response;
          msg.response = response;
          node.send(msg);
          node.status({ fill: "green", shape: "dot", text: "Success" });
        })
        .catch((error) => {
          msg.payload = error;
          msg.response = error;
          node.send(msg);
          node.status({ fill: "red", shape: "dot", text: "API Error" });
        });
    });
  }
  RED.nodes.registerType("todoist-task-reopen", TodoistTaskReopen);
};
