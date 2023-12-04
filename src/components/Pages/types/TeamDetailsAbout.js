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
                <img src="/assets/img/types/bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/types/bg-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              Effective fly control in the UAE involves a combination of good sanitation practices, insecticide applications, and the use of traps or baits. It's essential to identify the specific fly species to implement targeted control measures. In some cases, JEZBEN services may be necessary for severe infestations.{" "}
                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/types/001.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Sanitation
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Clean Spaces, Fly-Free Places<br></br>Prioritize Sanitation
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Keep your home, business, and surrounding areas clean and free of food debris, garbage, and organic waste. Flies are attracted to these food sources.</p>
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
            backgroundImage: `url('assets/img/types/002.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Proper Food Storage
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Fly-Free Storage<br></br>Airtight Solutions for Food Preservation
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Store food in airtight containers to prevent flies from accessing it.
   - Keep fruits and vegetables in the refrigerator or sealed containers.
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
            backgroundImage: `url('assets/img/types/003.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Screened Windows and Doors
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Flawless Defense<br></br>Screens for Fly-Free Interiors
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Install screens on windows and doors to prevent flies from entering indoor spaces.
   - Ensure there are no gaps or holes in screens.
</p>
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
            backgroundImage: `url('assets/img/types/004.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Fly Traps and Zappers
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Indoor Fly Solutions<br></br>Traps and Zappers for Effective Capture
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Use fly traps or electric fly zappers indoors. These devices attract and capture flies.
   - Place fly traps strategically in areas where flies are most active.
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
            backgroundImage: `url('assets/img/types/005.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Drain Maintenance
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Drain Maintenance<br></br>Ward Off Drain Flies with Regular Cleaning
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Clean and maintain drains regularly, as they can be breeding grounds for drain flies. Use drain cleaners if needed.</p>
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
            backgroundImage: `url('assets/img/types/006.png')`,
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
                  JEZBEN Services<br></br>Your Solution for Severe Fly Infestations
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p> For severe or persistent fly infestations, it's advisable to hire JEZBEN Services in the UAE. We have the expertise and access to effective treatments.
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
            backgroundImage: `url('assets/img/types/007.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Pet Care
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Pet Waste Management<br></br>Minimize Flies with Proper Disposal
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Properly dispose of pet waste, as it can attract flies. Use covered pet waste containers.</p>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- promotion area end  --> */}

                <h4 className="tp-sv__subtitle pt-100">
                Flies Control in the UAE  A Pest-Free Promise
                </h4>
                <p>
                Remember that fly control is an ongoing process, and it's essential to address both adult flies and their breeding sites. Consistent sanitation and preventive measures are key to long-term fly control in the UAE.
                </p>
                <p>
                It's essential to follow the advice of professionals and be patient during the eradication process. Early intervention and preventive measures are key to avoiding bedbug infestations in the UAE or any other location.
                </p>

 
                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/types/bg.jpg")`,
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
