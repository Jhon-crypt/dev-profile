app.directive("addProjectModal", function(){

    return {

        template :  `
        
        <div class="modal fade" id="addProjectModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Add Experience <i class="fa fa-folder"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Title">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-suitcase"></i> Project Title</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="link" class="form-control" id="floatingInput" placeholder="company">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-link"></i> Link to project</label>
                            </div>

                            <div class="form-floating mb-3">
                                <textarea class="form-control" rows="7" id="floatingInput" placeholder="About"></textarea>
                                <label for="floatingInput" class="text-dark"><i class="fa fa-align-left"></i> Description</label>
                            </div>

                            <a href="#!addProjects" style="text-decoration:none;">
                                <button class="w-100 btn btn-lg btn-outline-light" type="submit">
                                    Add Experience <i class="fa fa-folder"></i>
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