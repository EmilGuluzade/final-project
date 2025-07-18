import React from "react";

const AboutUs = () => {
  return (
    <div
      class="holder mt-0 py-3 py-sm-5 py-md-10 bg-cover lazyloaded"
      style={{
        "background-image":
          " url(	https://big-skins.com/frontend/foxic-html-demo/images/pages/about-bg.webp)",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-11 col-md-9 col-xl-9">
            <div class="page-title-bg py-md-3 py-xl-6">
              <h1 data-aos="fade-right">ABOUT US</h1>
              <p class="d-none d-md-block" data-aos="fade-right">
                Founded in 2010, Fox shop is the one stop shop for the barbering
                world.
                <br />
                We provide barbers with the necessary tools to progress their
                craft and push the industry as far forward as possible.
              </p>
              <p data-aos="fade-right">
                Based in Cardiff, South Wales, Fox shop operates primarily in
                the UK, but international sales are welcomed and dispatched
                daily. We have a trade counter with a shop front and we
                encourage you to come in and see us!
              </p>
              <p class="d-none d-md-block" data-aos="fade-right">
                <i>
                  <b>
                    Our support is available 10.00 – 18.00 GMT + 2 (Monday –
                    Friday).
                    <br />
                    We usually get back to you within 24 hours.
                  </b>
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
