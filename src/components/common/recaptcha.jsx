import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = (props) => {
  return (
    <div>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        onChange={props.input.onChange}
      />
    </div>
  );
}

export default Recaptcha;