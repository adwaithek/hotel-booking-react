import React from 'react'
import './aboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css';
import { faAnchor, faGlobe, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';


function AboutUs() {
  return (
    <div className="feat bg-gray pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="section-head col-sm-12">
        <h4>
          <span>Why Choose</span> Us?
        </h4>
        <p>
          When you choose us, you'll feel the benefit of 10 years' experience of
          Web Development. Because we know the digital world and we know that
          how to handle it. With working knowledge of online, SEO and social
          media.
        </p>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_one">
          <FontAwesomeIcon icon={faGlobe} />

          </span>
          <h6>Modern Design</h6>
          <p>
            We use latest technology for the latest world because we know the
            demand of peoples.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_two">
            {/* <i className="fa fa-anchor" /> */}
            <FontAwesomeIcon icon={faAnchor} />

          </span>
          <h6>Creative Design</h6>
          <p>
            We are always creative and and always lisen our costomers and we mix
            these two things and make beast design.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="item">
          {" "}
          <span className="icon feature_box_col_three">
          <FontAwesomeIcon icon={faHourglassHalf} />
            {/* <i className="fa fa-hourglass-half" /> */}
          </span>
          <h6>24 x 7 User Support</h6>
          <p>
            If our customer has any problem and any query we are always happy to
            help then.
          </p>
        </div>
      </div>
     
      
    </div>
  </div>
</div>

  )
}

export default AboutUs