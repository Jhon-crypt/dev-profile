app.directive("addAvatar", function(){

    return {

        template : `
        
        <div class="container text-light">

            <div class="clearfix pt-4">

                <span class="float-start">

                    <h1>Create Devprofile <i class="fa fa-plus-circle"></i></h1>

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

            <div class="container">

                <div class="pt-4 mx-auto" style="width:320px;">

                    <div class="clearfix">

                        <span class="float-start">

                            <button class="w-100 btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#avatarModal">
                                Add avatar <i class="fa fa-user-circle-o"></i>
                            </button>

                        </span>

                        <span class="float-end">

                            <a href="#!devprofile" style="text-decoration:none;">
                                <button class="w-100 btn btn-outline-light" type="submit">
                                    Skip Avatar <i class="fa fa-arrow-circle-right"></i>
                                </button>
                            </a>

                        </span>

                    </div>

                </div>

                <div class="mt-4 pt-4 mb-4">

                    <div align="center">

                    <div class="card bg-dark">

                        <div class="card-body">

                                <img class="d-block mx-auto mb-4" src="./app/images/nftt.png"
                                style="object-fit:cover;border:1px solid black;height:200px;border-radius:100px;width:200px;">

                                <a href="#!devprofile" style="text-decoration:none;">
                                    <button class="w-50 btn btn-lg btn-outline-light mb-5">
                                        <font color="#5379F6">
                                            Finish <i class="fa fa-user-circle-o"></i>
                                        </font>
                                    </button>
                                </a>

                
                        </div>

                    </div>

                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});