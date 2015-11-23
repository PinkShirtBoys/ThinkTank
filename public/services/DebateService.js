var myApp = angular.module('myApp');
myApp.service('DebateService', function(){

// get a debate by Id, called in DebateCtrl
this.getDebateById = function(id) {
  var Debate = Parse.Object.extend("Debate");
  var query = new Parse.Query(Debate);
  query.equalTo("objectId", id);
  return query.find().then(function(debate){
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
        console.log('New debate created with objectId: ' + _debate.id);
    });
    return this;
  }

});