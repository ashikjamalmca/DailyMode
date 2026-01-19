'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import ContactOverlay from '../overlays/ContactOverlay';

export default function MainLayout({ children, darkNav = false }) {
  return (
    <>
      <CustomCursor />
      <Navbar dark={darkNav} />
      <main>{children}</main>
      <Footer />
      <ContactOverlay />
    </>
  );
}
