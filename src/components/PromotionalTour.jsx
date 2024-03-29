import Image from "next/image";
import hotelImg1 from "../assets/images/hotel1.png";
import hotelImg2 from "../assets/images/hotel2.png";
import hotelImg3 from "../assets/images/hotel3.png";
import hotelImg4 from "../assets/images/hotel4.png";
import hotelImg5 from "../assets/images/hotel5.png";
import hotelImg6 from "../assets/images/hotel6.png";
import Link from 'next/link'


const PromotionalTour = () => {
  return (
    <>
      <section id="promotional_tours" className="section_padding_top">
        <div className="container">
          {/* <!-- Section Heading --> */}

          <div className="section_heading_center">
            <h2>Our best promotional tours</h2>
          </div>

          <div className="promotional_tour-part ">
            <div className="theme_common_box_two img_hover ">
              <div className="theme_two_box_img ">
                <a >
                  <Image src={hotelImg1} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>New beach, Thailand
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="hotel-details.html">Kantua hotel, Thailand</a>
                </h4>
                <p>
                  <span className="review_rating">4.8/5 Excellent</span>{" "}
                  <span className="review_count">(1214 reviewes)</span>
                </p>
                <h3>
                  $99.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
            <div className="theme_common_box_two img_hover swiper-slide">
              <div className="theme_two_box_img">
                <a href="hotel-details.html">
                  <Image src={hotelImg2} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>Indonesia
                </p>
                {/* <!-- <div className="discount_tab">
                  <span>50%</span>
                </div> --> */}
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="hotel-details.html">Hotel paradise international</a>
                </h4>
                <p>
                  <span className="review_rating">4.8/5 Excellent</span>{" "}
                  <span className="review_count">(1214 reviewes)</span>
                </p>
                <h3>
                  $99.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
            <div className="theme_common_box_two img_hover swiper-slide">
              <div className="theme_two_box_img">
                <a href="hotel-details.html">
                  <Image src={hotelImg3} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>Kualalampur
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="hotel-details.html">Hotel kualalampur</a>
                </h4>
                <p>
                  <span className="review_rating">4.8/5 Excellent</span>{" "}
                  <span className="review_count">(1214 reviewes)</span>
                </p>
                <h3>
                  $99.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
            <div className="theme_common_box_two img_hover swiper-slide">
              <div className="theme_two_box_img">
                <a href="hotel-details.html">
                  <Image src={hotelImg4} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>Mariana island
                </p>
                {/* <!-- <div className="discount_tab">
                  <span>50%</span>
                </div> --> */}
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="hotel-details.html">Hotel deluxe</a>
                </h4>
                <p>
                  <span className="review_rating">4.8/5 Excellent</span>{" "}
                  <span className="review_count">(1214 reviewes)</span>
                </p>
                <h3>
                  $99.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
            <div className="theme_common_box_two img_hover swiper-slide">
              <div className="theme_two_box_img">
                <a href="hotel-details.html">
                  <Image src={hotelImg5} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>Beach view
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="hotel-details.html">Thailand grand suit</a>
                </h4>
                <p>
                  <span className="review_rating">4.8/5 Excellent</span>{" "}
                  <span className="review_count">(1214 reviewes)</span>
                </p>
                <h3>
                  $99.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
            <div className="theme_common_box_two img_hover swiper-slide">
              <div className="theme_two_box_img">
                <a href="hotel-details.html">
                  <Image src={hotelImg6} alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt"></i>Long island
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="hotel-details.html">Zefi resort and spa</a>
                </h4>
                <p>
                  <span className="review_rating">4.8/5 Excellent</span>{" "}
                  <span className="review_count">(1214 reviewes)</span>
                </p>
                <h3>
                  $99.00 <span>Price starts from</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromotionalTour;
