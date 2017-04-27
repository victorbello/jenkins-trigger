## Slash Command app to trigger Jenkins builds

This small NodeJS app will allow you to receive a slash command from Slack to trigger a build in Jenkins with parameters. This one is configured to have multiple environments, but you are welcome to change it to match your setup.

### Jenkins Project Setup

You must parametize your project with a parameter called 'git_branch' for this to work.
![Project Parameter](https://raw.githubusercontent.com/derron/DataBinding-album-sample/master/app/src/main/res/mipmap-hdpi/ic_launcher.png)

You also need to install the [Build Authorization Token Root Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Build+Token+Root+Plugin)
![Project Parameter](https://raw.githubusercontent.com/derron/DataBinding-album-sample/master/app/src/main/res/mipmap-hdpi/ic_launcher.png)

Pick a random TOKEN for each environment, and replace those values on the "tokens" variable. 

### Slack Slash Command

Once everything is said and done, you create a slash command (/deploy) on Slack and install it on your team.
When configuring, the URL for the slash command will be this application /startJob

It will be triggered by typing:

```
/deploy [branch] to [environment]
```

For example:

```
/deploy FEATURE_BRANCH_A to DEV
```

