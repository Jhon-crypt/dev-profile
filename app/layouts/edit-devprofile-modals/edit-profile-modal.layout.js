app.directive("editProfileModal", function(){

    return {

        template : `
        
        <div class="modal fade" id="editProfileModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Edit Profile <i class="fa fa-user-circle-o"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control mb-1" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-user"></i> Full name</label>
                                <button class="btn btn-outline-light">Update <i class="fa fa-user"></i></button>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control mb-1" id="floatingInput" placeholder="name@example.com">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-user-secret"></i> Title</label>
                                <button class="btn btn-outline-light">Update <i class="fa fa-user-secret"></i></button>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea class="form-control mb-1" rows="7" id="floatingAbout" placeholder="About"></textarea>
                                <label for="floatingAbout" class="text-dark"><i class="fa fa-align-left"></i> About</label>
                                <button class="btn btn-outline-light">Update <i class="fa fa-about"></i></button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});