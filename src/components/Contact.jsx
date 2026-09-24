import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            title="Location map"
            src="https://www.google.com/maps?q=857%20N%20Grant%20St%2C%20Denver%2C%20CO%2080203%2C%20USA&z=18&output=embed"
            width="100%"
            height="360"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </figure>
      </section>
    </>
  );
};

export default Contact;
