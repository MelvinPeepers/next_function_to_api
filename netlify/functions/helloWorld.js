exports.handler = async function(event, context) {
    console.log("Invoked with: ", event);
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World!!!"})
    }
}