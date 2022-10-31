app.directive("footer", function(){

    return {

        template : `
        
        <div class="container mb-4">

            <ul class="nav justify-content-center">

                <li class="nav-item">

                    <a class="nav-link text-light">
                        Login
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link text-light">
                        Signup
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link text-light">
                        Help
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link text-light">
                        Search devs
                    </a>

                </li>

            </ul>

            <ul class="nav justify-content-center">

                <li class="nav-item">

                    <a class="nav-link text-light">
                        Twitter
                    </a>

                </li>

                <li class="nav-item">

                    <a class="nav-link text-light">
                        Facebook
                    </a>

                </li>

            </ul>

            <ul class="nav justify-content-center">

                <li class="nav-item">

                    <a class="nav-link text-muted">
                        <small>Coding_wizard__ © 2022</small>
                    </a>

                </li>

            </ul>

        </div>
        
        `

    }

});