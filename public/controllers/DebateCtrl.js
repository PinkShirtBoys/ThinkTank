var myApp = angular.module('myApp');
myApp.controller('DebateCtrl',[ function(){
	
	//TODO : debateModel should be populated by Parse

	// TODO : A more concrete Debate Model
	// Debate model will need to have awareness of round

	// Current debate model holds against arg and for arg
	this.debateModel = {
		title : "Debate Title",
		againstArg : {
			title : 'Argument Title [AGAINST]',
			discussion : 'Argument discussion [AGAINST]'
		},
		forArg : {
			title : 'Argument Title [FOR]',
			discussion : 'Argument discussion [FOR]'
		}
	}

}]);