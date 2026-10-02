'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Boxes, MessageCircle, PackageSearch, Search, X } from 'lucide-react';

type Product = {
  name: string;
  source: string;
  image?: string;
  category?: string;
  referenceUrl: string;
};
type Props = { rs: Product[]; supreme: Product[] };
const phone = '919904262935';
const enquiryLink = (product: Product) =>
  'https://wa.me/' + phone + '?text=' + encodeURIComponent(
    'Hello Ashok Enterprise, can you supply ' + product.name +
    ' (reference: ' + product.source + ')? Please share availability, sizes, quantity options and pricing.'
  );
const PAGE_SIZE = 18;
const omitAliases = new Set(['Toffee No.22', 'Tutti Fruity No1']);

export default function CatalogView({ rs, supreme }: Props) {
  const [search, setSearch] = useState('');
  const [source, setSource] = useState('All');
  const [family, setFamily] = useState('All ranges');
  const [shown, setShown] = useState(PAGE_SIZE);
  const items = useMemo(
    () => [...rs.filter(item => !omitAliases.has(item.name)), ...supreme],
    [rs, supreme],
  );
  const families = useMemo(
    () => Array.from(new Set(supreme.map(item => item.category || '').filter(Boolean))),
    [supreme],
  );
  const results = useMemo(() => items.filter(item => {
    if (source !== 'All' && item.source !== source) return false;
    if (family !== 'All ranges' && item.category !== family) return false;
    const needle = search.trim().toLowerCase();
    return !needle || [item.name, item.source, item.category || ''].join(' ').toLowerCase().includes(needle);
  }), [items, search, source, family]);
  function chooseSource(value: string) {
    setSource(value);
    setFamily('All ranges');
    setShown(PAGE_SIZE);
  }
  function chooseFamily(value: string) {
    setFamily(value);
    setShown(PAGE_SIZE);
  }
  function clearFilters() {
    setSearch('');
    setSource('All');
    chooseFamily('All ranges');
  }
  const displayed = results.slice(0, shown);

  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <div className="shell catalog-nav">
          <Link href="/" className="catalog-brand">
            <Image src="/logo.png" alt="Ashok Enterprise" width={66} height={66} priority />
            <span>ASHOK<small>ENTERPRISE</small></span>
          </Link>
          <Link href="/" className="catalog-back"><ArrowLeft size={18} /> Back to homepage</Link>
          <a className="catalog-top-cta" href="https://wa.me/919904262935" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={17} /> WhatsApp enquiry
          </a>
        </div>
      </header>
      <section className="catalog-hero">
        <div className="shell">
          <p className="catalog-kicker">ASHOK ENTERPRISE / PRODUCT REFERENCES</p>
          <h1>Find the right product<br /><em>for every requirement.</em></h1>
          <p className="catalog-subtitle">
            Explore industrial plastic crate models and plastic packaging boxes from the provided reference catalogues.
            Tell us the model you need; we will confirm what we can supply, including price and quantity.
          </p>
          <div className="catalog-stats">
            <span><strong>{items.length}</strong> catalogue entries</span>
            <span><strong>{families.length}</strong> crate ranges</span>
            <span><strong>2</strong> reference collections</span>
          </div>
        </div>
      </section>
      <section className="shell catalog-content" aria-label="Browse product references">
        <div className="catalog-tools">
          <div className="catalog-search">
            <Search size={20} />
            <input value={search} onChange={event => { setSearch(event.target.value); setShown(PAGE_SIZE); }}
              aria-label="Search product models" placeholder="Search model, product or category..." />
            {search && <button type="button" aria-label="Clear search" onClick={() => setSearch('')}><X size={18} /></button>}
          </div>
          <div className="catalog-tabs" aria-label="Reference collection">
            {['All', 'RS Plastic Boxes', 'Supreme'].map(name => (
              <button type="button" key={name} aria-pressed={source === name} onClick={() => chooseSource(name)}>
                {name === 'All' ? 'All products' : name}
              </button>
            ))}
          </div>
        </div>
        <div className="catalog-filter-row">
          <p><strong>{results.length}</strong> matching products <span>· Reference models; availability on enquiry</span></p>
          <div className="catalog-filter-controls">
            {(source === 'Supreme' || source === 'All') && (
              <select aria-label="Filter by crate range" value={family} onChange={event => chooseFamily(event.target.value)}>
                <option>All ranges</option>
                {families.map(name => <option key={name}>{name}</option>)}
              </select>
            )}
            {(search || source !== 'All' || family !== 'All ranges') && (
              <button className="catalog-reset" type="button" onClick={clearFilters}>Reset filters</button>
            )}
          </div>
        </div>
        {results.length === 0 ? (
          <div className="catalog-empty"><PackageSearch size={42}/><h2>No matching products</h2>
            <p>Try another model number or remove the filters.</p>
            <button type="button" onClick={clearFilters}>Show all products</button>
          </div>
        ) : (
          <div className="catalog-grid">
            {displayed.map(item => <ProductCard key={item.source + ':' + (item.category || '') + ':' + item.name} product={item} />)}
          </div>
        )}
        {shown < results.length && (
          <div className="catalog-load">
            <p>Showing {displayed.length} of {results.length} products</p>
            <button type="button" onClick={() => setShown(value => value + PAGE_SIZE)}>Show more products</button>
          </div>
        )}
        <div className="catalog-disclaimer">
          Reference listings are for product enquiries, not a declaration of current inventory, dealer status or fixed prices.
          Product photography from external reference sites is shown for local review only; obtain usage permission before publishing.
        </div>
      </section>
      <footer className="catalog-footer">
        <div className="shell">
          <strong>ASHOK ENTERPRISE</strong>
          <span>Surat, Gujarat · <a href="tel:+919904262935">+91 99042 62935</a></span>
          <a href="https://www.viratsoftwaresolutions.com/" target="_blank" rel="noopener noreferrer">Design and developed by Virat Software Solutions</a>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [failedImage, setFailedImage] = useState(false);
  const showImage = Boolean(product.image) && !failedImage;
  return (
    <article className="catalog-card">
      <div className="catalog-card-photo">
        {showImage ? (
          // Product photos are stored locally; verify publication rights before deployment.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.image} alt={product.name + ' product reference'} loading="lazy" onError={() => setFailedImage(true)} />
        ) : (
          <div className="catalog-illustration"><Boxes size={62} strokeWidth={1.1} /><small>{product.category || 'Plastic box collection'}</small></div>
        )}
        <span className="catalog-origin">{product.source}</span>
      </div>
      <div className="catalog-card-body">
        <p className="catalog-family">{product.category || 'Plastic packaging and storage'}</p>
        <h3>{product.name}</h3>
        <p className="catalog-card-note">Ask for specifications, stock and wholesale pricing.</p>
        <div className="catalog-card-actions">
          <a href={enquiryLink(product)} target="_blank" rel="noopener noreferrer" className="catalog-enquire">
            Enquire <MessageCircle size={17} />
          </a>
          <a href={product.referenceUrl} target="_blank" rel="noopener noreferrer" className="catalog-source-link"
            title="Open original product reference" aria-label={'View source reference for ' + product.name}>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </article>
  );
}
