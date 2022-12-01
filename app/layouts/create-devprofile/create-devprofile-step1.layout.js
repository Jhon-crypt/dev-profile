app.directive("createDevprofileStepOne", function(){

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

            <div class="p-4 p-md-5 mt-5 pt-5 text-center border-rounded text-light border rounded-3 bg-dark mx-auto" 
            style="width:300px">

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput" class="text-dark"><i class="fa fa-user"></i> Full name</label>
                </div>

                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingTitle" placeholder="Title">
                    <label for="floatingTitle" class="text-dark"><i class="fa fa-briefcase"></i> Title</label>
                </div>

                <div class="form-floating mb-3">
                    <textarea class="form-control" rows="7" id="floatingAbout" placeholder="About"></textarea>
                    <label for="floatingAbout" class="text-dark"><i class="fa fa-align-left"></i> About</label>
                </div>

                <a href="#!createDevprofileStepTwo" style="text-decoration:none;">
                    <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                        <font color="#5379F6">
                            Next <i class="fa fa-arrow-circle-right"></i>
                        </font>
                    </button>
                </a>

            </div>
        
        `

    }

});