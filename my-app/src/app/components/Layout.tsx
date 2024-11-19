import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>My Website</h1>
        <nav>
          <ul style={navStyle}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={footerStyle}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Inline styles for simplicity
const headerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  padding: "10px 20px",
};

const navStyle: React.CSSProperties = {
  listStyleType: "none",
  display: "flex",
  gap: "20px",
  padding: 0,
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  textAlign: "center",
  padding: "10px 0",
  position: "absolute",
  width: "100%",
  bottom: 0,
};

export default Layout;
