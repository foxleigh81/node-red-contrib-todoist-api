module.exports = function(RED) {
    var todoistQuery = require('../../lib/todoist-query');
    function TodoistTaskCreate(config) {
        RED.nodes.createNode(this,config);

        var node = this;
        var token = config.token;

        node.on('input', function(msg) {

            node.status({fill:"red",shape:"dot",text:"Creating Task"});

            var data = msg.payload;
                      
            var options = {
                token,
                endpoint: 'tasks',
                method: 'POST',
                data
            };
            
            Promise.resolve(todoistQuery(options))
                .then(function(response) {
                    msg.payload = response;
                    msg.response = response;
                    node.send(msg);
                    node.status({});
                })
        });
    }
    RED.nodes.registerType("Todoist API - Create Task", TodoistTaskCreate);
}