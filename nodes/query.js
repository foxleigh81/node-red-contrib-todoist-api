module.exports = function (RED) {
  const runQuery = require('../lib/run-query');
  function buildQueryAPI(config) {
    RED.nodes.createNode(this, config);

    const node = this;

    const token = RED.nodes.getNode(config.token).credentials.token;

    node.on('input', function (msg) {
      const options = {
        token,
        endpoint: msg.payload.endpoint,
        method: msg.payload.method,
        data: msg.payload.data || {}
      };
      return runQuery(node, options, msg);
    });
  }
  RED.nodes.registerType('todoist-query-api', buildQueryAPI);
};
