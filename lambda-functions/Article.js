var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB.DocumentClient();

exports.articleHandler = function(event, context) {

  AWS.config.update({
    region: "us-east-1",
  });

  var params = {
    TableName: 'WebsiteArticles',
    Key: {
      'ArticleID': Number(event.pathParameters.articleid)
    },
  };

  // Call DynamoDB to read the item from the table
  return ddb.get(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      var response = {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json",'Access-Control-Allow-Origin' : '*' },
        "body": JSON.stringify(data.Item),
        "isBase64Encoded": false
      }
      context.done(null, response);
    }
  });
}
