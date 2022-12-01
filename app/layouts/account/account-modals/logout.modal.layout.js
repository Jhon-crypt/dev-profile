app.directive("logoutModal", function(){

    return {

        template : `
        
        <div class="modal fade" id="logoutModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Logout <i class="fa fa-sign-out"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <div class="text-center alert alert-info">

                            <p><b>Are you sure you wanna logout</b></p>

                            <ul class="nav justify-content-center">

                                <li class="nav-item">

                                    <a class="nav-link">

                                        <button class="btn btn-info">Yes</button>

                                    </a>

                                </li>

                                <li class="nav-item">

                                    <a class="nav-link">

                                        <button class="btn btn-danger">No</button>

                                    </a>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});