"use client";

import { motion, useReducedMotion } from "framer-motion";

const reveal = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };
const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

function Heading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="heading"><p>{number}</p><h2>{children}</h2></div>;
}

export default function Home() {
  const reduced = useReducedMotion();
  return <main>
    <nav><a href="#top" className="logo">AV</a><div><a href="#about">About</a><a href="#work">Work</a><a className="nav-cta" href="mailto:vankit10@gmail.com">Let&apos;s talk ↗</a></div></nav>
    <section id="top" className="hero"><i className="orb" /><motion.p initial="hidden" animate="visible" variants={reveal} transition={transition}>IOS ENGINEER · INDIA</motion.p><motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{...transition, delay:.1}}>Building mobile<br /><em>experiences</em> that move.</motion.h1><motion.div initial="hidden" animate="visible" variants={reveal} transition={{...transition, delay:.2}} className="hero-bottom"><span>I craft polished, high-performance iOS apps for live, connected moments.</span><a href="#work" aria-label="Explore work">↓</a></motion.div></section>
    <motion.section id="about" className="section about" initial="hidden" whileInView="visible" viewport={{once:true,amount:.25}} transition={transition}><Heading number="01 / ABOUT">An engineer with an eye for the feel of a product.</Heading><motion.div variants={reveal} className="copy"><p>I&apos;m Ankit, an iOS developer with 1.5+ years of experience turning ambitious product ideas into reliable mobile experiences.</p><p>My focus is the kind of work that has to feel instant: streaming, real-time chat, location-aware features, and carefully considered interaction design.</p><small><b /> Available for select opportunities</small></motion.div></motion.section>
    <motion.section id="work" className="work" initial="hidden" whileInView="visible" viewport={{once:true,amount:.14}} transition={transition}><div className="section"><Heading number="02 / SELECTED WORK">Work made for the real world.</Heading><motion.article variants={reveal} className="project"><div className="project-copy"><span className="index">01</span><p>IOS · LIVE PRODUCT</p><h3>Whitetail<br />Tactical <em>Deer Optics</em></h3><article>A field-ready platform that helps outdoors teams see, coordinate, and react in real time.</article><ul><li>Real-time GPS tracking &amp; geofencing</li><li>Live streaming &amp; camera processing</li><li>Firebase and Socket.IO chat</li></ul><a href="https://apps.apple.com/us/app/whitetail-tactical-deer-optics/id6467631622" target="_blank" rel="noreferrer">View on the App Store ↗</a></div><motion.div whileHover={reduced ? {} : {rotate:-2,y:-8}} className="device-stage"><div className="rings" /><div className="phone"><i /><div className="screen"><b>LIVE FIELD MAP</b><span className="pin">⌖</span><div className="pulse" /><footer><strong>4</strong> hunters active <em>• Live</em></footer></div></div></motion.div></motion.article></div></motion.section>
    <motion.section className="section skills" initial="hidden" whileInView="visible" viewport={{once:true,amount:.25}} transition={transition}><Heading number="03 / TOOLKIT">The details behind the experience.</Heading><div className="skill-grid">{[["01","Native iOS","Swift · SwiftUI · UIKit · Combine"],["02","Real-time systems","Live video · Socket.IO · Firebase · Push"],["03","Product delivery","Xcode · Git · App Store · Analytics"]].map(([n,t,d])=><motion.div variants={reveal} className="skill" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></motion.div>)}</div></motion.section>
    <footer className="contact"><p>HAVE A PROJECT IN MIND?</p><a href="mailto:vankit10@gmail.com">Let&apos;s make it memorable ↗</a><div><span>© 2026 Ankit Verma</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
