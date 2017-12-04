let scotchTodo = angular.module('scotchTodo', ['ui.router'])

scotchTodo.controller('MainController',  function($scope, $http) {


    $scope.formData = {}
    
            $http.get('api/todos').then(function(response){
                $scope.todos = response.data
                console.log(response.data)
            })
        
        $scope.createTodo = () =>{
            $http.post('/api/todos', $scope.formData).then(function(response){
                $scope.formData = {}
                $scope.todos = response.data
                console.log(data)
            })
        }    
  } );




scotchTodo.directive('navbar', function() {
    return {
        templateUrl : 'nav.html'
    }
})


  