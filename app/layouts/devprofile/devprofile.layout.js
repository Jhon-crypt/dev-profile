app.directive("devprofile", function(){


    return {

        template : `
        
        <div class="container text-light">

            <div class="clearfix pt-4">

                <span class="float-start">

                    <h1>Profile <i class="fa fa-user-secret"></i></h1>

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

            <div align="center">

                <div class="dropdown">

                    <button data-bs-toggle="dropdown" class="btn btn-md bg-dark text-light">
                        Edit <i class="fa fa-edit"></i>
                    </button>

                    <ul class="dropdown-menu">

                        <li data-bs-toggle="modal" data-bs-target="#editAvatarModal"><a class="dropdown-item">
                            <i class="fa fa-image mx-2"></i> Edit Avatar
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#editProfileModal"><a class="dropdown-item"><a class="dropdown-item" href="">
                            <i class="fa fa-user-circle-o mx-2"></i> Edit Profile
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#addSkillsModal"><a class="dropdown-item"><a class="dropdown-item" href="">
                            <i class="fa fa-superpowers mx-2"></i> Add Skills
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#addProjectModal"><a class="dropdown-item">
                            <i class="fa fa-suitcase mx-2"></i> Add Projects
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#addExperienceModal"><a class="dropdown-item">
                            <i class="fa fa-briefcase mx-2"></i> Add Experience
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#editContactModal"><a class="dropdown-item">
                            <i class="fa fa-id-badge mx-2"></i> Edit Contact
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#editSocialsModal"><a class="dropdown-item">
                            <i class="fa fa fa-comment-o mx-2"></i> Add Socials 
                        </a></li>

                        <li data-bs-toggle="modal" data-bs-target="#editLinksModal"><a class="dropdown-item">
                            <i class="fa fa fa-external-link mx-2"></i> Add Links
                        </a></li>

                    </ul>

                </div>

            </div>

            <div class="px-4 py-5 text-light">

                <div class="mb-5">

                    <ul class="nav flex-column justify-content-center">

                        <li class="nav-item" style="text-decoration:none;">

                            <a class="nav-link">

                                <img class="d-block mx-auto mb-4" src="./app/images/nftt.png"
                                style="object-fit:cover;border:1px solid black;height:200px;border-radius:100px;width:200px;">

                            </a>

                        </li>

                        <li class="nav-item text-center" style="text-decoration:none;">

                            <a class="nav-link text-light">

                                <h2 class="display-5 fw-bold"> 
                                    <font color="#5379F6">I'm John Doe</font>
                                </h2>

                            </a>

                        </li>

                        <li class="nav-item text-center" style="text-decoration:none;">

                            <a class="nav-link text-light">

                                <span>Full Stack Developer</span>

                            </a>

                        </li>

                        <li class="nav-item text-center" style="text-decoration:none;">

                            <a class="nav-link text-light">

                                <p class="display-6 fw-bold" style="overflow-wrap:break-word;">
                                    <small>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ad culpa officia commodi 
                                        fugit modi.
                                    </small>
                                </p>

                            </a>

                        </li>

                    </ul>

                </div>

                <div class="mb-5 pb-5">

                    <h2 class="fw-bold text-center pb-2"> 
                        <font color="#5379F6">Skills <i class="fa fa-superpowers"></i></font>
                    </h2>

                    <ul class="nav justify-content-center">

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Php <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Javascript <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Python <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Golang <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Laravel <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Ruby On Rails <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Node Js <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    Next Js <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" style="text-decoration:none;">
                                <button class="btn btn-outline-light btn-sm" style="border-radius:25px;">
                                    React Js <i class="fa fa-close"></i>
                                </button>
                            </a>
                        </li>

                    </ul>

                </div>

                <div class="mb-5 pb-5">

                    <h2 class="fw-bold text-center pb-2"> 
                        <font color="#5379F6">Projects <i class="fa fa-suitcase"></i></font>
                    </h2>

                    <div class="row">


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

                                            <li class="d-flex align-items-center me-3">
                                                <button class="btn btn-outline-light btn-sm">
                                                    Delete <i class="fa fa-close"></i>
                                                </button>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            
                            </div>
                            <!-- end of column -->

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

                                            <li class="d-flex align-items-center me-3">
                                                <button class="btn btn-outline-light btn-sm">
                                                    Delete <i class="fa fa-close"></i>
                                                </button>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                            
                            </div>
                            <!-- end of column -->

                    </div>

                </div>

                <div class="mb-5 pb-5">

                    <h2 class="fw-bold text-center pb-2"> 
                        <font color="#5379F6">Experience <i class="fa fa-briefcase"></i></font>
                    </h2>

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

                                        <div align="center">

                                            <button class="btn btn-outline-light">
                                                Delete <i class="fa fa-close"></i>
                                            </button>

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

                                        <div align="center">

                                            <button class="btn btn-outline-light">
                                                Delete <i class="fa fa-close"></i>
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </a>

                        </li>


                    </ul>

                </div>

                <div class="mb-3 pb-3">

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

                                                    <div class="clearfix pt-4">

                                                        <span class="float-start">

                                                            johnoladele690@gmail.com

                                                        </span>

                                                        <span class="float-end">

                                                            <button class="btn btn-outline-light">
                                                                <i class="fa fa-close"></i>
                                                            </button>

                                                        </span>

                                                    </div>

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
                        
                                                    <div class="clearfix pt-4">

                                                        <span class="float-start">

                                                            09061811990

                                                        </span>

                                                        <span class="float-end">

                                                            <button class="btn btn-outline-light">
                                                                <i class="fa fa-close"></i>
                                                            </button>

                                                        </span>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>
                    <!-- end of row -->

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
                                                
                                                    <ul class="nav flex-column">


                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">

                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">
    
                                                                        <i class="fa fa-github-square" style="font-size:25px;"></i>
    
                                                                    </span>
    
                                                                    <span class="float-end">
    
                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>
    
                                                                    </span>
    
                                                                </div>

                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">

                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">

                                                                        <i class="fa fa-twitter-square" style="font-size:25px;"></i>

                                                                    </span>

                                                                    <span class="float-end">

                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>

                                                                    </span>

                                                                </div>

                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">

                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">

                                                                        <i class="fa fa-facebook-square" style="font-size:25px;"></i>

                                                                    </span>

                                                                    <span class="float-end">

                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>

                                                                    </span>

                                                                </div>

                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link text-light" style="text-decoration:none;">

                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">

                                                                        <i class="fa fa-linkedin-square" style="font-size:25px;"></i>

                                                                    </span>

                                                                    <span class="float-end">

                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>

                                                                    </span>

                                                                </div>

                                                            </a>
                                                        </li>

                                                    </ul>

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
                                    
                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">

                                                                        https://htmx.org/

                                                                    </span>

                                                                    <span class="float-end">

                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>

                                                                    </span>

                                                                </div>

                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link">

                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">

                                                                        https://htmx.org/

                                                                    </span>

                                                                    <span class="float-end">

                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>

                                                                    </span>

                                                                </div>

                                                            </a>
                                                        </li>

                                                        <li class="nav-item">
                                                            <a class="nav-link">

                                                                <div class="clearfix pt-4">

                                                                    <span class="float-start">

                                                                        https://github.com/Jhon-crypt/

                                                                    </span>

                                                                    <span class="float-end">

                                                                        <button class="btn btn-outline-light">
                                                                            <i class="fa fa-close" style="font-size:25px;"></i>
                                                                        </button>

                                                                    </span>

                                                                </div>

                                                            </a>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <!-- end of links column -->

                    </div>

                </div>

                <div class="mb-5 pb-5">

                    <p class="text-center text-muted">
                        <small>Built with Devprofile</small>
                    </p>

                </div>

            </div>

        </div>

        
        
        `

    }

});