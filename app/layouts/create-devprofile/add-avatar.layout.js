app.directive("addAvatarModal", function(){

    return {

        template : `
        
        <div class="modal fade" id="avatarModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Add Avatar <i class="fa fa-user-circle-o"></i></font>
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
        
        `

    }

})