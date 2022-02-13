module.exports = function(RED) {
    function AddTokenNode(n) {
        RED.nodes.createNode(this,n);
        this.token = n.token;
    }
    RED.nodes.registerType("add-token",AddTokenNode, {
        credentials: {
            token: {type:"text"}
        }
    });
}