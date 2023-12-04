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
                <img src="/assets/img/mos/bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/mos/bg-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              Mosquito control in the UAE is a vital aspect of maintaining a safe and comfortable environment, especially in a region where the warm climate and the potential for mosquito-borne diseases are prevalent. To effectively manage the mosquito population, various strategies are employed, encompassing both individual and community-based efforts.?{" "}
                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/mos/001.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Mosquito Repellents
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Stay Mosquito<br></br>Free with Effective Repellents.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>In the UAE, where warm weather and abundant water sources create ideal breeding conditions for mosquitoes, the use of mosquito repellents is a common practice. Individuals can safeguard themselves from mosquito bites by employing various repellent products, including sprays, lotions, or electronic repellent devices. These measures are particularly crucial during the peak mosquito season to reduce the risk of mosquito-borne diseases. Mosquito repellents serve as a personal defense mechanism against these bothersome insects, allowing residents and visitors to enjoy outdoor activities with greater comfort and peace of mind.</p>
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
            backgroundImage: `url('assets/img/mos/002.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Eliminate Breeding Sites
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Taking Action<br></br> Eradicating Mosquito Breeding Sites.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>One of the fundamental strategies for mosquito control in the UAE is the elimination of breeding sites. Mosquitoes thrive in stagnant water, and to curb their population, it is essential to remove or treat these breeding sites effectively. This practice requires the collective efforts of both residents and local authorities. By ensuring that containers, drains, and any other potential water-holding sources are regularly checked, emptied, or treated with larvicides, communities can significantly reduce the risk of mosquito-borne diseases and minimize the mosquito population.</p>
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
            backgroundImage: `url('assets/img/mos/004.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Mosquito Nets
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Nighttime Peace<br></br> Shielding Your Sleep with Mosquito Nets.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>For a peaceful night's sleep free from mosquito bites, many residents in the UAE rely on bed nets treated with insecticides. These nets act as a physical barrier, providing protection against mosquitoes during the night. This approach is particularly important for safeguarding infants, young children, and individuals who may not use other preventive measures consistently. Treated bed nets offer a practical and safe solution, ensuring that residents can rest comfortably without the intrusion of disease-carrying mosquitoes.</p>
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
            backgroundImage: `url('assets/img/mos/003.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Fogging and Spraying
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Rapid Response<br></br>Mosquito Control through Fogging and Spraying
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>In cases of high mosquito populations and the need for rapid intervention, local authorities in the UAE may resort to fogging and spraying of insecticides. These measures are typically conducted in areas where mosquito infestations are severe, such as stagnant water bodies or densely populated regions. Fogging and spraying effectively reduce adult mosquito populations, providing immediate relief from the nuisance of mosquito bites and mitigating the risk of mosquito-borne diseases. These interventions are carried out with strict adherence to safety and environmental regulations to minimize any potential side effects.</p>
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
            backgroundImage: `url('assets/img/mos/005.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Public Awareness
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Knowledge is Key<br></br>Raising Awareness for Mosquito Control.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Public awareness campaigns play a vital role in informing residents about the risks associated with mosquito-borne diseases and the preventive measures they can take. In the UAE, where mosquito control is a shared responsibility, these campaigns educate the community on how to protect themselves and their families. By disseminating information about the importance of using mosquito repellents, eliminating breeding sites, and taking other preventive actions, public awareness initiatives empower individuals to make informed decisions and contribute to a mosquito-free environment.</p>
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
            backgroundImage: `url('assets/img/mos/006.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Screened Windows and Doors
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Natural Ventilation<br></br>, Zero Mosquito Intrusions.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>To keep mosquitoes out of homes and create a safe haven from these insects, many residents in the UAE install screens on doors and windows. These screens act as physical barriers, allowing fresh air to flow while preventing mosquitoes from entering living spaces. In a region where open windows and doors are a common feature due to the pleasant climate, screened openings provide an effective defense against mosquitoes. This approach offers a comfortable and pest-free indoor environment, particularly during the evening when mosquitoes are most active.
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
            backgroundImage: `url('assets/img/mos/007.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Natural Predators
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Balancing the Ecosystem<br></br>Dragonflies as Mosquito Controllers.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Encouraging the presence of natural mosquito predators, such as dragonflies, is another ecologically sound approach to mosquito control in the UAE. Dragonflies are voracious insect-eaters and are known to feed on mosquitoes, effectively reducing their population. Creating habitats that attract dragonflies, such as ponds or marshy areas, can contribute to natural mosquito control. By fostering a balance in the ecosystem, the UAE can rely on these natural allies to help manage the mosquito population in a sustainable and environmentally friendly manner.</p>
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
            backgroundImage: `url('assets/img/mos/008.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Disease Surveillance
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Early Detection, Swift Response<br></br> Mosquito-Borne Disease Surveillance.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Regular monitoring of mosquito populations and the diseases they may carry is a crucial component of the UAE's mosquito control strategy. By conducting disease surveillance, local authorities can detect and respond to potential outbreaks of mosquito-borne illnesses promptly. This early intervention is vital for protecting public health and preventing the spread of diseases like dengue fever or Zika virus. Surveillance data informs decision-making and allows for targeted control measures when needed, ensuring the safety and well-being of residents and visitors.

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
                Creating a Mosquito-Free Haven in the UAE
                </h4>
                <p>
                In the United Arab Emirates, where a warm climate and abundant water sources create favorable conditions for mosquitoes, effective mosquito control is not just a choice; it's a necessity. The diverse range of mosquito control solutions presented here forms a comprehensive strategy to combat the persistent presence of these disease-carrying insects. From the personal protection offered by mosquito repellents to the ecological balance introduced by natural predators like dragonflies, each method plays a crucial role in ensuring the well-being and comfort of residents and visitors.
                </p>
                <p>
                By eliminating breeding sites, raising public awareness, and employing rapid intervention techniques such as fogging and spraying, the UAE can fortify itself against mosquito-borne diseases. And through the simple yet effective practice of using mosquito nets and screened windows and doors, individuals can secure their sanctuaries against these nocturnal intruders.
                </p>

                <p>
                In a region that cherishes outdoor living and vibrant communities, the battle against mosquitoes is a shared responsibility, emphasizing the importance of disease surveillance. Through early detection, swift responses, and the monitoring of mosquito populations, we safeguard public health, protecting our loved ones and guests from the threats mosquitoes pose.
                </p>
                <p>In the UAE, mosquito control is not just a service; it's a commitment to creating an environment where residents and visitors can savor the joys of life without the nuisance or health risks that mosquitoes bring. Together, we build a mosquito-free haven, where comfort, safety, and well-being reign supreme.</p>

                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/mos/bg.jpg")`,
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
