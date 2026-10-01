'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, Mail, MapPin, Camera as Instagram, MessageCircle, Package, Store, Gift, Boxes, Check, Plus } from 'lucide-react';

const phone = '919904262935';
const whatsapp = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const generalMessage = 'Hello Ashok Enterprise, I would like to enquire about your products and pricing.';
const instagram = 'https://www.instagram.com/ashokenterprise__surat/';
const maps = 'https://www.google.com/maps/search/?api=1&query=B-151%2C%20Kuber%20Nagar%2C%20Katargam%20Darwaja%2C%20Surat%2C%20Gujarat%20395004';
const categories = [
  { name: 'Kitchen & containers', label: 'A place for every little thing.', description: 'Plastic containers and useful kitchen storage for everyday needs.', image: '/containers.webp', className: 'mint', enquiry: 'plastic containers and kitchen essentials' },
  { name: 'Home storage', label: 'Less clutter. More room.', description: 'Boxes, baskets and organisers that make the most of your space.', image: '/baskets.webp', className: 'blue', enquiry: 'home storage boxes, baskets and organisers' },
  { name: 'Household utility', label: 'Made for the everyday.', description: 'Practical utility products for homes, local shops and retailers.', image: '/storage.webp', className: 'pink', enquiry: 'plastic household utility products' },
  { name: 'Bottles & lunch boxes', label: 'Take a little convenience along.', description: 'Useful everyday items to explore for personal use or gifting.', image: '/lunch.webp', className: 'yellow', enquiry: 'bottles, lunch boxes and available gifting items' },
];
const faqs = [
  ['Do you supply wholesale quantities?', 'Yes. We supply local shops, retailers and business clients. Share the product type and quantity with us on WhatsApp for available options and a quotation.'],
  ['Can you help with corporate gifting?', 'Yes. We offer practical household and utility products for employee gifts, customer gifts, promotional requirements and special occasions. Tell us your quantity, occasion and budget to discuss suitable options.'],
  ['Do you supply businesses and diamond exporters?', 'Yes. We supply plastic containers and utility products to diamond exporters and other Surat businesses for their regular storage and operational requirements.'],
  ['How do I check prices, stock and delivery?', 'Contact Ashokbhai on WhatsApp or by phone. Pricing, minimum order quantities, product availability and delivery arrangements can be confirmed for your specific enquiry.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryReady, setEnquiryReady] = useState<string | null>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hello Ashok Enterprise,\nName: ${form.get('name')}\nBusiness: ${form.get('business') || 'Individual enquiry'}\nInterested in: ${form.get('category')}\nQuantity: ${form.get('quantity') || 'Please discuss'}\nRequirement: ${form.get('message') || 'Please share available options and pricing.'}`;
    const url = whatsapp(message);
    setEnquiryReady(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="topbar"><div className="shell flex items-center justify-between gap-3"><span>Household essentials. Wholesale supply. Corporate gifting.</span><a href="tel:+919904262935"><Phone size={13}/> +91 99042 62935</a></div></div>
    <header className="header">
      <div className="shell nav-row">
        <a href="#" className="brand" aria-label="Ashok Enterprise home"><span className="logo-window"><Image src="/logo.png" width={150} height={150} alt="" priority/></span><span className="brand-wordmark">ASHOK<small>ENTERPRISE</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#products">Our products</a><a href="#wholesale">For businesses</a><a href="#gifting">Corporate gifting</a><a href="#about">About us</a></nav>
        <a className="button button-dark nav-cta" href={whatsapp(generalMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/> Let's talk</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav shell" aria-label="Mobile navigation">{[['Our products','#products'],['For businesses','#wholesale'],['Corporate gifting','#gifting'],['About us','#about'],['Contact us','#contact']].map(([label,href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>
    <main id="main">
      <section className="hero shell">
        <div className="hero-copy"><div className="eyebrow"><span className="small-line"/> YOUR EVERYDAY, BETTER ORGANISED</div><h1>Little essentials.<br/>A big difference<span className="orange-text">.</span></h1><p>Thoughtful products for your home.<br className="desktop-break"/> Dependable supplies for your business.</p><div className="hero-buttons"><a className="button button-orange" href="#products">Explore our products</a><a className="text-link" href="#wholesale">Looking to buy in bulk?</a></div><div className="hero-location"><MapPin size={16}/> Based in Surat. Here for homes & businesses.</div></div>
        <div className="hero-visual" aria-label="Everyday storage essentials"><div className="hero-photo"><Image src="/hero.webp" alt="Practical containers for organising household essentials" fill sizes="(max-width: 800px) 100vw, 55vw" priority/><span className="photo-label">A little order.<br/>A lot of ease.</span></div><div className="hero-note"><Package size={25}/><span>Useful by nature.<br/><strong>Everyday by design.</strong></span></div><span className="hero-stamp">HOME · WORK · EVERYDAY</span></div>
      </section>
      <div className="value-strip"><div className="shell value-grid"><span><Package size={20}/> Quality products</span><span><Store size={20}/> Competitive pricing</span><span><Boxes size={20}/> Retail & wholesale</span><span><Gift size={20}/> Practical gifting</span></div></div>
      <section id="products" className="section shell">
        <div className="section-heading" data-reveal><div><div className="eyebrow">THE EVERYDAY COLLECTION</div><h2>Simple things.<br/>So many possibilities.</h2></div><p>From a tidier kitchen to a better-stocked shop, discover essentials that work a little harder for you.</p></div>
        <div className="product-grid">{categories.map((item, i) => <article className="product-card" data-reveal key={item.name} style={{'--delay': `${i * 65}ms`} as React.CSSProperties}><a className={`product-image ${item.className}`} href={whatsapp(`Hello Ashok Enterprise, I am interested in ${item.enquiry}. Please share available options and pricing.`)} target="_blank" rel="noopener noreferrer" aria-label={`Enquire about ${item.name}`}><Image src={item.image} alt={item.name} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 25vw"/><span className="category-index">0{i+1}</span></a><h3>{item.name}</h3><p className="product-tagline">{item.label}</p><p>{item.description}</p><a className="product-link" href={whatsapp(`Hello Ashok Enterprise, please share your available ${item.enquiry} and pricing.`)} target="_blank" rel="noopener noreferrer">Enquire about this range <Plus size={17}/></a></article>)}</div>
        <p className="catalog-note">Explore the range with us. Available designs, sizes and prices are confirmed on enquiry.</p>
        <div className="crates-row" data-reveal><div className="crate-icon"><Boxes size={42} strokeWidth={1.3}/></div><div><span className="eyebrow">FOR THE HEAVIER EVERYDAY</span><h3>Large blue plastic crates</h3><p>For industrial storage, commercial use and transportation requirements.</p></div><a href={whatsapp('Hello Ashok Enterprise, I would like to enquire about large blue plastic crates. Please share available sizes and pricing.')} target="_blank" rel="noopener noreferrer" className="button button-outline">Enquire about crates</a></div>
      </section>
      <section id="wholesale" className="business-section"><div className="shell business-grid"><div data-reveal><div className="eyebrow">YOUR BUSINESS, WELL SUPPLIED</div><h2>Behind a busy business,<br/>there’s a reliable supplier.</h2><p>We supply plastic containers, household products and utility items to Surat’s businesses and retailers. Tell us what you need, and we’ll help you find the right options at competitive prices.</p><a className="button button-orange" href={whatsapp('Hello Ashok Enterprise, I would like a wholesale quotation for my business.')} target="_blank" rel="noopener noreferrer">Discuss your bulk requirement</a></div><div className="business-list" data-reveal><div><Store/><span><h3>Local shops & retailers</h3><p>Everyday household products for your shelves.</p></span></div><div><Package/><span><h3>Diamond exporters & businesses</h3><p>Containers and utility items for regular operations.</p></span></div><div><Boxes/><span><h3>Industrial & commercial use</h3><p>Large blue crates for storage and transportation.</p></span></div></div></div></section>
      <section id="gifting" className="section shell gifting-grid">
        <div className="gifting-image" data-reveal><Image src="/gifting.webp" alt="Everyday lunch and storage products suitable for practical gifting" fill sizes="(max-width: 800px) 100vw, 50vw"/><span className="gift-caption"><Gift size={19}/> A useful gift is a thoughtful gift.</span></div>
        <div className="gifting-copy" data-reveal><div className="eyebrow">GIFTS THAT BECOME PART OF THE EVERYDAY</div><h2>Give something<br/>they’ll actually use.</h2><p>A thoughtful gesture for your team. A useful thank-you for your customers. Our corporate gifting range brings practicality to every occasion.</p><ul className="gift-options"><li><Check size={17}/> Employee & team gifts</li><li><Check size={17}/> Customer appreciation</li><li><Check size={17}/> Promotional requirements</li><li><Check size={17}/> Festivals & special occasions</li></ul><a className="button button-dark" href={whatsapp('Hello Ashok Enterprise, I need corporate gifting options. Please help me choose products for my quantity and budget.')} target="_blank" rel="noopener noreferrer">Find your gifting options</a></div>
      </section>
      <section id="about" className="about-section"><div className="shell about-grid"><div data-reveal><div className="eyebrow">ROOTED IN SURAT</div><h2>Your local connection<br/>to everyday essentials.</h2></div><div data-reveal><p>Ashok Enterprise is a Surat-based supplier and wholesaler of plastic household products, storage solutions, utility items and gifting products.</p><p>We serve individual customers, local retailers and businesses with one simple goal: quality products, competitive pricing and dependable service.</p><div className="owner"><span className="owner-monogram">AS</span><span><strong>Ashokbhai Arjanbhai Savani</strong><small>Owner, Ashok Enterprise</small></span></div></div></div></section>
      <section className="section shell faq-grid"><div data-reveal><div className="eyebrow">A FEW HELPFUL ANSWERS</div><h2>Good to know.</h2><p>Have something else in mind?<br/><a className="text-link" href={whatsapp(generalMessage)} target="_blank" rel="noopener noreferrer">Talk to us on WhatsApp.</a></p></div><div className="faq-list" data-reveal>{faqs.map(([question,answer]) => <details key={question}><summary>{question}<Plus size={19}/></summary><p>{answer}</p></details>)}</div></section>
      <section id="contact" className="contact-section"><div className="shell contact-grid"><div data-reveal><div className="eyebrow">LET’S FIND WHAT YOU NEED</div><h2>A small enquiry.<br/>A useful beginning.</h2><p>Share your requirements for product options, wholesale pricing or corporate gifts.</p><div className="contact-links"><a href="tel:+919904262935"><Phone size={21}/><span><small>CALL / WHATSAPP</small>+91 99042 62935</span></a><a href="mailto:ashokenterprise7575@gmail.com"><Mail size={21}/><span><small>EMAIL US</small>ashokenterprise7575@gmail.com</span></a><a href={maps} target="_blank" rel="noopener noreferrer"><MapPin size={21}/><span><small>FIND US IN SURAT</small>B-151, Kuber Nagar, Katargam Darwaja,<br/>Surat, Gujarat 395004</span></a></div><a className="instagram-link" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={20}/> Keep up with us on Instagram</a></div><form className="enquiry-form" onSubmit={submitEnquiry} data-reveal><h3>Tell us what you’re looking for</h3><div className="form-two"><label>Your name *<input name="name" placeholder="Your full name" required maxLength={100} autoComplete="name"/></label><label>Business / company<input name="business" placeholder="If applicable" maxLength={150} autoComplete="organization"/></label></div><div className="form-two"><label>Interested in<select name="category" defaultValue="Household products"><option>Household products</option><option>Kitchen & containers</option><option>Home storage</option><option>Large blue plastic crates</option><option>Wholesale supply</option><option>Corporate gifting</option><option>Other requirement</option></select></label><label>Approx. quantity<input name="quantity" placeholder="e.g. 100 pieces" maxLength={100}/></label></div><label>Your requirement<textarea name="message" placeholder="Products, sizes, budget or anything we should know…" rows={4} maxLength={1500}/></label><button className="button button-dark" type="submit"><MessageCircle size={19}/> Continue on WhatsApp</button><p className="form-note">Your enquiry opens in WhatsApp. Review it and send it to us there.</p>{enquiryReady && <p className="form-note" role="status">Enquiry ready. <a href={enquiryReady} target="_blank" rel="noopener noreferrer">Open WhatsApp to send it.</a></p>}</form></div></section>
    </main>
    <footer><div className="shell footer-top"><a href="#" className="footer-brand">ASHOK<span>ENTERPRISE</span></a><p>Everyday essentials.<br/>Dependable connections.</p><nav aria-label="Footer navigation"><a href="#products">Products</a><a href="#wholesale">Wholesale</a><a href="#gifting">Gifting</a><a href="#contact">Contact</a></nav><a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Ashok Enterprise on Instagram"><Instagram size={22}/></a></div><div className="shell footer-bottom"><span>© 2026 Ashok Enterprise. All rights reserved.</span><a href="https://www.viratsoftwaresolutions.com/" target="_blank" rel="noopener noreferrer">Design and developed by <strong>Virat Software Solutions</strong></a><span>Katargam, Surat, Gujarat</span></div></footer>
    <a className="floating-whatsapp" href={whatsapp(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="Chat with Ashok Enterprise on WhatsApp"><MessageCircle size={25}/></a>
  </>;
}
