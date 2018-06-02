exports.handler = (event, context, callback) => {
    // TODO implement
    context.succeed({
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            Hello: "Travis"
        })
    });
};