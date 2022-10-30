app.directive("addExperience", function(){

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

                            <button class="w-100 btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#experienceModal">
                                Add Experience <i class="fa fa-folder"></i>
                            </button>

                        </span>

                        <span class="float-end">

                            <a href="#!addProjects" style="text-decoration:none;">
                                <button class="w-100 btn btn-outline-light" type="submit">
                                    Skip Experience <i class="fa fa-arrow-circle-right"></i>
                                </button>
                            </a>

                        </span>

                    </div>

                </div>

                <div class="mt-4 pt-4 mb-4">

                    <ul class="nav justify-content-center">

                        <li class="nav-item">

                            <a class="nav-link text-light" style="text-decoration:none;">

                                <div class="card bg-dark" style="width:300px;">

                                    <div class="card-body">

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-briefcase"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Front end developer @Google</h2>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-align-left"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Description</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a quia nulla 
                                                eaque!</p>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-clock-o"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Duration</h2>
                                                <p>From 1/10/2022 to 1/10/2022</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link text-light" style="text-decoration:none;">

                                <div class="card bg-dark" style="width:300px;">

                                    <div class="card-body">

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-briefcase"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Blockchain end developer @Google</h2>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-align-left"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Description</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a quia nulla 
                                                eaque!</p>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-clock-o"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Duration</h2>
                                                <p>From 1/10/2022 to 1/10/2022</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link text-light" style="text-decoration:none;">

                                <div class="card bg-dark" style="width:300px;">

                                    <div class="card-body">

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-briefcase"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Blockchain end developer @Google</h2>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-align-left"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Description</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a quia nulla 
                                                eaque!</p>
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="col d-flex align-items-start">
                                            <div class="flex-shrink-0 me-3">
                                                <h2><i class="fa fa-clock-o"></i></h2>
                                            </div>
                                            <div>
                                                <h2>Duration</h2>
                                                <p>From 1/10/2022 to 1/10/2022</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </a>

                        </li>

                    </ul>

                </div>

                <div align="center">
                <a href="#!addProjects" style="text-decoration:none;">
                    <button class="w-50 btn btn-lg btn-outline-light mb-5" type="submit">
                        <font color="#5379F6">
                            Next <i class="fa fa-arrow-circle-right"></i>
                        </font>
                    </button>
                </a>
                </div>

            </div>

        </div>

        <div class="modal fade" id="experienceModal">
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
                                <label for="floatingInput" class="text-dark"><i class="fa fa-briefcase"></i> Title</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="company">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-university"></i> Company</label>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea class="form-control" rows="7" id="floatingInput" placeholder="About"></textarea>
                                <label for="floatingInput" class="text-dark"><i class="fa fa-align-left"></i> Description</label>
                            </div>

                            <div class="mb-3">

                                <span></span>

                                <div class="row">
                                    <div class="col">
                                        <label for="start"><i class="fa fa-clock-o"></i> When you joined</label>
                                        <input id="start" type="date" class="form-control" placeholder="Month">
                                    </div>
                                    <div class="col">
                                        <label for="start"><i class="fa fa-clock-o"></i> When you left</label>
                                        <input id="start" type="date" class="form-control" placeholder="Month">
                                    </div>
                                </div>

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