app.directive("landingHero", function(){

    return {

        template : `
        
        <div class="container col-xxl-8 px-4 py-1 text-light">

            <div class="row flex-lg-row-reverse align-items-center g-3 py-3">
                <div class="col-10 col-sm-4 col-lg-6">
                    <img src="./app/images/dev-profile-img1modified.jpg" class="d-block mx-sm-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                </div>

                <div class="col-lg-6">

                    <h1 class="display-5 fw-bold lh-1 mb-3">Easy To Setup Portfolio Creator Tool For <font color="#5379F6">Devs</font></h1>
                    <p class="lead">
                        Devprofile helps you to quickly design and customize responsive mobile-first portfolio without writing 
                        any code at all, highlight your projects, showcase your skills and share your experience.
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-outline-light px-4">
                            Search Devs <i class="fa fa-search"></i>
                        </button>
                        <button type="button" class="btn btn-outline-light px-4">
                            Signup Now <i class="fa fa-user-circle-o"></i>
                        </button>
                        <button type="button" class="btn btn-outline-light px-4">
                            Login Now <i class="fa fa-sign-in"></i>
                        </button>
                    </div>

                </div>

            </div>

        </div>
        
        `

    }

})