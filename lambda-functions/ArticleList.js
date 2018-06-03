var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context) {

  AWS.config.update({
    region: "us-east-1",
  });

  var params = {
    TableName: "WebsiteArticles"
  };

  // Call DynamoDB to read the item from the table
  return ddb.scan(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      var items = []
      items = items.concat(data.Items);
      // Return Latest Items First
      items.sort(function(item1, item2){return item2.ArticleID-item1.ArticleID});
      var response = {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json",'Access-Control-Allow-Origin' : '*' },
        "body": JSON.stringify(items),
        "isBase64Encoded": false
      }
      context.done(null, response);
    }
  });
}
