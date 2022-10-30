app.directive("addProjects", function(){

    return{

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

                            <button class="w-100 btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#projectModal">
                                Add Projects <i class="fa fa-suitcase"></i>
                            </button>

                        </span>

                        <span class="float-end">

                            <a href="#!addContact" style="text-decoration:none;">
                                <button class="w-100 btn btn-outline-light" type="submit">
                                    Skip Projects <i class="fa fa-arrow-circle-right"></i>
                                </button>
                            </a>

                        </span>

                    </div>

                </div>

                <div class="mt-4 pt-4 mb-4">

                    <div class="row">

                        <div class="col mb-3">

                            
                                <div class="card card-cover h-40 overflow-hidden text-white bg-dark rounded-5 shadow-lg mb-3" 
                                style="background-image: url('./app/images/phoneshopz.png');">
                                    <div class="d-flex flex-column h-40 p-5 pb-3 text-white text-shadow-1" 
                                    style="font-weight:bold;border:0px solid;background-color:rgb(0,0,0);
                                    background-color: rgba(0,0,0,0.6);">

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-suitcase"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Phoneshopz</h2>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-align-left"></i></h2>
                                            </div>
                                            <div>
                                                <h2>About</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a quia nulla 
                                                eaque!</p>
                                            </div>
                                        </div>

                                        <ul class="d-flex list-unstyled mt-auto">
                                            <li class="me-auto">
                                                <button class="btn btn-outline-light btn-sm">
                                                    View <i class="fa fa-external-link"></i>
                                                </button>
                                            </li>
                                            <li class="d-flex align-items-center me-3">
                                                <button class="btn btn-outline-light btn-sm">
                                                    Code <i class="fa fa-github"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            

                        </div>

                        <div class="col mb-3">

                                <div class="card card-cover h-40 overflow-hidden text-white bg-dark rounded-5 shadow-lg mb-3" 
                                style="background-image: url('./app/images/www.edtech-classroom.epizy.com_dashboard_lecturer-dashboard_.png');">
                                    <div class="d-flex flex-column h-40 p-5 pb-3 text-white text-shadow-1" 
                                    style="font-weight:bold;border:0px solid;background-color:rgb(0,0,0);
                                    background-color: rgba(0,0,0,0.6);">

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-suitcase"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Edtech Class</h2>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-align-left"></i></h2>
                                            </div>
                                            <div>
                                                <h2>About</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a quia nulla 
                                                eaque!</p>
                                            </div>
                                        </div>

                                        <ul class="d-flex list-unstyled mt-auto">
                                            <li class="me-auto">
                                                <button class="btn btn-outline-light btn-sm">
                                                    View <i class="fa fa-external-link"></i>
                                                </button>
                                            </li>
                                            <li class="d-flex align-items-center me-3">
                                                <button class="btn btn-outline-light btn-sm">
                                                    Code <i class="fa fa-github"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                        </div>

                        <div class="col mb-3">

                                <div class="card card-cover h-40 overflow-hidden text-white bg-dark rounded-5 shadow-lg mb-3" 
                                style="background-image: url('./app/images/www.edtech-classroom.epizy.com_dashboard_lecturer-dashboard_.png');">
                                    <div class="d-flex flex-column h-40 p-5 pb-3 text-white text-shadow-1" 
                                    style="font-weight:bold;border:0px solid;background-color:rgb(0,0,0);
                                    background-color: rgba(0,0,0,0.6);">

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-suitcase"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Edtech Class</h2>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-align-left"></i></h2>
                                            </div>
                                            <div>
                                                <h2>About</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a quia nulla 
                                                eaque!</p>
                                            </div>
                                        </div>

                                        <ul class="d-flex list-unstyled mt-auto">
                                            <li class="me-auto">
                                                <button class="btn btn-outline-light btn-sm">
                                                    View <i class="fa fa-external-link"></i>
                                                </button>
                                            </li>
                                            <li class="d-flex align-items-center me-3">
                                                <button class="btn btn-outline-light btn-sm">
                                                    Code <i class="fa fa-github"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                        </div>

                    </div>

                    <div align="center">
                        <a href="#!addContact" style="text-decoration:none;">
                            <button class="w-50 btn btn-lg btn-outline-light mb-5" type="submit">
                                <font color="#5379F6">
                                    Next <i class="fa fa-arrow-circle-right"></i>
                                </font>
                            </button>
                        </a>
                    </div>

                </div>

            </div>

        </div>

        <div class="modal fade" id="projectModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Add Experience <i class="fa fa-folder"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Title">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-suitcase"></i> Project Title</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="link" class="form-control" id="floatingInput" placeholder="company">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-link"></i> Link to project</label>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea class="form-control" rows="7" id="floatingInput" placeholder="About"></textarea>
                                <label for="floatingInput" class="text-dark"><i class="fa fa-align-left"></i> Description</label>
                            </div>

                            <a href="#!addProjects" style="text-decoration:none;">
                                <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                                    Add Experience <i class="fa fa-folder"></i>
                                </button>
                            </a>

                        </form>

                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});