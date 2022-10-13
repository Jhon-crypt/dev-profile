app.directive("features", function(){

    return {
 
        template : `
        
        <div class="container pb-5 mb-4 text-light" ng-controller="featuresCtrl">

            <ul class="nav justify-content-center">

                <li class="nav-item" ng-repeat="x in contents">

                    <a class="nav-link text-light">

                        <div class="card bg-dark">

                            <img class="card-img-top" src="{{ x.image_route }}" height=300" width="500" loading="lazy">

                            <div class="card-body text-light">
                                <h3>{{ x.title }}</h3>
                            </div>

                        </div>
                    
                    </a>

                </li>

            </ul>

        </div>
        
        `

    }

});