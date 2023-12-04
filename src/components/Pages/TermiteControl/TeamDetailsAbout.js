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
                <img src="/assets/img/ter/bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/ter/bg-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              JEZBEN Services team will assess the specific needs of your property and customize a treatment plan accordingly. Additionally, the choice of treatment method may depend on the type of termite species infesting your home, as different species may respond differently to treatments.{" "}
                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/ter/001.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Chemical Treatments
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Liquid Termiticides<br></br>Forming a Fortified Shield Against Termite Intrusion
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Pest control professionals may apply liquid termiticides to the soil around the foundation of your home. These chemicals create a protective barrier, preventing termites from entering your property. There are different types of liquid termiticides, and the choice depends on the severity of the infestation.</p>
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
            backgroundImage: `url('assets/img/ter/002.png')`,
          }}
         ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Baiting Systems
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Strategic Defense<br></br> How Termite Bait Stations Safeguard Your Property
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Termite bait stations are strategically placed in the ground around your property. These stations contain cellulose material that termites find attractive. When termites feed on the bait, they also ingest a slow-acting termiticide. This poisoned bait is carried back to the colony, eventually eliminating it.</p>
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
            backgroundImage: `url('assets/img/ter/003.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Physical Barriers
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Metal and Concrete Defense<br></br>Fortifying Your Home with Termite Shields
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Termite shields are metal barriers installed between the foundation and wooden elements of your home. They prevent termites from accessing your house through hidden entry points.</p>
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
            backgroundImage: `url('assets/img/ter/004.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Regular Monitoring
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Vigilant Oversight<br></br>The Importance of Regular Termite Activity Checks
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>After treatment, regular monitoring is crucial. JEZBEN professionals will inspect bait stations and the treated areas to ensure termites are not returning. Monitoring helps detect and address any new termite activity promptly.</p>
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
            backgroundImage: `url('assets/img/ter/005.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Maintenance
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Dry Defense<br></br>Minimizing Moisture to Deter Termite Infestation
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>moisture sources around your property is essential because termites are attracted to damp environments. Fix any leaks or drainage issues promptly.</p>
                  <p>Repair any damaged wood promptly. Termites are drawn to weakened or decaying wood.</p>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  


      {/* <!-- promotion area end  --> */}

                <h4 className="tp-sv__subtitle pt-100">
                In the battle against termite infestation, employing a multifaceted approach proves to be the key to success. From the application of potent chemical treatments like liquid termiticides, forming a protective barrier around your home's foundation, to the strategic placement of bait stations enticing termites with their slow-acting termiticides, each method plays a crucial role.
                </h4>
                <p>
                Physical barriers, such as termite shields and concrete fortifications, add an extra layer of defense, preventing termites from exploiting hidden entry points. However, the journey doesn't end with treatment – regular monitoring is imperative. JEZBEN professionals conduct thorough inspections, ensuring that treated areas and bait stations remain termite-free, thus preemptively addressing any signs of resurgence.
                </p>
                <p>
                Yet, the responsibility extends beyond professional intervention. Homeowners must actively participate in maintenance measures. Reducing moisture sources and promptly fixing leaks or drainage issues create an environment less conducive to termite attraction. Timely repairs to damaged wood further disrupt the appeal of weakened structures to these persistent pests.
                </p>

 
                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/ter/bg.png")`,
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
