app.directive("dashboard", function(){

    return {

        template : `
        
        <div class="container text-light">

            <div class="clearfix pt-4">

                <span class="float-start">

                    <h1>Dashboard <i class="fa fa-home"></i></h1>

                </span>

                <span class="float-end">

                    <div class="dropdown">

                        <h1 data-bs-toggle="dropdown">
                            <i class="fa fa-cog"></i>
                        </h1>

                        <ul class="dropdown-menu">

                             <li><a class="dropdown-item" href="#!createDevProfileStepOne">
                                <i class="fa fa-plus-circle mx-2"></i>New Profile
                            </a></li>

                            <li><a class="dropdown-item">
                                <i class="fa fa-user-circle-o mx-2"></i>Account
                            </a></li>

                            <li><a class="dropdown-item">
                                <i class="fa fa-lock mx-2"></i>Security
                            </a></li>

                            <li><a class="dropdown-item">
                                <i class="fa fa-sign-out mx-2"></i>Logout
                            </a></li>

                        </ul>

                    </div>

                </span>

            </div>

            <hr>

            <div class="px-4 py-5 text-center text-light">

                <h2 class="display-5 fw-bold text-muted pb-2"> 
                    No Devprofile
                </h2>

                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="#!createDevProfileStepOne" style="text-decoration:none">
                        <button type="button" class="btn btn-outline-light btn-lg px-4 text-muted">
                            Create Devprofile <i class="fa fa-plus-circle"></i>
                        </button>
                    </a>
                </div>

            </div>

        </div>
        
        `

    }

});