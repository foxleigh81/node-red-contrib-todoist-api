module.exports = function (RED) {
  const runQuery = require("../lib/run-query");
  function TodoistTaskDelete(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    const token = RED.nodes.getNode(config.token).credentials.token;

    node.on("input", function (msg) {
      const id = msg.payload.id;
      const options = {
        token,
        endpoint: `tasks/${id}`,
        method: "DELETE"
      };
      return runQuery(node, options, msg);
    });
  }
  RED.nodes.registerType("todoist-task-delete", TodoistTaskDelete);
};
