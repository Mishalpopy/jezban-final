  import React from "react";

  import { Link } from "react-router-dom";

  // single service
  export function ServiceItem({ icon, title, desc }) {
    return (
      <div className="col-xl-3 col-md-6">
        <div className="tp-service text-center white-bg pt-60 pb-45 pl-25 pr-25 mb-30">
          <div className="tp-service__icon">
            <i className={icon}></i>
          </div>
          <h3 className="tp-service__title pt-40 pb-25">
            <Link to="/">{title}</Link>
          </h3>
          <p>{desc}</p>
          <Link className="tp-btn-sm-black" to="/">
            <span>
              <svg
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.3536 4.35355C35.5488 4.15829 35.5488 3.84171 35.3536 3.64644L32.1716 0.464463C31.9763 0.269201 31.6597 0.269201 31.4645 0.464463C31.2692 0.659726 31.2692 0.976308 31.4645 1.17157L34.2929 4L31.4645 6.82842C31.2692 7.02369 31.2692 7.34027 31.4645 7.53553C31.6597 7.73079 31.9763 7.73079 32.1716 7.53553L35.3536 4.35355ZM4.37114e-08 4.5L35 4.5L35 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            View MOre
          </Link>
        </div>
      </div>
    );
  }

  const ServicesHome = () => {
    return (
      <>
        {/* <!-- service area start  --> */}
        <div className="tp-service-ara grey-bg-4 pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tp-section-wrapper text-center mb-70">
                  <span className="tp-section-subtitle mb-25">OUR SERVICES</span>
                  <h2 className="tp-section-title">Explore Our Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <ServiceItem
                icon='/public/assets/img/bug/bg-1.png'
                title="Mosquito Control"
                desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
              />
              <ServiceItem
                icon="/assets/img/noun-mosquito-211.png"
                title="Cockroach Control"
                desc="Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Nibh nisl id venenatis sey."
              />
              <ServiceItem
                icon="/img/noun-ants-1996752.png"
                title="Ants Control"
                desc="
  Effective ant pest control: Safe, eco-friendly solutions to eliminate ants. Professional service for a pest-free home or business. Guaranteed results."
              />
              <ServiceItem
                icon="/img/noun-bed-bug-33761.png"
                title="Bedbugs Control"
                desc="Effective bedbug pest control services: Quick, discreet, and thorough eradication. Restore peace of mind with our expert solutions today."
              />
              <ServiceItem
                icon="/img/noun-bed-bug-33761.png"
                title="Termite Control"
                desc="Effective termite pest control ensures the elimination of destructive termites, safeguarding structures. Professional treatments prevent infestations, protecting property from costly damage."
              />
              <ServiceItem
                icon="/img/noun-rodent-6274320.png"
                title="Rodent Control"
                desc="Effective rodent pest control services: Swift, discreet, and tailored solutions. Safeguard your home or business with our expert extermination team."
              />
              <ServiceItem
                icon="/img/noun-snake-1998423.png"
                title="Snake Control"
                desc="
  Effective snake pest control ensures your property remains snake-free. Our experts use safe methods to identify, remove, and prevent snake infestations."
              />
              <ServiceItem
                icon="/img/noun-flies-3576184.png"
                title="Types Of Flies Control"
                desc="Use integrated pest management, eliminate breeding sites, employ natural predators, and use insecticides sparingly to effectively control flies in residential and commercial spaces."
              />

            </div>
          </div>
        </div>
        {/* <!-- service area end  -->   */}
      </>
    );
  };

  export default ServicesHome;
