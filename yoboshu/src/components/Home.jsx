import React from "react";

function Home() {
  return (
    <div className="home">
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
            <h1 class="font-weight-light"><b>Home</b></h1>
            <p>
              Here you will find the list of your loved ones.<br/>
              <b>Atif Ansari</b><br/>
              I am a passionate and dedicated towards my life goal. You can find me by one click.<br/>
              <b>Shamina Islaf</b><br/>
              I can make you fit at your place but you need to work consistently.<br/>
              <b>Shubham Pritam</b><br/>
              I belive in a fit  physic but you need to build it.<br/>
              <b>Sam Adolf</b><br/>
              I am decicated to make the people firt and fine.<br/>
              <button >Clik Me To Get ones</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
