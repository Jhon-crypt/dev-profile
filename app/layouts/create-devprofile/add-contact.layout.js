app.directive("addContacts", function(){

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

            <div class="container">

                <div class="pt-4 mx-auto" style="width:320px;">

                    <div class="clearfix">

                        <span class="float-start">

                            <button class="w-100 btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#contactModal">
                                Add Contact <i class="fa fa-id-badge"></i>
                            </button>

                        </span>

                        <span class="float-end">

                            <a href="#!devprofile" style="text-decoration:none;">
                                <button class="w-100 btn btn-outline-light" type="submit">
                                    Skip Contact <i class="fa fa-arrow-circle-right"></i>
                                </button>
                            </a>

                        </span>

                    </div>

                </div>

                <div class="mt-4 pt-4 mb-4">

                    <div class="row">

                        <div class="col mb-3">

                            <div class="card bg-dark">

                                <div class="card-body">

                                    <h4 class="card-title mb-2">
                                        Mail <i class="fa fa-envelope"></i>
                                    </h4>

                                    <div class="accordion">

                                        <div class="accordion-item">
                                            <h4 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed btn-outline-light" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" 
                                                aria-controls="collapseTwo">
                                                    View 
                                                </button>
                                            </h4>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" 
                                            data-bs-parent="#accordionExample">
                                                <div class="accordion-body bg-dark text-light">
                                                    johnoladele690@gmail.com
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="col mb-3">

                            <div class="card bg-dark">

                                <div class="card-body">

                                    <h4 class="card-title">
                                        Phone <i class="fa fa-phone"></i>
                                    </h4>

                                    <div class="accordion">
                                    
                                        <div class="accordion-item">
                                            <h4 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed btn-outline-light" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#collapsePhone" aria-expanded="false" 
                                                aria-controls="collapsePhone">
                                                    View 
                                                </button>
                                            </h4>
                                            <div id="collapsePhone" class="accordion-collapse collapse" aria-labelledby="headingTwo" 
                                            data-bs-parent="#accordionMail">
                                                <div class="accordion-body bg-dark text-light">
                                                    09061811990
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="row">

                        <div class="col mb-3">

                            <div class="card bg-dark">

                                <div class="card-body">

                                    <h4 class="card-title">
                                        Socials <i class="fa fa-comment-o"></i>
                                    </h4>

                                    <div class="accordion">
                                    
                                        <div class="accordion-item">
                                            <h4 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed btn-outline-light" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#collapseSocial" aria-expanded="false" 
                                                aria-controls="collapseSocial">
                                                    View 
                                                </button>
                                            </h4>
                                            <div id="collapseSocial" class="accordion-collapse collapse" aria-labelledby="headingTwo" 
                                            data-bs-parent="#accordionMail">
                                                <div class="accordion-body bg-dark text-light">
                                                
                                                    <ul class="nav">


                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">
                                                                <i class="fa fa-github-square" style="font-size:25px;"></i>
                                                            </a>
                                                        </li>


                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">
                                                                <i class="fa fa-twitter-square" style="font-size:25px;"></i>
                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">
                                                                <i class="fa fa-facebook-square" style="font-size:25px;"></i>
                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">
                                                                <i class="fa fa-linkedin-square" style="font-size:25px;"></i>
                                                            </a>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <button class="w-100 btn btn-lg btn-outline-light mt-3" 
                                    data-bs-toggle="modal" data-bs-target="#socialsModal">
                                        <font color="#5379F6">
                                            Add <i class="fa fa-plus-square"></i>
                                        </font>
                                    </button>

                                </div>

                            </div>

                        </div>

                        <div class="col mb-3">

                            <div class="card bg-dark">

                                <div class="card-body">

                                    <h4 class="card-title">
                                        Links <i class="fa fa-external-link"></i>
                                    </h4>

                                    <div class="accordion">
                                    
                                        <div class="accordion-item">
                                            <h4 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed btn-outline-light" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#collapseLinks" aria-expanded="false" 
                                                aria-controls="collapseLinks">
                                                    View 
                                                </button>
                                            </h4>
                                            <div id="collapseLinks" class="accordion-collapse collapse" aria-labelledby="headingTwo" 
                                            data-bs-parent="#collapseLinks">
                                                <div class="accordion-body bg-dark text-light">
                                                    
                                                    <ul class="nav flex-column">

                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                https://htmx.org/
                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                https://htmx.org/
                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link">
                                                                https://github.com/Jhon-crypt/
                                                            </a>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <button class="w-100 btn btn-lg btn-outline-light mt-3" 
                                    data-bs-toggle="modal" data-bs-target="#linksModal">
                                        <font color="#5379F6">
                                            Add <i class="fa fa-plus-square"></i>
                                        </font>
                                    </button>

                                </div>

                            </div>


                        </div>
                        <!-- end of links column -->


                    </div>

                </div>

                <div align="center">
                    <a href="#!addAvatar" style="text-decoration:none;">
                        <button class="w-50 btn btn-lg btn-outline-light mb-5">
                            <font color="#5379F6">
                                Next <i class="fa fa-arrow-circle-right"></i>
                            </font>
                        </button>
                    </a>
                </div>

            </div>

        </div>

        <div class="modal fade" id="contactModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Add Contact <i class="fa fa-id-badge"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Title">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-envelope"></i> Email address</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="link" class="form-control" id="floatingInput" placeholder="company">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-phone"></i> Phone number</label>
                            </div>

                            <a href="#!addProjects" style="text-decoration:none;">
                                <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                                    Add Contact <i class="fa fa-folder"></i>
                                </button>
                            </a>

                        </form>

                    </div>

                </div>

            </div>

        </div>

        <div class="modal fade" id="socialsModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header bg-dark">
                    <h4 class="modal-title">
                        <font color="#5379F6">Add Socials Link <i class="fa fa-comment-o"></i></font>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body bg-dark text-light">
                    
                    <form>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Title">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-github-square"></i> Github profile link</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="link" class="form-control" id="floatingInput" placeholder="company">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-twitter-square"></i> Twitter profile link</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="link" class="form-control" id="floatingInput" placeholder="company">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-facebook-square"></i> Facebook profile link</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="link" class="form-control" id="floatingInput" placeholder="company">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-linkedin-square"></i> LinkedIn profile link</label>
                        </div>

                        <a href="#!addProjects" style="text-decoration:none;">
                            <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                                Add <i class="fa fa-plus-circle"></i>
                            </button>
                        </a>

                    </form>

                </div>

            </div>

        </div>

    </div>

    <div class="modal fade" id="linksModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header bg-dark">
                    <h4 class="modal-title">
                        <font color="#5379F6">Add Other Links <i class="fa fa-external-link"></i></font>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body bg-dark text-light">
                    
                    <form>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Title">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-external-link"></i> Link</label>
                        </div>

                        <a href="#!addProjects" style="text-decoration:none;">
                            <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                                Add <i class="fa fa-plus-circle"></i>
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