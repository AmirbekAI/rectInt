import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard.jsx';
import SignupForm from './components/SignupForm';
import './components/ProfileCard.css';
import './components/BlogCard.css';
import './components/SignupForm.css';

function App() {
  return (
    <div>
      {/* Profile Cards Section */}
      <h2 style={{ padding: '20px', margin: '0' }}>Team Profiles</h2>
      <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <ProfileCard
          name="John Doe"
          image="https://picsum.photos/300/200?random=1"
          description="Frontend Developer with 5 years of experience in React"
        />
        
        <ProfileCard
          name="Jane Smith"
          image="https://picsum.photos/300/200?random=2"
          description="UX Designer passionate about creating beautiful interfaces"
        />
      </div>

      {/* Blog Cards Section */}
      <h2 style={{ padding: '20px', margin: '0' }}>Latest Blog Posts</h2>
      <div style={{ padding: '20px', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <BlogCard
          title="Getting Started with React"
          description="Learn the fundamentals of React, including components, props, and state management."
          imageUrl="https://picsum.photos/350/200?random=3"
          author="John Doe"
          date="Mar 15, 2024"
          readTime={5}
        />
        
        <BlogCard
          title="Advanced TypeScript Patterns"
          description="Dive deep into TypeScript's advanced features and patterns."
          imageUrl="https://picsum.photos/350/200?random=4"
          author="Jane Smith"
          date="Mar 14, 2024"
          readTime={8}
        />
      </div>

      {/* Sign Up Form Section */}
      <h2 style={{ padding: '20px', margin: '0' }}>Sign Up</h2>
      <div style={{ padding: '20px' }}>
        <SignupForm />
      </div>
    </div>
  );
}

export default App; 