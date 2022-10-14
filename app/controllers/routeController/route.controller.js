app.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl : "./app/views/signupView/signup.view.html"
    })
    .when("/login", {
        templateUrl : "./app/views/loginView/login.view.html"
    })
    .when("/signupSuccess", {
        templateUrl : "./app/views/signupView/signup-success.view.html"
    })

});