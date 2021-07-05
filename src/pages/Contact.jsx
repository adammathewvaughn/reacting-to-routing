import React from 'react';

const Contact = () => {
    return(
    <div class="accordion" id="myAccordion">
        <div class="card">
            <div class="card-header">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Item #1
                    </button>
                </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="Item #1" data-parent="#myAccordion">
                <div class="card-body">
                Full-Stack Developer
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Item #2
                    </button>
                </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="Item #2" data-parent="#myAccordion">
                <div class="card-body">
                Available for immediate hire.
                </div>
            </div>
        </div>
    </div>
    )

}

export default Contact;