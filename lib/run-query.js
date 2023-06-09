module.exports = function runQuery(node, options, msg) {
  const todoistQuery = require("./build-query");

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
};
