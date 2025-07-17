// src/components/AppWrapper.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AppWrapper = ({ children, scrollToSection }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionToScroll = location.state?.sectionToScroll;

    if (sectionToScroll && scrollToSection) {
      // Allow the DOM to render before scrolling
      setTimeout(() => {
        scrollToSection(sectionToScroll);

        // Clear state after scrolling so it doesn't happen again on refresh
        navigate(location.pathname, { replace: true, state: null });
      }, 100);
    }
  }, [location, navigate, scrollToSection]);

  return <>{children}</>;
};

export default AppWrapper;
