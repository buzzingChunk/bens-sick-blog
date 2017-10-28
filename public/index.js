let scotchTodo = angular.module('scotchTodo', ['ngRoute'])

function MainController($scope, $http){

    $scope.formData = {}

    $http.get('api/todos')
        .success((data) =>{
            $scope.todos = data
            console.log(data)
        })
        .error((data) =>{
            console.log('Error: ' + data)
        })
    
    $scope.createTodo = () =>{
        $http.post('/api/todos', $scope.formData)
            .success((data) =>{
                $scope.formData = {}
                $scope.todos = data
                console.log(data)
            })
            .error((data) =>{
                consol.elog('Error: ' + data)
            })
    }    
}
