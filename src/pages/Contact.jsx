import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    studentClass: '',
    syllabus: '',
    medium: '',
    district: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '917034600908';

    const message =
      `🎓 *New Enquiry - Eduneo*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Mobile:* ${formData.mobile}\n` +
      `📍 *District:* ${formData.district}\n` +
      `🏫 *Class:* ${formData.studentClass}\n` +
      `📚 *Syllabus:* ${formData.syllabus}\n` +
      `🗣️ *Medium:* ${formData.medium}\n` +
      (formData.message ? `💬 *Message:* ${formData.message}\n` : '') +
      `\n_Sent via Eduneo Contact Form_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

    setFormData({ name: '', mobile: '', studentClass: '', syllabus: '', medium: '', district: '', message: '' });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Top Geometric Banner */}
      <div className="contact-top-banner">
        <svg viewBox="0 0 1600 260" preserveAspectRatio="xMidYMid slice">
           <polygon points="0,0 100,0 100,160 0,160" fill="#f1f5f9" />
           <polygon points="0,160 0,260 100,260" fill="#55a8e0" />
           <polygon points="100,0 300,0 450,130 100,130" fill="#f7cd55" />
           <polygon points="100,130 450,130 300,260 100,260" fill="#e7612f" />
           <rect x="450" y="0" width="400" height="260" fill="#67a775" />
           <path d="M 850,0 A 130 130 0 0 1 850,260 Z" fill="#e7612f" />
           <path d="M 1110,0 A 130 130 0 0 0 1110,260 Z" fill="#e7612f" />
           <polygon points="1110,260 1310,260 1410,100" fill="#1b4a83" />
           <polygon points="1410,0 1600,0 1600,260" fill="#55a8e0" />
        </svg>
      </div>

      <div className="contact-split-page">
        {/* Left Half: Info */}
      <ScrollReveal direction="left" className="contact-half info-half bg-eduneo-blue">
        <div className="half-content-wrapper">
          <span className="contact-subtitle-split text-yellow">Get In Touch</span>
          <h1 className="contact-title-split text-white">Let's Start Your Journey.</h1>
          <p className="contact-desc-split text-light">
            Reach out to our academic counselors today. Fill out the form and we'll help you find the perfect program for your success.
          </p>

          <div className="split-info-list">
            <div className="split-info-item">
              <div className="split-icon-box bg-white-10">
                <Phone size={24} className="text-yellow" />
              </div>
              <div>
                <h4 className="text-white">Call</h4>
                <p className="text-light">7034600917</p>
              </div>
            </div>

            <div className="split-info-item">
              <div className="split-icon-box bg-white-10">
                <MessageCircle size={24} className="text-green-light" />
              </div>
              <div>
                <h4 className="text-white">WhatsApp</h4>
                <p className="text-light">7034600908</p>
              </div>
            </div>

            <div className="split-info-item">
              <div className="split-icon-box bg-white-10">
                <Mail size={24} className="text-orange-light" />
              </div>
              <div>
                <h4 className="text-white">Email</h4>
                <p className="text-light">condact.eduneoofficial@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Right Half: Form */}
      <ScrollReveal direction="right" className="contact-half form-half bg-white">
        <div className="half-content-wrapper form-wrapper">
          <h3 className="form-split-title">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="split-form">
            <div className="split-form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" id="name" name="name" 
                value={formData.name} onChange={handleChange} required 
                placeholder="Enter your full name"
              />
            </div>

            <div className="split-form-row">
              <div className="split-form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input 
                  type="tel" id="mobile" name="mobile" 
                  value={formData.mobile} onChange={handleChange} required 
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="split-form-group">
                <label htmlFor="district">District</label>
                <input 
                  type="text" id="district" name="district" 
                  value={formData.district} onChange={handleChange} required 
                  placeholder="Enter your district"
                />
              </div>
            </div>

            <div className="split-form-row">
              <div className="split-form-group">
                <label htmlFor="studentClass">Student Class</label>
                <select 
                  id="studentClass" name="studentClass" 
                  value={formData.studentClass} onChange={handleChange} required
                >
                  <option value="" disabled>Select Class</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Plus One">Plus One</option>
                  <option value="Plus Two">Plus Two</option>
                </select>
              </div>

              <div className="split-form-group">
                <label htmlFor="syllabus">Syllabus</label>
                <select 
                  id="syllabus" name="syllabus" 
                  value={formData.syllabus} onChange={handleChange} required
                >
                  <option value="" disabled>Select Syllabus</option>
                  <option value="State">State</option>
                  <option value="CBSE">CBSE</option>
                </select>
              </div>
            </div>

            <div className="split-form-group">
              <label htmlFor="medium">Medium of Instruction</label>
              <select 
                id="medium" name="medium" 
                value={formData.medium} onChange={handleChange} required
              >
                <option value="" disabled>Select Medium</option>
                <option value="English">English</option>
                <option value="Malayalam">Malayalam</option>
              </select>
            </div>

            <div className="split-form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" name="message" rows="4" 
                value={formData.message} onChange={handleChange} required 
                placeholder="Enter your message here"
              ></textarea>
            </div>

            <button type="submit" className="split-submit-btn">
              <Send size={18} /> Submit Enquiry
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
    </div>
  );
};

export default Contact;
