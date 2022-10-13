app.directive("features", function(){

    return {

        template : `
        
        <div class="container pb-5 mb-4 text-light" ng-controller="featuresCtrl">

            <ul class="nav justify-content-center">

                <li class="nav-item">

                    <a class="nav-link text-light">

                        <div class="card bg-dark">

                            <img class="card-img-top" src="app/images/feat.jpg" height=300" width="500" loading="lazy">

                            <div class="card-body text-light">
                                <h3>Highlight Projects</h3>
                            </div>

                        </div>
                    
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link text-light">

                        <div class="card bg-dark">

                            <img class="card-img-top" src="app/images/features2.jpg" height=300" width="500" loading="lazy">

                            <div class="card-body text-light">
                                <h3>Showcase Skills</h3>
                            </div>

                        </div>
                    
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link text-light">

                        <div class="card bg-dark">

                            <img class="card-img-top" src="app/images/features3.jpg" height=300" width="500" loading="lazy">

                            <div class="card-body text-light">
                                <h3>Share Experience</h3>
                            </div>

                        </div>
                    
                    </a>

                </li>

            </ul>

        </div>
        
        `

    }

});