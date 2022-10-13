<!doctype html>

    <html lang="en">

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description" content="">
            <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
            <meta name="generator" content="Hugo 0.84.0">
            <title>Devprofile</title>

            <!-- custom CSS -->
            <link href="index.css" rel="stylesheet">

            <!-- Bootstrap core CSS -->
            <link href="./app/assets/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

            <link rel="stylesheet" href="./app/assets/font-awesome/css/font-awesome.min.css">

            <link rel="stylesheet" href="./app/assets/angular-loading-bar-master/angular-loading-bar-master/build/loading-bar.css" 
            type="text/css" media="all">

            <!-- JavaScript Bundle with Popper -->
            <script src="./app/assets/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

            <!-- angular Js -->
            <script src="./app/assets/angular-1.8.2/angular.min.js"></script>

            <script src="./app/assets/angular-1.8.2/angular-route.min.js"></script>

            <script src="./app/assets/angular-loading-bar-master/angular-loading-bar-master/build/loading-bar.min.js"></script>

        </head>

        <body ng-app="app" style="background-color:#010101;">

            <main>

                <header></header>

                <landing-hero></landing-hero>

                <features></features>

                <signup-hero></signup-hero>

                <footer></footer>

            </main>

            <script src="./app/modules/app.module.js"></script>

            <script src="./app/layouts/header.layout.js"></script>

            <script src="./app/layouts/landing-hero.layout.js"></script>

            <script src="./app/layouts/features.layout.js"></script>

            <script src="./app/controllers/features.controller.js"></script>

            <script src="./app/layouts/signup-hero.layout.js"></script>

            <script src="./app/layouts/footer.layout.js"></script>

        </body>

    </html>