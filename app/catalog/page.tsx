import type { Metadata } from 'next';
import CatalogView from './catalog-view';
import rs from '../rs-reference-products.json';
import supreme from '../supreme-reference-products.json';
import './catalog.css';

export const metadata: Metadata = {
  title: 'Product Catalogue | Ashok Enterprise',
  description: 'Browse storage boxes and plastic crate product references. Enquire with Ashok Enterprise for pricing and availability.',
};

export default function CatalogPage() {
  return <CatalogView rs={rs} supreme={supreme} />;
}
