import React from 'react';
import BlogGrid from '../components/BlogGrid';
import CallToAction from '../components/CallToAction';
import ScrollReveal from '../components/ScrollReveal';

const BlogPage = () => {
  return (
    <>
      <ScrollReveal direction="fade">
        <div className="page-hero bg-yellow" style={{padding: '12rem 0 6rem 0', backgroundColor: 'var(--ps-yellow)', color: 'var(--primary-dark)'}}>
          <div className="container text-center" style={{textAlign: 'center'}}>
            <h1 style={{fontSize: '3.5rem', marginBottom: '1rem'}}>EduNeo Blog</h1>
            <p style={{fontSize: '1.25rem', opacity: 0.8}}>Study tips, educational news, and parenting advice.</p>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="up">
        <BlogGrid />
      </ScrollReveal>
      
      <ScrollReveal direction="fade" delay={0.2}>
        <CallToAction />
      </ScrollReveal>
    </>
  );
};

export default BlogPage;
