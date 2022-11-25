app.directive("editLinksModal", function(){

    return {

        template : `
        
        <div class="modal fade" id="editLinksModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header bg-dark">
                    <h4 class="modal-title">
                        <font color="#5379F6">Add Other Links <i class="fa fa-external-link"></i></font>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body bg-dark text-light">
                    
                    <form>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control mb-1" id="floatingInput" placeholder="Title">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-external-link"></i> Link</label>
                            <button class="btn btn-outline-light">Update <i class="fa fa-external-link"></i></button>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>
        
        `

    }

});