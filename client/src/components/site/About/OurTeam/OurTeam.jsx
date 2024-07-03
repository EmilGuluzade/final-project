import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import esref from "../../../../assets/images/esref2.jpeg";
import hemid from "../../../../assets/images/hemid.jpeg";
import hikmet from "../../../../assets/images/hikmet.jpeg";
import cavid2 from "../../../../assets/images/cavid2.jpeg";
import cavid from "../../../../assets/images/cavid.jpeg";
const OurTeam = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div class="holder">
      <div class="container">
        <div class="title-wrap text-center">
          <h2 class="h1-style" data-aos="zoom-in-down">
            Our Team
          </h2>
        </div>
        <div class="row person-row">
          <div class="person-item image-hover-scale-scale" data-aos="fade-up">
            <div
              class="person-item-image image-container"
              style={{ "padding-bottom": "141.86%" }}
            >
              <img class="fade-up ls-is-cached lazyloaded" src={esref} alt="" />
            </div>
            <div class="person-item-info">
              <div class="person-item-title">
                Əşrəf
                <br />
                Şəfi
              </div>
              <div class="person-item-post">Manager</div>
              <div class="person-item-socials">
                <ul class="social-list list-unstyled">
                  <li>
                    <a href="#">
                      <i class="icon-twitter fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shefiyefff_50?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <i class="icon-instagram  fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-linkedin  fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="person-item image-hover-scale-scale" data-aos="fade-up">
            <div
              class="person-item-image image-container"
              style={{ "padding-bottom": "141.86%" }}
            >
              <img class="fade-up ls-is-cached lazyloaded" src={hemid} alt="" />
            </div>
            <div class="person-item-info">
              <div class="person-item-title">
                Həmid
                <br />
                İsmayılzadə
              </div>
              <div class="person-item-post">Creative director</div>
              <div class="person-item-socials">
                <ul class="social-list list-unstyled">
                  <li>
                    <a href="#">
                      <i class="icon-twitter fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hemidismayilzade03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <i class="icon-instagram  fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-linkedin  fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="person-item image-hover-scale-scale" data-aos="fade-up">
            <div
              class="person-item-image image-container"
              style={{ "padding-bottom": "141.86%" }}
            >
              <img
                class="fade-up lazyloaded"
                height={"100%"}
                src={cavid2}
                data-src="images/pages/img-person-03.webp"
                alt=""
              />
            </div>
            <div class="person-item-info">
              <div class="person-item-title">
                Cavid
                <br />
                Suleymanlı
              </div>
              <div class="person-item-post">Creative director</div>
              <div class="person-item-socials">
                <ul class="social-list list-unstyled">
                  <li>
                    <a href="#">
                      <i class="icon-twitter fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/cavidsly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <i class="icon-instagram  fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-linkedin  fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="person-item image-hover-scale-scale" data-aos="fade-up">
            <div
              class="person-item-image image-container"
              style={{ "padding-bottom": "141.86%" }}
            >
              <img class="fade-up lazyloaded" src={hikmet} alt="" />
            </div>
            <div class="person-item-info">
              <div class="person-item-title">
                Hikmət
                <br />
                Quliyev
              </div>
              <div class="person-item-post">Chief Technology Officer</div>
              <div class="person-item-socials">
                <ul class="social-list list-unstyled">
                  <li>
                    <a href="#">
                      <i class="icon-twitter fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hikmatasifli?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <i class="icon-instagram  fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-linkedin  fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
