import React from 'react';
import { Video, Mic, Monitor, PenTool } from 'lucide-react';
import './VirtualClassFeatures.css';

const features = [
  { icon: <Video />, title: "HD Video Quality", desc: "Crystal clear video streaming for a classroom-like experience." },
  { icon: <Mic />, title: "Two-way Audio", desc: "Interact directly with teachers during live sessions." },
  { icon: <Monitor />, title: "Interactive Whiteboard", desc: "Visual explanations with real-time digital board." },
  { icon: <PenTool />, title: "Live Polling & Quizzes", desc: "Instant assessments to check conceptual understanding." }
];

const VirtualClassFeatures = () => {
  return (
    <section className="virtual-features modern-section">
      <div className="container">
        <h2 className="section-title">Our Virtual Classroom</h2>
        <p className="section-subtitle">Experience the next generation of online learning</p>
        
        <div className="vc-grid">
          {features.map((feature, idx) => (
            <div key={idx} className={`vc-card glass-card animate-slide-up vc-card-${idx}`} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="vc-icon-pulse">
                <div className="vc-icon">
                  {feature.icon}
                </div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualClassFeatures;
