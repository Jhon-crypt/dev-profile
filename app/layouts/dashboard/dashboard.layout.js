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

                            <li><a class="dropdown-item" href="#!dashboard">
                                <i class="fa fa-home mx-2"></i>Dashboard
                            </a></li>

                            <li><a class="dropdown-item" href="#!createDevProfileStepOne">
                                <i class="fa fa-plus-circle mx-2"></i>New Profile
                            </a></li>

                            <li><a class="dropdown-item" href="#!account">
                                <i class="fa fa-user-circle-o mx-2"></i>Account
                            </a></li>

                            <li><a class="dropdown-item" href="#!account">
                                <i class="fa fa-sign-out mx-2"></i>Logout
                            </a></li>

                        </ul>

                    </div>

                </span>

            </div>

            <hr>

            <div class="px-4 py-5 text-light">

                <div class="row">

                    <div class="col mb-2">

                        <div class="card bg-dark" style="width:250px;">

                            <div class="card-body">

                                <div align="center">

                                    <img class="d-block mx-auto mb-4" src="./app/images/nftt.png"
                                    style="object-fit:cover;border:1px solid black;height:100px;border-radius:30px;width:100px;">

                                    <h4 class="display-9 fw-bold"> 
                                        <font color="#5379F6">I'm John Doe</font>
                                    </h4>

                                    <div class="mb-1">
                                        <span><small>Full Stack Developer</small></span>
                                    </div>

                                    <button class="btn btn-outline-light">
                                        <a class="text-light" href="#!devprofile" style="text-decoration:none;">
                                            View <i class="fa fa-external-link"></i>
                                        </a>
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                    <!-- end of column -->

                </div>
                <!-- end of grid row -->

                <!--  
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
                -->

            </div>

        </div>
        
        `

    }

});