var app = require('express')();
var http = require('http').Server(app);
var request = require('request');
const bodyParser = require('body-parser');
var tokens = {
    dev: 'YOUR_TOKEN_FOR_DEV',
    qa: 'YOUR_TOKEN_FOR_QA',
    staging: 'YOUR_TOKEN_FOR_STAGING'
};

var baseURL = 'http://YOUR_JENKINS_URL/buildByToken/buildWithParameters?job=[job]&token=[token]&git_branch=[branch]';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 3333));

app.post('/startJob', function(req, res) {
    var text = req.body.text.split(' ');
    var branch = text[0];
    var environment = text[2];
    var token = tokens[environment];
    for(var i = 0; i < regions.length; i++) {
        var region = regions[i];
        var urlToCall = baseURL
        .replace('[env]', environment)
        .replace('[token]', token)
        .replace('[region]', region)
        .replace('[branch]', branch);
        console.log(urlToCall);
        request({uri: urlToCall, method: 'POST'}, function(error, response, body){
            if(!error) {
                console.log('Triggered build for branch "' + branch + '" on ' + environment + ' environment.');
            }
            else {
                console.log('Error triggering build for branch "' + branch + '" on ' + environment + ' environment. Error: ' + error + '.');
            }
        });
    }
    res.send('Triggered build for branch "' + branch + '" on ' + environment + ' environment.');
});

http.listen(app.get('port'), function(){
  console.log('App is running on port', app.get('port'));
});
