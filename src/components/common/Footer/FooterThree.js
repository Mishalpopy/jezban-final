import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-90 pb-70">
                <div className="pb-30 pb-70">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <Link to="/" href="/"><img src="/assets/img/white.png" width={300} alt="" /></Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <div className="footer-form-2 mb-30">
                        <form>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">Subscribe <i
                            className="fal fa-paper-plane"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/cleaning-service">Cleaning Service</a></li>

                  
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Our Service</h3>
                      <ul>
                        <li><a href="/mosquito-control">Mosquito Control</a></li>
                        <li><a href="/cockroach-control">Cockroach Control</a></li>
                        <li><a href="/ants-control">Ants Control</a></li>
                        <li><a href="/bug-control">Bedbugs Control</a></li>
                        <li><a href="/ter-control">Termite Control</a></li>
                        <li><a href="/ro-control">Rodent Control</a></li>
                        <li><a href="/sna-control">Snake Control</a></li>
                        <li><a href="/type-control">Types Of Files Control</a></li>

                      </ul>
                    </div>
                  </div>
         
         
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="/">27 Division St, Dubai UAE</a></li>
                        <li><a href="tel:+88015569569365">(+971)52462545632</a></li>
                        <li><a href="mailto:info@jezben.com">info@jezben.com</a></li>
                        <li><a href="mailto:sales@jezben.com">sales@jezben.com</a></li>
                        <li><a href="mailto:accounts@jezben.com">accounts@jezben.com</a></li>

                        <li><span> Monday - Saturday</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 pb-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-copyrigh-text text-center text-white">
                <span>© {new Date().getFullYear()} Jezben - Pest Control . All Rights Reserved..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterThree;