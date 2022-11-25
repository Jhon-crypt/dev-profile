app.directive("editSocialsModal", function (){

    return {

        template : `
        
        <div class="modal fade" id="editSocialsModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header bg-dark">
                    <h4 class="modal-title">
                        <font color="#5379F6">Add Socials Link <i class="fa fa-comment-o"></i></font>
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body bg-dark text-light">
                    
                    <form>

                        <div class="form-floating mb-3">
                            <input type="text" class="form-control mb-1" id="floatingInput" placeholder="Title">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-github-square"></i> Github profile link</label>
                            <button class="btn btn-outline-light">Update <i class="fa fa-github-square"></i></button>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="link" class="form-control mb-1" id="floatingInput" placeholder="company">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-twitter-square"></i> Twitter profile link</label>
                            <button class="btn btn-outline-light">Update <i class="fa fa-twitter-square"></i></button>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="link" class="form-control mb-1" id="floatingInput" placeholder="company">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-facebook-square"></i> Facebook profile link</label>
                            <button class="btn btn-outline-light">Update <i class="fa fa-facebook-square"></i></button>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="link" class="form-control mb-1" id="floatingInput" placeholder="company">
                            <label for="floatingInput" class="text-dark"><i class="fa fa-linkedin-square"></i> LinkedIn profile link</label>
                            <button class="btn btn-outline-light">Update <i class="fa fa-linkedin-square"></i></button>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>
        
        `

    }

});