import React from 'react';

export default function Contact() {
  return (
   <>
   
   <div id='Contact'>
     <section className="container mt-3 section" id="contact">
      <h1 className="text-center">Contact Me</h1>
      <h3 className="text-center">This form actually works</h3>
      <div className="row mt-4">
        <div className="col-lg-6">
          {/* to edit google map go to https://www.embed-map.com type your location, generate html code and copy the html  */}
          <div style={{ maxWidth: '100%', overflow: 'hidden', color: 'red', width: 500, height: 500 }}>
            <div id="embedmap-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
              <iframe
                title="Google Map"
                style={{ height: '100%', width: '100%', border: 0 }}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=tirupati&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                allowFullScreen
              />
            </div>
            <a className="googlemaps-html" href="https://www.embed-map.com" id="get-data-forembedmap">
              https://www.embed-map.com
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <form id="portfolio_form">
            <input name="name" type="text" id="name" className="form-control form-control-lg" placeholder="Name" required />
            <input name="email" type="email" id="email" className="form-control mt-3" placeholder="Email" required />
            <input name="subject" type="text" id="subject" className="form-control mt-3" placeholder="Subject" required />
            <input name="project" type="text" className="form-control mt-3" placeholder="Project" required />
            <button type="submit" className="btn btn-success mt-3">Contact Me</button>
          </form>
        </div>
      </div>
    </section>
   </div>
   </>
  );
}
