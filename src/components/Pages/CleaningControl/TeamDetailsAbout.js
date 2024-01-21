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
                <img src="/assets/img/cleaning/bg1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/cleaning/bg2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              In the UAE, you can find a wide range of cleaning services to cater to various needs, from residential
to commercial and specialized cleaning. Here are some common types of cleaning services available
in the UAE                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/cleaning/001.png')`,
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
                
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative ">
                  <p>Regular House Cleaning: General cleaning of homes, including dusting, vacuuming, mopping, and
bathroom and kitchen cleaning</p>
          <p>Deep Cleaning: Thorough cleaning that covers hard-to-reach areas and includes cleaning
appliances, windows, and more.
</p>
<p>Carpet and Upholstery Cleaning: Specialized services for cleaning carpets, rugs, and upholstery.</p>
<p>Mattress Cleaning: Cleaning and sanitizing mattresses to remove dust mites and allergens</p>
<p>Window Cleaning: Professional window cleaning for residential properties.</p>
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
            backgroundImage: `url('assets/img/cleaning/002.png')`,
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
                  
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Office Cleaning: Regular cleaning of office spaces, including desks, common areas, and restrooms.</p>
                  <p>Retail Store Cleaning: Cleaning services for retail shops and malls.</p>
                  <p>Industrial Cleaning: Specialized cleaning for industrial facilities, warehouses, and factories.</p>
                  <p>Healthcare Facility Cleaning: Cleaning services tailored to healthcare facilities, clinics, and
hospitals, focusing on hygiene and infection control</p>
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
            backgroundImage: `url('assets/img/cleaning/003.png')`,
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

                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Post-Construction Cleaning: Cleaning services after construction or renovation projects.</p>
                  <p>Move-In/Move-Out Cleaning: Thorough cleaning when moving into or out of a property.</p>
                  <p>Marble and Stone Polishing: Cleaning and polishing services for marble and stone surfaces</p>
                  <p>Air Duct and HVAC Cleaning: Cleaning and sanitizing air ducts and HVAC systems</p>
                  <p>Pool and Water Tank Cleaning: Cleaning and maintenance of swimming pools and water tanks.</p>
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
            backgroundImage: `url('assets/img/cleaning/004.png')`,
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
          
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Car Wash and Detailing: Cleaning and detailing services for cars, including interior and exterior cleaning.</p>
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
            backgroundImage: `url('assets/img/cleaning/005.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Sofa and Furniture Cleaning:
                  </span>
                  
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Specialized services for cleaning and maintaining sofas, furniture, and upholstery.</p>

                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  


      {/* <!-- promotion area end  --> */}

                <h4 className="tp-sv__subtitle pt-100">
                In the UAE, a diverse array of cleaning services caters to residential, commercial, and specialized needs. From regular house cleaning to industrial and healthcare facility maintenance, along with specialized services like post-construction and pest control, the cleaning industry in the UAE provides comprehensive solutions for a clean and healthy environment.
                </h4>
                <p>
                In the dynamic landscape of the UAE, the extensive array of cleaning services reflects a commitment to maintaining pristine living and working environments. Residential offerings encompass everything from routine housekeeping to specialized tasks like mattress and carpet cleaning, ensuring homes remain sanctuaries of cleanliness. On the commercial front, tailored solutions for offices, retail spaces, industrial facilities, and healthcare establishments underline a dedication to hygiene standards. Specialized cleaning services, including post-construction and move-in/move-out cleaning, demonstrate a versatility that meets diverse needs. Additionally, car cleaning and maintenance services, along with dedicated efforts for sofa and furniture upkeep, contribute to an all-encompassing approach to cleanliness, reinforcing the UAE's reputation for excellence.                </p>
                <p>
                In the UAE, the diverse spectrum of cleaning services epitomizes a commitment to elevating living and working spaces to unparalleled standards. Residential cleaning services, ranging from routine upkeep to deep cleaning and specialized tasks like carpet and upholstery care, underscore a dedication to domestic sanctity. Meanwhile, commercial and industrial cleaning solutions tailored for offices, retail outlets, and healthcare facilities emphasize the importance of hygiene and cleanliness in public and professional spaces. Specialized services, including post-construction and air duct cleaning, showcase an attention to detail that extends to various sectors. Car and furniture cleaning services, along with dedicated pest control measures, round out a comprehensive approach, making the UAE a beacon of cleanliness and order.
                </p>

 
                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/cleaning/bg3.jpg")`,
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
