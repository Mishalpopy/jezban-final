import React, { useState } from "react";
import VideoPopup from "../../common/Modals/VideoPopup";

const ServiceDetailsAbout = () => {
  const [isVideoOpen,setIsVideoOpen] = useState(false);
  return (
    <>
      <div className="tp-service-page pt-140 pb-40">
        <div className="container">
          <div className="row pb-30">
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/bug/bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/bug/bg-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              Bedbug control in the UAE, as in any other region, can be a challenging task. These pests can be resilient, but with diligence and the right approach, you can manage and prevent infestations. Here are steps to control bedbugs{" "}
                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/bug/001.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Isolate Infested Items
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Containment Strategies<br></br>Halting the Bedbug Migration
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Quarantine infested bedding, clothing, and furniture to prevent the bugs from spreading to other areas</p>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg-2"
          style={{
            backgroundImage: `url('assets/img/bug/002.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Wash and Heat Treat
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Hot Water Defense<br></br> Eliminating Bedbugs Through Washing and Heat
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Wash infested bedding and clothing in hot water (at least 130°F or 54°C) and dry on the highest setting. Heat treatment can kill bedbugs effectively.</p>
                  </div>
              
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- promotion area end  --> */}
          {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/bug/003.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Vacuum Thoroughly
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Suctioning Out Pests<br></br>A Comprehensive Guide to Bedbug Vacuuming
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Vacuum all areas where bedbugs may hide, including seams, crevices, and cracks. Dispose of the vacuum bag or contents in a sealed bag outside.</p>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg-2"
          style={{
            backgroundImage: `url('assets/img/bug/004.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Use Bedbug Encasements
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Guarding Your Sleep<br></br>The Power of Bedbug-Proof Encasements
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Cover your mattress and box spring with bedbug-proof encasements to trap any remaining bugs and prevent them from escaping or biting.</p>
                  </div>
              
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- promotion area end  --> */}
         






                   {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/bug/005.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Declutter
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Simplify to Eradicate<br></br>The Role of Decluttering in Bedbug Control
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Reduce clutter in your living space to eliminate hiding spots for bedbugs.</p>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg-2"
          style={{
            backgroundImage: `url('assets/img/bug/006.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  JEZBEN Services
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  JEZBEN Solutions<br></br>Professional Expertise in Bedbug Extermination
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p> Bedbug infestations often require professional pest control services. it's advisable to hire JEZBEN Services. We can use specialized treatments and ensure proper elimination. Experienced exterminators can use insecticides or other methods to eliminate bedbugs.
</p>
                  </div>
              
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- promotion area end  --> */}
      
                   {/* <!-- promotion area start  --> */}
                   <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/bug/007.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Monitor for Re-infestation
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Eyes Wide Open<br></br>Post-Treatment Surveillance for Bedbug Resurgence
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Keep an eye on your home for signs of bedbugs, especially after treatment. Early detection can prevent a full-blown infestation.</p>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg-2"
          style={{
            backgroundImage: `url('assets/img/bug/008.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Prevent Future Infestations
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Preventive Measures<br></br> Safeguarding Against Future Bedbug Intrusions
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Be cautious when acquiring used furniture or clothing. Inspect items thoroughly before bringing them into your home.

</p>
                  </div>
              
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- promotion area end  --> */}

                <h4 className="tp-sv__subtitle pt-100">
                Ants Control in the UAE  A Pest-Free Promise
                </h4>
                <p>
                Remember that bedbug control can be a lengthy process, and multiple treatments may be necessary. 
                </p>
                <p>
                It's essential to follow the advice of professionals and be patient during the eradication process. Early intervention and preventive measures are key to avoiding bedbug infestations in the UAE or any other location.
                </p>

 
                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/bug/bg.png")`,
                    }}
                  >
                    <div className="pt-180 pb-180 text-center p-relative">
                      <span>
                        <button
                          onClick={()=> setIsVideoOpen(true)}
                          className="pt-100 pb-100"
                        >
                         
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
    </>
  );
};

export default ServiceDetailsAbout;
