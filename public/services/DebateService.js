var myApp = angular.module('myApp');

myApp.service('DebateService', function(){

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
    if(debate.side == "For") {
      _debate.set("For", Parse.User.current());
    }
    else if(debate.side == "Against"){
      _debate.set("Against", Parse.User.current());
    }
    else {
      // TODO add some error message if received side is not Against or For. 
      console.log("ERROR - DebateService received a debate with side : " + debate.side);
    }

    // save this debate
    _debate.save(null, {
      //success and error callbacks
      success: function(_debate) {
        console.log('New debate created with objectId: ' + _debate.id);
      },
      error: function(_debate, error) {
        console.log(error.message);
      }
    })
  }

});