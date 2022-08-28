import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.7202133529386!2d-123.03993948445182!3d49.262748779329144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676d299f6e7db%3A0x5746e592ac042a3e!2s3154%20E%208th%20Ave%2C%20Vancouver%2C%20BC%20V5M%201X6!5e0!3m2!1sen!2sca!4v1661719722849!5m2!1sen!2sca"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
