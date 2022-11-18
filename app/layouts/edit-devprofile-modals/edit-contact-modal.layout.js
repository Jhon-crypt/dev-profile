app.directive("editContactModal", function() {

    return {

        template : `

        <div class="modal fade" id="editContactModal">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header bg-dark">
                        <h4 class="modal-title">
                            <font color="#5379F6">Edit Contact <i class="fa fa-id-badge"></i></font>
                        </h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body bg-dark text-light">
                        
                        <form>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control mb-1" id="floatingInput" placeholder="Title">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-envelope"></i> Email address</label>
                                <button class="btn btn-outline-light">Update <i class="fa fa-envelope"></i></button>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="link" class="form-control mb-1" id="floatingInput" placeholder="company">
                                <label for="floatingInput" class="text-dark"><i class="fa fa-phone"></i> Phone number</label>
                                <button class="btn btn-outline-light">Update <i class="fa fa-phone"></i></button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

        `

    }

});