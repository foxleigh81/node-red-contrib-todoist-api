# node-red-contrib-todoist-api

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

```js
[
    {
        "id": "b28f2d309e78ecbe",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "98f370107919b2bd",
        "type": "inject",
        "z": "b28f2d309e78ecbe",
        "name": "'Create' Task Data",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"content\":\"Test Task\",\"project_id\":2203306141,\"priority\":1}",
        "payloadType": "json",
        "x": 410,
        "y": 440,
        "wires": [
            [
                "88532fdecad16910"
            ]
        ]
    },
    {
        "id": "ec9df2135175608a",
        "type": "debug",
        "z": "b28f2d309e78ecbe",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 790,
        "y": 440,
        "wires": []
    },
    {
        "id": "88532fdecad16910",
        "type": "todoist-task-create",
        "z": "b28f2d309e78ecbe",
        "name": "",
        "token": "59a4505979e26f0f",
        "x": 610,
        "y": 440,
        "wires": [
            [
                "ec9df2135175608a"
            ]
        ]
    },
    {
        "id": "59a4505979e26f0f",
        "type": "add-token",
        "name": "Todoist"
    }
]
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
## License

MIT License
