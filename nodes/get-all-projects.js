module.exports = function (RED) {
  const runQuery = require('../lib/run-query');
  function TodoistProjectGetAll(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    const token = RED.nodes.getNode(config.token).credentials.token;

    node.on('input', function (msg) {
      const options = {
        token,
        endpoint: 'projects',
        method: 'GET'
      };
      return runQuery(node, options, msg);
    });
  }
  RED.nodes.registerType('todoist-project-get-all', TodoistProjectGetAll);
};
