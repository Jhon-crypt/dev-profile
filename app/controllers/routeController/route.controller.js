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
    .when("/dashboard", {
        templateUrl : "./app/views/dashboardView/dashboard.view.html"
    })
    .when("/createDevProfileStepOne", {
        templateUrl : "./app/views/create-devprofileView/create-devprofile-step1.view.html"
    })
    .when("/createDevprofileStepTwo", {
        templateUrl : "./app/views/create-devprofileView/create-devprofile-step2.view.html"
    })
    .when("/addExperience", {
        templateUrl : "./app/views/create-devprofileView/add-experience.view.html"
    })
    .when("/addProjects", {
        templateUrl : "./app/views/create-devprofileView/add-projects.view.html"
    })
    .when("/addContact", {
        templateUrl : "./app/views/create-devprofileView/add-contact.view.html"
    })
    .when("/devprofile", {
        templateUrl : "./app/views/devprofileView/devprofile.view.html"
    })
    .when("/addAvatar", {
        templateUrl : "./app/views/add-avatarView/add-avatar.view.html"
    })

});