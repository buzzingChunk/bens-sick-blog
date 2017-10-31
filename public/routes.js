scotchTodo.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home')

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'home.html'
        }
    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'about.html'
    }

    $stateProvider.state(homeState)
    $stateProvider.state(aboutState)
})