app.directive("signup", function(){

    return {

        template : `
        
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">

            <div class="row align-items-center g-lg-5 py-5">

                <div class="col-lg-7 text-center text-lg-start">
                    <img src="" class="img-fluid"
                </div>

                <div class="col-md-10 mx-auto col-lg-5">

                    <form class="p-4 p-md-5 border rounded-3 bg-light">

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <hr class="my-4">
                        <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                    </form>
                </div>

            </div>

        </div>
        
        `

    }

});