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
                <img src="/assets/img/ants/bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="tp-sv-inner-img w-img">
                <img src="/assets/img/ants/bg-2.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-sv__content">
              <p>
              Ants may be small, but when they invade your home, they can become a significant nuisance. In the United Arab Emirates, where the climate can be challenging, particularly during the scorching summer months, effective ants control becomes crucial. To manage ant infestations and keep your living spaces pest-free, a combination of preventive measures and targeted pest control strategies is the key.{" "}
                </p>
              {/* <!-- promotion area start  --> */}
      <div className="tp-promotion-area p-relative grey-bg-4">
        <div
          className="tp-promotion-bg grey-bg"
          style={{
            backgroundImage: `url('assets/img/ants/001.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Cleanliness
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Keeping Ants at Bay<br></br>A Clean Home's Role in Ant Control.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Maintaining a clean living environment is the first line of defense against ant infestations. Ants are naturally drawn to food scraps and crumbs, making the kitchen a common target. To thwart their advances, it's essential to keep kitchen surfaces free from crumbs and spills. A clean, well-kept home helps eliminate the attractive factors that invite ants in. By practicing good hygiene and sanitation, you can significantly reduce the risk of ant infestations and enjoy a pest-free living space.</p>
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
            backgroundImage: `url('assets/img/ants/002.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Seal Entry Points
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Guarding Against Intruders<br></br> Sealing Entry Points in Ant Control.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Ants are notorious for squeezing through the tiniest openings, so sealing potential entry points is crucial. Small cracks in doors, windows, and walls can be their gateways. By meticulously sealing these openings, you block their access routes and keep them at bay. Ant control begins with fortifying your property against these small but determined intruders. A well-sealed home is the foundation of effective ant control.</p>
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
            backgroundImage: `url('assets/img/ants/003.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Food Storage
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Ant-Proofing Your Kitchen<br></br>Airtight Food Storage Solutions.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Protecting your pantry and kitchen from ant invasions starts with proper food storage. Ants can easily infiltrate open packages and containers, making it imperative to store food in airtight containers. This simple practice not only preserves the freshness of your ingredients but also ensures that ants cannot access your food supplies. In the UAE's climate, where the warmth can encourage pests, food storage is a critical aspect of ant control.</p>
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
            backgroundImage: `url('assets/img/ants/004.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Remove Attractants
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Ant-Free Zones<br></br>Managing Attractants and Dirty Dishes.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Regularly emptying and cleaning pet food dishes and avoiding the habit of leaving food or dirty dishes out in the open are important steps in managing ant attractants. By removing these temptations, you make your living space less appealing to ants. Ants are drawn to accessible food sources, so minimizing their access points goes a long way in averting infestations and maintaining a clean and pest-free environment.</p>
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
            backgroundImage: `url('assets/img/ants/008.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Natural Remedies
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Ant-Repelling Magic<br></br>Cinnamon, Vinegar, and Coffee Grounds.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Incorporating natural ant-repelling remedies can enhance your ant control efforts. Common household items like cinnamon, vinegar, and coffee grounds have been known to deter ants. These substances can be strategically placed around potential entry points to create barriers that ants are reluctant to cross. Going natural is an eco-friendly and safe way to repel ants and protect your home.</p>
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
            backgroundImage: `url('assets/img/ants/005.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Ant Baits
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Outsmarting Ants<br></br>The Power of Baiting in Pest Control.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Ant baits and traps are effective tools in eliminating ant infestations. These baits use attractive substances to lure ants, which then carry the bait back to their colonies. The bait disrupts their populations from within, ultimately leading to colony elimination. It's essential to follow the manufacturer's instructions when using ant baits, as the proper placement and type of bait can vary based on the ant species.
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
            backgroundImage: `url('assets/img/ants/006.png')`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  JEZBEN Services
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Ants Beware<br></br>JEZBEN Services' Expert Ant Control.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>When ant infestations persist or become severe, it's advisable to seek professional assistance. JEZBEN Services offers expert ant control solutions tailored to the specific needs of your property. Our skilled technicians will assess the situation, identify the ant species, and employ appropriate treatments to eliminate the infestation. With our experienced team by your side, you can trust that your ant control needs are in capable hands.</p>
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
            backgroundImage: `url('assets/img/ants/007.png')`,
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-promotion-info pt-60 pb-80 pl-60">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-15">
                  Regular Maintenance
                  </span>
                  <h2 className="tp-pt-size mb-30">
                  Ant-Proofing for Life<br></br> Continuous Maintenance Strategies.
                  </h2>
                </div>
                <div className="tp-promotion-progress">
                  <div className="tp-progress-item p-relative mb-25">
                  <p>Ant control is an ongoing process that requires vigilance. Regularly inspect your property for signs of ant activity, even after you've addressed an infestation. Being proactive in your approach by continuously monitoring and taking preventive measures ensures long-term ant control. By making ant control an integral part of your home maintenance routine, you can enjoy a space that is consistently ant-free, regardless of the challenges posed by the UAE's climate.

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
                In the United Arab Emirates, where a hot and challenging climate makes pest control an essential concern, managing ant infestations is of paramount importance. The battle against these small but persistent pests involves a multifaceted approach, combining preventive measures with targeted strategies. From maintaining a pristine living environment to employing natural remedies, sealing entry points, and using professional services like JEZBEN, each step plays a vital role in creating a pest-free environment.
                </p>
                <p>
                The role of ants in the ecosystem is essential, but they belong in their natural habitats, not within our living spaces. By practicing cleanliness and proper food storage, you can significantly reduce the attraction for ants. Sealing entry points and using ant baits are additional defenses against their intrusion. The power of natural remedies adds an eco-friendly aspect to ant control, while professional services like JEZBEN bring expert solutions to severe infestations.
                </p>

                <p>
                Ant control is not a one-time task; it's an ongoing commitment. Regular maintenance and vigilance are essential to ensure long-term success in keeping ants at bay, especially in a region like the UAE, where the climate can pose challenges, particularly during the summer months.
                </p>
                <p>With these comprehensive ant control strategies, residents and businesses in the UAE can maintain a pest-free environment, enjoying a space that is clean, comfortable, and free from the disruptions that ants can bring. As we continue to adapt and evolve our methods, we uphold the promise of creating a pest-free haven in this vibrant and dynamic region.</p>

                <div className="tp-sv__video">
                  <div
                    className="tp_sv__video-bg"
                    // data-background="/assets/img/service/service-blog-bg.jpg"
                    style={{
                      backgroundImage: `url("/assets/img/ants/bg.png")`,
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
