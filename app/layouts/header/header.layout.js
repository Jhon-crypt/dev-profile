app.directive("header", function(){

    return {

        template : `
        
        <nav class="navbar navbar-dark bg-dark text-light">

            <div class="container">

                <a class="navbar-brand" href="#">

                    <b>
                    
                        Dev<font color="#5379F6">profile <i class="fa fa-user-secret"></i></FONT>
                    
                    </b>
                
                </a>

                <button class="btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <font color="#5379F6"><i class="fa fa-navicon"></i></font>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample01">

                    <ul class="navbar-nav me-auto mb-2">

                        <li class="nav-item">
                            <a class="nav-link active" href="#!login">
                                <i class="fa fa-sign-in"></i> Login
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="#/!">
                                <i class="fa fa-user-circle-o"></i> Signup
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" href="#">
                                <i class="fa fa-search"></i> Search Devs
                            </a>
                        </li>


                    </ul>

                </div>

            </div>
        </nav>
        
        `

    }

});