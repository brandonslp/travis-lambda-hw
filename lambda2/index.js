let reponse = function(code, message) {
    return {
        "statusCode": code,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(message)
    };
};

exports.handler = (event, context, callback) => {
    // TODO implement
    context.succeed(reponse(200, {travis: "Second function!"}));
};