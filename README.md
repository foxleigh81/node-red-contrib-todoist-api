# node-red-contrib-todoist

The Node node-red-contrib-todoist creates task items using Todoist REST API.

This is simple node for Todoist.

## Install

Move your Node-RED user directory ~/.node-red

```
npm i --unsafe-perm node-red-contrib-todoist
```

## Usage

### Requires Todoist token

Using this node reqires Todoist personal API token or OAuth API token.

About [Todoist personal API token or OAuth API token.](https://developer.todoist.com/rest/v8/#authorization)

### Todoist task item create node

Sample flow:

```js
[{"id":"f1ff6ea6.2d084","type":"inject","z":"d3d7f120.bc949","name":"","topic":"","payload":"{\"content\":\"Appointment with Maria\",\"due_string\":\"tomorrow at 12:00\",\"due_lang\":\"en\",\"priority\":4}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":410,"y":560,"wires":[["2cc6e790.eede18"]]},{"id":"70d61dc1.444ba4","type":"debug","z":"d3d7f120.bc949","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":770,"y":560,"wires":[]},{"id":"2cc6e790.eede18","type":"todoist-task-create","z":"d3d7f120.bc949","name":"","x":590,"y":560,"wires":[["70d61dc1.444ba4"]]}]
```

This inject node data is same data as Todoist REST API create task item. [https://developer.todoist.com/rest/v8/#create-a-new-task](https://developer.todoist.com/rest/v8/#create-a-new-task).

![image.png (7.5 kB)](https://img.esa.io/uploads/production/attachments/3062/2019/04/17/8131/e1a772cd-e40c-4022-9fc6-50c8a1e8359c.png)

This flow create a new Todoist task item when this inject node is clicked.

![image.png (92.8 kB)](https://img.esa.io/uploads/production/attachments/3062/2019/04/17/8131/c87050cc-ef6e-40da-87e8-5ccab9db8d95.png)

## License

MIT License