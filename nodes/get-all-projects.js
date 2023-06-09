module.exports = function (RED) {
  var todoistQuery = require("../lib/todoist-query");
  function TodoistProjectGetAll(config) {
    RED.nodes.createNode(this, config);

    var node = this;

    var token = RED.nodes.getNode(config.token).credentials.token;

    node.on("input", function (msg) {
      var endpoint = "projects";
      var options = {
        token,
        endpoint,
        method: "GET"
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
  RED.nodes.registerType("todoist-project-get-all", TodoistProjectGetAll);
};