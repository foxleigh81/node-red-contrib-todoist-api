var request = require('request');

module.exports = function(RED) {
    function TodoistTaskCreate(config) {
        
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            var _data = msg.payload;
            var _currentDate = new Date();
            var _token = this.credentials.todoisttoken;
            var _x_request_id = _currentDate.getTime() * 1000 + Math.random() * 1000;

            var headers = {
                'Content-Type':'application/json',
                'X-Request-Id': _x_request_id,
                'Authorization':'Bearer ' + _token
            }

            var options = {
                uri: 'https://api.todoist.com/rest/v1/tasks',
                headers: headers,
                json: _data
            }

            request.post(options, function (error, response, body) {
                msg.payload = body;
                msg.response = response;
                node.send(msg);
            })

            
        });
    }
    RED.nodes.registerType("todoist-task-create",TodoistTaskCreate,{
        credentials: {
            todoisttoken: {type:"text"}
        }
    });
}