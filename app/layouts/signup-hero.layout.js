app.directive("signupHero", function(){

    return {

        template: `
        
        <div class="px-4 pt-5 my-5 text-center text-light">

            <h1 class="display-4 fw-bold">Move Fast And<br> Break Things</h1>

            <div class="col-lg-6 mx-auto">

                <p class="lead mb-4">
                    Devprofile makes it simple to showcase amazing computing skills, awesome next big projects and suberb working experiences.
                </p>

                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">

                    <button type="button" class="btn btn-outline-light btn-lg px-4">
                        <font color="#5379F6">
                            Sign Up Now <i class="fa fa-user-circle-o"></i>
                        </font>
                    </button>

                </div>

            </div>

            <div class="overflow-hidden" style="max-height: 95vh;">

                <div class="container px-5">

                    <img src="app/images/mobile.png" class="img-fluid shadow-lg mb-4" alt="Example image" width="700" 
                    height="500" loading="lazy">
                </div>

            </div>

        </div>
        
        `

    }

});