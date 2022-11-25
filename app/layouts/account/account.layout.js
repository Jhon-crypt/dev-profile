app.directive("account", function(){

    return {

        template : `
        
        <div class="container text-light">

            <div class="clearfix pt-4">

                <span class="float-start">

                    <h1>Account <i class="fa fa-user-circle-o"></i></h1>

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

            <div class="px-4 py-5 text-light">

                <div class="mb-5">

                    <ul class="nav flex-column justify-content-center">

                        <li class="nav-item" style="text-decoration:none;">

                            <a class="nav-link">

                                <div align="center">
                                    <i class="fa fa-user-secret" style="font-size:100px;"></i>
                                </div>

                            </a>

                        </li>

                        <li class="nav-item text-center" style="text-decoration:none;">

                            <a class="nav-link text-light">

                                <h2 class="display-5 fw-bold"> 
                                    <font color="#5379F6">@Coding_wizard</font>
                                </h2>

                            </a>

                        </li>

                    </ul>

                </div>

                <ul class="nav justify-content-center">

                    <li class="nav-item">

                        <a class="nav-link text-light" style="text-decoration:none;">

                            <div class="card bg-dark" style="width:200px;">

                                <div class="card-body">

                                    <div align="center">

                                        <i class="fa fa-edit mb-1" style="font-size:60px;"></i>

                                        <h4>Edit account</h4>

                                    </div>

                                </div>

                            </div>

                        </a>

                    </li>

                    <li class="nav-item">

                        <a class="nav-link text-light" style="text-decoration:none;">

                            <div class="card bg-dark" style="width:200px;">

                                <div class="card-body">

                                    <div align="center">

                                        <i class="fa fa-lock mb-1" style="font-size:60px;"></i>

                                        <h4>Secure account</h4>

                                    </div>

                                </div>

                            </div>

                        </a>

                    </li>


                </ul>

            </div>
        
        `

    }

});