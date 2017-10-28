scotchTodo.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/contacts", {
      templateUrl: "partials/index.jade",
      controller: "ContactsIndexCtrl" })
    .when("/contacts/new", {
      templateUrl: "partials/edit.jade",
      controller: "ContactsEditCtrl" })
    .when("/contacts/:id", {
      templateUrl: "partials/show.jade",
      controller: "ContactsShowCtrl" })
    .when("/contacts/:id/edit", {
      templateUrl: "partials/edit.jade",
      controller: "ContactsEditCtrl" })
    .otherwise({ redirectTo: "/contacts" });
}
]
);