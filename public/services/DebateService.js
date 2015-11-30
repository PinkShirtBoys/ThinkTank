var myApp = angular.module('myApp');
myApp.service('DebateService',function(){

var currentDebate = {};

this.getCurrentDebate = function() {
  console.log(currentDebate);
  return currentDebate;
}

this.currentUserHasVoted = function() {
    var voters = currentDebate.get('voters');
    if(voters) { // avoid the error if voters is empty
      for(i = 0; i < voters.length; i++) {
        if(voters[i].id == Parse.User.current().id) {
          return true;
        }
      }
      return false;
  }
}

// For or Against values
this.voteOnSide = function(side) {
  if(side == 'For') {
    currentDebate.set("forVoteCount", currentDebate.get('forVoteCount') + 1);
  }
  else if(side == 'Against') {
    currentDebate.set("againstVoteCount", currentDebate.get('againstVoteCount') + 1);
  }
  else {
    console.log("ERROR -- trying to vote on debate : " + debate.id + " that has side : " + side);
  }
  currentDebate.addUnique("voters",Parse.User.current());
  return currentDebate.save({}).then(
    function(debate) {
      console.log("Saved debate " + currentDebate.id);
      return currentDebate;
    },
    function(error){
      console.log('error.message');
    });
    return this;
}

// add current user to the debate
// current user will be set to For or Against
// assumes that UI will not let a current debator click the join button
this.joinDebate = function() {  
  console.log(currentDebate);
  var forUser = currentDebate.get("For");
  var againstUser = currentDebate.get("Against");

  if(typeof forUser === 'undefined'){
    currentDebate.set("For",Parse.User.current());
    console.log("set current user as FOR");
  }
  else if(typeof againstUser === 'undefined') {
    currentDebate.set("Against",Parse.User.current());
    console.log("set current user as Against");
  }
  else {
    console.log("ERROR -- debate : " + debate.id + " has a defined for and againstUser, but a user was still able to click the debate button");
  }
  return currentDebate.save({}).then(
    function(debate){
      console.log("Saved debate " + currentDebate.id);
      return currentDebate;
    },
    function(error){
      console.log('error.message');
    });
    return this;
}

// posts argument to current debate
// could be moved to ArgumentService
this.postArgument = function(argument) {
  // should be in an Argument service
  var Argument = Parse.Object.extend("Argument");
  var _argument = new Argument();
  _argument.set("title", argument.title);
  _argument.set("discussion", argument.discussion);
  // sources should be an array, but for now is a String in Parse
  _argument.set("sources", argument.sources);

      // save this argument as a promise
  return _argument.save({}).then(
    function(object) {
      console.log('New argument created with objectId: ' + _argument.id);
      // The argument is created, now we need to add it to forArgs or againstArgs
      // If the current user has the For side on the debate, then we add this argument
      // to forArgs, etc
      // The For or Against user of a Debate will be undefined on the first round,
      // so we need to check if they are null before accessing its id
      var forUser = currentDebate.get("For");
      var againstUser = currentDebate.get("Against");
      // forUser exists, check if forUser is current User
      if(typeof forUser !== 'undefined' &&  Parse.User.current().id == forUser.id){
          currentDebate.add("forArgs",_argument);
          currentDebate.set("turn", "Against");
          currentDebate.save();
          console.log("added to forArgs and set turn to Against");
      }
      // againstUser exists, check if againstUser is current User
      else if (typeof againstUser !== 'undefined' && Parse.User.current().id == againstUser.id) {
        currentDebate.add("againstArgs",_argument);
        currentDebate.set("turn", "For");
        currentDebate.save();
        console.log("added to againstArgs and set turn to For");
      }

      else {
        console.log("ERROR -- current debate : " + currentDebate.id 
          +" has For and Against users undefined");
      }
      return _argument;
    },
    function(error) {
      console.log(error.message);
  });
  return this;
}

// get a debate by Id, called in DebateCtrl
this.getDebateById = function(id) {
  var Debate = Parse.Object.extend("Debate");
  var query = new Parse.Query(Debate);
  query.equalTo("objectId", id);
  return query.find().then(function(debate){
    currentDebate = debate[0];
    return debate[0];
  });
  return this;
}

// gets all debates
this.getDebates = function() {
    // extend Debate class
    var Debate = Parse.Object.extend("Debate");
    // create a new query to get all Debate objects
    var query = new Parse.Query(Debate);

    // TODO: create an error callback? 
    // gets all debates. May need to have a query.limit() set in future
    return query.find().then(function(debates){
      var array = [];
      debates.forEach(function(debate){
        array.push({
          title : debate.get("title"),
          url : "#/Debate/" + debate.id
        })
      });
      return array;
      // return debates;
    });
    return this;
  }
  
// creates a debate with debate model from CreateDebateDialogCtrl
this.createDebate = function(debate) {
  // extend Debate class
  var Debate = Parse.Object.extend("Debate");
  // Initialize a new Debate object and assign all relevant fields
  var _debate = new Debate();
  _debate.set("title", debate.title);
  _debate.set("description", debate.description);
  _debate.set("createdBy", Parse.User.current());
  // set vote counts to 0 because Parse sets them to undefined by default
  _debate.set("forVoteCount",0);
  _debate.set("againstVoteCount",0);
  // assign current user to appropriate side of the debate
  // the turn will be the side of current user because he will
  // be the one to make the first argument in the debate
  if(debate.side == "For") {
    _debate.set("For", Parse.User.current());
    _debate.set("turn", "For");
  }
  else if(debate.side == "Against"){
    _debate.set("Against", Parse.User.current());
    _debate.set("turn", "Against");
  }
  else {
    // TODO add some error message if received side is not Against or For. 
    console.log("ERROR - DebateService received a debate with side : " + debate.side);
  }

  // save this debate as a promise
  return _debate.save({}).then(
    function(object) {
      // the object was saved.
      console.log('New debate created with objectId: ' + _debate.id);
      return _debate;
    },
    function(error) {
      // saving the object failed.
      console.log('error.message');
  });
  return this;
} 

});