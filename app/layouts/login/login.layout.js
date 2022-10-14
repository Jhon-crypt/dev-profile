app.directive("login", function(){

    return {

        template : `
        
        <div class="container col-xxl-8 px-4 py-1">

            <div class="row flex-lg-row-reverse align-items-center g-3 py-3">
                <div class="col-10 col-sm-4 col-lg-6">
                    <img src="./app/images/image1.jpg" class="d-block mx-sm-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
                </div>

                <div class="col-lg-6">

                    <form class="p-4 p-md-5 border rounded-3 bg-dark">

                        <h1 align="center" class="display-5 fw-bold lh-1 mb-3 text-light">
                            Login Now
                        </h1>

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Username <i class="fa fa-user-circle-o"></i></label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password <i class="fa fa-lock"></i></label>
                        </div>

                        <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                            <font color="#5379F6">
                                Login
                            </font>
                        </button>

                        <small class="text-muted" align="center">Don't have an account, sign up <a href="#/!">here</a>, Or did you forget 
                        your password, click <a href="">here</a> to reset it</small>

                    </form>

                </div>

            </div>

        </div>
        
        `

    }

});