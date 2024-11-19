import React from "react";
import Layout from "../components/Layout";

// Mock Data
const companyInfo = {
  name: "My Website",
  description:
    "We are a leading platform for learning, sharing knowledge, and building communities.",
  mission:
    "Our mission is to empower individuals to grow, learn, and share knowledge with the world.",
};

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO",
    bio: "Alice is a visionary leader with a passion for innovation.",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO",
    bio: "Bob drives technology development and is always looking for new solutions.",
  },
  {
    id: 3,
    name: "Carla White",
    role: "Lead Designer",
    bio: "Carla ensures our platform looks beautiful and is easy to use.",
  },
];

// About page component
const About: React.FC = () => {
  return (
    <Layout>
      <div style={aboutPageStyle}>
        <h2>About {companyInfo.name}</h2>
        <p>{companyInfo.description}</p>
        <h3>Mission</h3>
        <p>{companyInfo.mission}</p>

        <h3>Our Team</h3>
        <div style={teamStyle}>
          {teamMembers.map((member) => (
            <div key={member.id} style={teamMemberStyle}>
              <h4>{member.name}</h4>
              <p>
                <strong>{member.role}</strong>
              </p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

// Inline styles for the About page
const aboutPageStyle: React.CSSProperties = {
  padding: "20px",
  maxWidth: "900px",
  margin: "auto",
};

const teamStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const teamMemberStyle: React.CSSProperties = {
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default About;
