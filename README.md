# node-red-contrib-todoist-api

![npm](https://img.shields.io/npm/dm/@foxleigh81/node-red-contrib-todoist-api)

This is a node-red palette that allows you to interact with your [Todoist](https://todoist.com) account via the [Todoist REST API](https://developer.todoist.com/rest/v1/#overview)

## Install

You can install via the node-red palette manager or via npm:

```bash
npm i --unsafe-perm node-red-contrib-todoist-api
```
## Usage
### Configuration

To start using these nodes you will need to create a new configuration node, to do this, drag a node from the palette into the flow editor and double click it and add your Todoist API token to the 'select token' dropdown.

To get your todoist personal API token, follow the following list: https://todoist.com/app/settings/integrations

### Adding data

Each node interacts with the Todoist API and returns data in the form of a node-red flow. In order for it to work, you will need to pass the data to the the node via a payload. See the example below for a basic node that creates a new task in your Todoist project.

### Example flow

```json
[{"id":"cd167cf2edaf6512","type":"inject","z":"a42573365dced8a7","name":"'Create' Task Data","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"{\"content\":\"Test Task\",\"project_id\":2184202398,\"priority\":1}","payloadType":"json","x":410,"y":440,"wires":[["57872b84db271bd5"]]},{"id":"57872b84db271bd5","type":"todoist-task-create","z":"a42573365dced8a7","name":"","token":"59a4505979e26f0f","x":610,"y":440,"wires":[["a33919ea4e211f6f"]]},{"id":"a33919ea4e211f6f","type":"debug","z":"a42573365dced8a7","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":970,"y":680,"wires":[]},{"id":"59a4505979e26f0f","type":"add-token","name":"Todoist"}]
```

The payload data in the inject node is same data as the Todoist REST API create task item. [https://developer.todoist.com/rest/v8/#create-a-new-task](https://developer.todoist.com/rest/v8/#create-a-new-task).
## Nodes available

I created several nodes for common tasks such as:

- Create an individual task
- Get an individual task
- List all tasks (either in a project or on the entire account)
- Update an individual task
- Complete/uncomplete an individual task
- Delete an individual task

I also created a generic 'query' node that can be used to query any Todoist endpoint.

Here is a visual representation of the nodes available:

![all available nodes](https://raw.githubusercontent.com/foxleigh81/node-red-contrib-todoist-api/master/all-nodes.png)

## License

MIT License

## Support me

I made this with love and of course it is free for you to use and modify however you see fit, however if you would like to buy me a coffee to say thanks, I certainly won't complain :)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I3I21FRCN)
