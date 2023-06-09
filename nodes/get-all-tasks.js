module.exports = function (RED) {
  const runQuery = require("../lib/run-query");
  function TodoistTaskGetAll(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    const token = RED.nodes.getNode(config.token).credentials.token;

    node.on("input", function (msg) {
      const project_id = msg.payload.project_id || null;
      const endpoint = project_id ? `tasks?project_id=${project_id}` : "tasks";
      const options = {
        token,
        endpoint,
        method: "GET"
      };
      return runQuery(node, options, msg);
    });
  }
  RED.nodes.registerType("todoist-task-get-all", TodoistTaskGetAll);
};
