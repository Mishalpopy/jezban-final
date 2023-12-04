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
                <img src="/assets/img/cle/bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/cle/bg-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              In the UAE, you can find a wide range of cleaning services to cater to various needs, from residential to commercial and specialized cleaning. Here are some common types of cleaning services available in the UAE{" "}
                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/cle/001.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Residential Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Comprehensive Home Cleaning Services<br></br>From General to Specialized
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Regular House Cleaning: General cleaning of homes, including dusting, vacuuming, mopping, and bathroom and kitchen cleaning.
<b />   - Deep Cleaning: Thorough cleaning that covers hard-to-reach areas and includes cleaning appliances, windows, and more.
<b /> - Carpet and Upholstery Cleaning: Specialized services for cleaning carpets, rugs, and upholstery.
<b /> - Mattress Cleaning: Cleaning and sanitizing mattresses to remove dust mites and allergens.
<b /> - Window Cleaning: Professional window cleaning for residential properties.
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
            backgroundImage: `url('assets/img/cle/002.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Commercial Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Diverse Cleaning Solutions<br></br>Offices, Retail, Industrial, Healthcare
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Office Cleaning: Regular cleaning of office spaces, including desks, common areas, and restrooms.
<br />   - Retail Store Cleaning: Cleaning services for retail shops and malls.
<br />- Industrial Cleaning: Specialized cleaning for industrial facilities, warehouses, and factories.
<br /> - Healthcare Facility Cleaning: Cleaning services tailored to healthcare facilities, clinics, and hospitals,focusing on hygiene and infection control </p>
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
            backgroundImage: `url('assets/img/cle/003.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Specialized Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Specialized Cleaning Services<br></br>Post-Construction, Move-In/Out, Polishing, Air Ducts, and More
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Post-Construction Cleaning: Cleaning services after construction or renovation projects.
<br />   - Move-In/Move-Out Cleaning: Thorough cleaning when moving into or out of a property.
<br /> - Marble and Stone Polishing: Cleaning and polishing services for marble and stone surfaces.
<br /> - Air Duct and HVAC Cleaning: Cleaning and sanitizing air ducts and HVAC systems.
<br />  - Pool and Water Tank Cleaning: Cleaning and maintenance of swimming pools and water tanks.
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
            backgroundImage: `url('assets/img/cle/004.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Car Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Auto Care Excellence<br></br>Car Wash and Detailing Services
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Car Wash and Detailing: Cleaning and detailing services for cars, including interior and exterior cleaning.</p>
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
            backgroundImage: `url('assets/img/cle/005.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Sofa and Furniture Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Furniture Care Specialists<br></br>Sofa and Upholstery Cleaning
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Specialized services for cleaning and maintaining sofas, furniture, and upholstery.</p>
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
            backgroundImage: `url('assets/img/cle/006.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Pest Control
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  JEZBEN Solutions<br></br>Professional Expertise in Bedbug Extermination
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>    - Services to control and eliminate pests such as insects, rodents, and termites.
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
            backgroundImage: `url('assets/img/cle/007.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Commercial Kitchen Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Kitchen Cleaning Experts<br></br>Commercial Degreasing  Cleanup
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>   - Cleaning and degreasing services for commercial kitchens and restaurants.
8. 
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
            backgroundImage: `url('assets/img/cle/008.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Event Cleaning
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Preventive Measures<br></br> Safeguarding Against Future Bedbug Intrusions
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Event Sparkle: Pre & Post Cleaning Services

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
                <p>When hiring a cleaning service, it's important to consider your specific needs, budget, and the reputation of the service provider. JEZBEN Services offer customized cleaning packages to meet individual requirements.
                </p>

 
                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/cle/bg.png")`,
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
