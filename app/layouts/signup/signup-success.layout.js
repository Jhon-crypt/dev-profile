app.directive("signupSuccess", function(){

    return {

        template : `
        
        <div class="px-4 py-5 text-center text-light">

            <div class="py-5">

                <h1 class="display-5 fw-bold">Account Created <font color="#5379F6"><i class="fa fa-smile-o"></i></font></h1>

                <div class="col-lg-6 mx-auto">

                    <p class="fs-5 mb-4">
                        Login to get started with Devprofile.
                    </p>

                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href="#!login" style="text-decoration:none">
                        <button type="button" class="btn btn-outline-light btn-lg px-4">
                            <font color="#5379F6">Login Now</font>
                        </button>
                        </a>
                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});