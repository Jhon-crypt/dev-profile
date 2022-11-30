app.directive("logoutModal", function(){

    return {

        template : `
        
        <div class="modal fade" id="logoutModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Update Password <i class="fa fa-lock"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="form-floating mb-3">
                                <input type="password" class="form-control mb-1" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-lock"></i> Password</label>
                                <button class="btn btn-outline-light">Update <i class="fa fa-lock"></i></button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});