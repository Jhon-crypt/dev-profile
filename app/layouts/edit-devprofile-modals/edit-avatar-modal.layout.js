app.directive("editAvatarModal", function(){

    return {

        template : `
        
        <div class="modal fade" id="editAvatarModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Edit Avatar <i class="fa fa-image"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="mb-3">
                                <input type="file" class="form-control" id="customFile">
                            </div>

                            <a href="#!addProjects" style="text-decoration:none;">
                                <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                                    Update Avatar <i class="fa fa-image"></i>
                                </button>
                            </a>

                        </form>

                    </div>

                </div>

            </div>

        </div>
        
        `

    }

});