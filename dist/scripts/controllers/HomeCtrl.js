(function() {
     function HomeCtrl($scope,$firebaseArray) {
       this.heroTitle = "Turn the Music Up!";
			 
			 var ref = firebase.database().ref();
       var todos = $firebaseArray(ref);
			 
			 // Add an item
			 todos.$add({ foo: "bar" }).then(function(ref) {
         var id = ref.key();
         console.log("added record with id " + id);
         todos.$indexFor(id); // returns location in the array
       });	
			 
			 // Remove an item
			 todos.$remove(item).then(function(ref) {
         ref.key() === item.$id; // true
       });
			 
			 todos.$save().then(function(ref) {
				 ref.key === todos.$id; //true
			 });
			 // Make the list available in the DOM
			 $scope.todos = todos;
     }
 
     angular
         .module('blocitoff')
         .controller('HomeCtrl', ["$scope", "$firebaseArray", HomeCtrl]);
 })();