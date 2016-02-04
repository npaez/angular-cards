angular.module('exampleApp', [
	'angular-cards'
])
.controller('exampleCtrl', function(){
	var vm = this;
	
	vm.showAlert = function() {
		alert('This is an alert!');
	}
});
