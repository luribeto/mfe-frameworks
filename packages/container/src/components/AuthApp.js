import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  debugger
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { onSignIn });
  }, []);

  return <div ref={ref} />;
};
