import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div style={pageStyle}>
      {/* Navbar */}
      <motion.nav
        style={navBarStyle}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          style={logoStyle}
          whileHover={{ scale: 1.05 }}
        >
          Portfolio Builder
        </motion.div>
        <div style={navLinksContainer}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div style={heroContainer}>
        {/* Left Text Section */}
        <motion.div
          style={heroText}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 style={heroTitle}>
            Build Your Professional Portfolio
          </h1>
          <p style={heroDescription}>
            Showcase your skills, projects, and achievements with a beautifully crafted portfolio.
            Stand out to recruiters and clients with a personal brand that speaks for you.
          </p>
          <div style={{ marginTop: '40px' }}>
            <motion.button
              style={btnStyle}
              whileHover={{ scale: 1.05, backgroundColor: "#ff5c99" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/signup"}
            >
              🚀 Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          style={heroImageContainer}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
            alt="Portfolio Illustration"
            style={heroImage}
            whileHover={{ scale: 1.03 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

// Reusable NavLink with hover animation
const NavLink = ({ to, children }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link to={to} style={navLinkStyle}>
      {children}
    </Link>
  </motion.div>
);

// Styles
const pageStyle = {
  fontFamily: "'Segoe UI', sans-serif",
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  display: 'flex',
  flexDirection: 'column',
};

const navBarStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  padding: '15px 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const logoStyle = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: 'white',
  cursor: 'pointer',
};

const navLinksContainer = {
  display: 'flex',
  gap: '20px',
};

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

const heroContainer = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px',
  gap: '50px',
  flexWrap: 'wrap',
};

const heroText = {
  flex: '1 1 400px',
  color: 'white',
  maxWidth: '600px',
};

const heroTitle = {
  fontSize: '48px',
  fontWeight: 'bold',
  marginBottom: '20px',
  lineHeight: '1.2',
};

const heroDescription = {
  fontSize: '20px',
  lineHeight: '1.6',
};

const btnStyle = {
  backgroundColor: '#ff7eb3',
  color: 'white',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '25px',
  fontSize: '18px',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
};

const heroImageContainer = {
  flex: '1 1 400px',
  display: 'flex',
  justifyContent: 'center',
};

const heroImage = {
  maxWidth: '100%',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
};

export default HomePage;
