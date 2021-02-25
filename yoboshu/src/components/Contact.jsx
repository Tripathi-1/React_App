import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light"><b>Contact</b></h1>
            <p>
              <h3>Availabilty</h3><br/>
              <i>2:00 - 3:00 PM</i><br/>
              <i>3:30 - 4:30 PM</i><br/>
              <i>6:00 - 7:00 PM</i>.
              <h3>Training Days</h3>
              <i>Monday - Saturday</i><br></br>
              <h3>Details</h3>
              <i>Sagarpartim@gmail.com</i><br></br>
              <i>+918854678219</i><br/>
               <button ><b>BOOK NOW</b></button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
