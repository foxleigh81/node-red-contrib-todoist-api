module.exports = function (RED) {
  const runQuery = require("../lib/run-query");
  function TodoistTaskReopen(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    const token = RED.nodes.getNode(config.token).credentials.token;

    node.on("input", function (msg) {
      const data = msg.payload;
      const options = {
        token,
        endpoint: `tasks/${data.id}/reopen`,
        method: "POST",
        data
      };
      return runQuery(node, options, msg);
    });
  }
  RED.nodes.registerType("todoist-task-reopen", TodoistTaskReopen);
};
