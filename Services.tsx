import React from 'react';
import "../styles/Services.css";
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <div className="services-container">
        {/* First Section */}
        <section className="service-section">
          <div className="service-content">
            <div className="service-text">
              <span className="subtitle">Our services</span>
              <h2 className="title">International services Ocean and air freight!</h2>
              <div className="decorative-line"></div>
              <p>
                New Generation Brokerage understands the importance of all facets of the supply chain. That's why we offer international 
                freight services tailored for businesses with global shipping needs. Our expertise ensures your products reach their 
                destination on time and in excellent condition. International freight shipping plays a crucial role in the global supply chain, 
                facilitating trade across borders. At New Generation Brokerage, we recognize its significance for businesses looking to expand globally.
              </p>
              <div className="button-group">
                <a href="/agreement" className="btn btn-primary"><i className="fas fa-file-contract"></i> Send an Agreement</a>
                <a href="/contact" className="btn btn-secondary"><i className="fas fa-envelope"></i> Contact us</a>
              </div>
            </div>
            <div className="service-image">
              <img src="\src\assets\ending image 1.jpg" alt="Container port with colorful shipping containers" />
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="reasons-section">
          <div className="reasons-header">
            <span className="subtitle">On the same as thousands of customers</span>
            <h2 className="title">3 reasons for why choose new generation brokerage for international freight?</h2>
            <div className="decorative-line center"></div>
          </div>

          <div className="reasons-content">
            <div className="reason-image">
              <img src="\src\assets\person_smiling.png" alt="Truck driver" className="driver-image" />
              <div className="image-badge truck-badge">
                <div className="badge-icon"><i className="fas fa-truck"></i></div>
                <div className="badge-text">Safe Logistics</div>
              </div>
              <div className="image-badge protection-badge">
                <div className="badge-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="badge-text">24/7 Protection</div>
              </div>
            </div>

            <div className="reasons-list">
              <div className="reason-item">
                <div className="reason-icon"><i className="fas fa-star"></i></div>
                <div className="reason-text">
                  <h3>Competitive pricing and flexible solutions</h3>
                  <p>
                    New Generation Brokerage offers competitive pricing and flexible solutions to meet the needs of all sizes. 
                    We work with you to understand your unique requirements and develop customized solutions that meet your needs.
                  </p>
                </div>
              </div>

              <div className="reason-item">
                <div className="reason-icon"><i className="fas fa-shield-alt"></i></div>
                <div className="reason-text">
                  <h3>Advanced security and safety measures for peace of mind</h3>
                  <p>
                    Using a knowledgeable and expert customs broker can assist you with tariffs, duties, taxes, and other international shipping requirements. Our team will be able to answer your questions and help you successfully plan your shipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="commitment-section">
          <div className="service-content reverse">
            <div className="service-text">
              <span className="subtitle">Our Commitment!</span>
              <h2 className="title">Our Commitment to Quality!</h2>
              <div className="decorative-line"></div>
              <p>
                New Generation Brokerage is committed to providing the highest quality international freight services to our clients. 
                We understand that your cargo is valuable, and we take every precaution to ensure it arrives at its destination safely and 
                securely. Our team of experienced professionals is dedicated to providing exceptional customer service and support throughout 
                the shipping process.
              </p>
              <p>
                We work closely with our clients to understand their unique needs and develop customized solutions that meet those needs 
                efficiently and cost-effectively. Our commitment to quality extends to every aspect of our business, from our customer 
                service to our operational processes. We are constantly striving to improve our services and provide the best possible 
                experience for our clients. When you choose New Generation Brokerage, you can trust that your cargo will be handled 
                securely. Our commitment to quality and reliability gives you confidence in us to deliver exceptional international freight 
                solutions that meet your unique needs.
              </p>
              <div className="button-group">
                <a href="/agreement" className="btn btn-primary"><i className="fas fa-file-contract"></i> Send an Agreement</a>
                <a href="/contact" className="btn btn-secondary"><i className="fas fa-phone-alt"></i> Contact us</a>
              </div>
            </div>
            <div className="service-image">
              <img src="\src\assets\ending image 2.jpg" alt="Cargo ship at port" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="freight-services-section">
          <div className="service-content">
            <div className="service-image">
              <img src="\src\assets\ending image 3.jpg" alt="Shipping containers at port" />
            </div>
            <div className="service-text">
              <span className="subtitle">Our Services!</span>
              <h2 className="title">Our International Freight Services!</h2>
              <div className="decorative-line"></div>
              <p>
                New Generation Brokerage offers a wide range of international freight solutions that cater to businesses of all sizes. Whether 
                by air, ocean, or ground, we provide flexible shipping options to ensure your goods reach their destination efficiently and safely. 
                Our services, combined with the expertise of our in-house customs broker, guarantee that your freight will arrive on time and in excellent condition.
              </p>
              <p>
                Our dedicated team of international logistics professionals and experienced customs brokers is committed to providing 
                personalized service. We collaborate closely with you to understand your specific needs and craft tailored solutions that 
                enhance your supply chain and improve operational efficiency. With New Generation Brokerage, you can rest assured that 
                your international freight is in the most capable hands.
              </p>
              <div className="button-group">
                <a href="/agreement" className="btn btn-primary"><i className="fas fa-file-contract"></i> Send an Agreement</a>
                <a href="/contact" className="btn btn-secondary"><i className="fas fa-globe"></i> Contact us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="expertise-section">
          <div className="service-content reverse">
            <div className="service-image">
              <img src="\src\assets\second right image.png" alt="Container ship at sea during sunset" />
            </div>
            <div className="service-text">
              <span className="subtitle">Our Transport Expertise!</span>
              <h2 className="title">Our International Transport Expertise!</h2>
              <div className="decorative-line"></div>
              <p>
                New Generation Brokerage has decades of experience in international logistics and transportation. Our highly trained 
                and experienced team of international freight forwarders, customs broker, and logistics professionals are dedicated to 
                delivering exceptional service and support, ensuring that your products reach their destination seamlessly. We use advanced 
                technology and tools to optimize routing and scheduling, allowing us to deliver streamlined and cost-effective 
                international transportation solutions. Our expertise allows you to be sure that your goods will be transported as effectively and 
                efficiently as possible.
              </p>
              <div className="button-group">
                <a href="/agreement" className="btn btn-primary"><i className="fas fa-file-contract"></i> Send an Agreement</a>
                <a href="/contact" className="btn btn-secondary"><i className="fas fa-headset"></i> Contact us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;