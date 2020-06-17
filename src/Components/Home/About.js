import React from 'react';

const About = () => {
    return (
        <div>
                <section className="products__row--items">
                    <img src="Images/Locks/doorlockbg.jpg" width={'50%'} alt="Visual representation of how doorlocks work"/>
                     <div className="products__row--caption">
                        <h1 className="section__heading">Smart Doorlocks!</h1>
                        <p className="section__description">Our latest products in the smart locks are
                        designed to keep you monitored on activity inside your home.
                        </p>
                    </div>
                </section>

                <section className="products__row--items">
                    <div className="products__row--caption">
                        <h1 className="section__heading">Smart Thermostats</h1>
                        <p className="section__description">Our latest thermostat
                            products are designed to be controlled through the use of mobile device.
                         </p>
                    </div>
                    <img src="Images/Thermostats/ecobee.jpg" width={'50%'} alt="Ecobee thermostat"/>
                </section>

                <section className="products__row--items">
                    <img src="Images/Cameras/ringcam.jpg" width={'50%'} alt="Ring door camera"/>
                     <div className="products__row--caption">
                        <h1 className="section__heading">Smart Cameras</h1>
                        <p className="section__description">Our latest products in the smart locks are
                            designed to keep you monitored on activity inside your home.
                        </p>
                    </div>
                </section>

                <section className="products__row--items">
                    <div className="products__row--caption">
                        <h1 className="section__heading">Smart Sensors</h1>
                        <p className="section__description">
                            Our latest motion detector products are designed to keep you secure in
                            the your by ensuring any threats are immediately notified to your phone!
                        </p>
                    </div>
                    <img src="Images/Sensors/globe.jpg" width={'50%'}  alt="globe electric sensor"/>
                </section>
        </div>

    )

}
export default About;