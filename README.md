# ThinkTank
An online debate portal built using AngularJS and Parse.

Hosted on Heroku : https://debate-portal.herokuapp.com/ 

-----------------------------------------------------------------------------------------------------------------------------------------
Development Process
* `node server.js` or `live-server public/` to launch web-app
* live-server : https://www.npmjs.com/package/live-server
* Feature branches are rebased into master and then pushed to heroku
  * `git checkout -b feature`
  * ...   
  * `git rebase -i master`
  * `git checkout master`
  * `git merge feature`
  * `git push heroku master`

-----------------------------------------------------------------------------------------------------------------------------------------
Utility functions have been created to improve debugging and testing process https://github.com/PinkShirtBoys/ThinkTank/wiki/Utility
