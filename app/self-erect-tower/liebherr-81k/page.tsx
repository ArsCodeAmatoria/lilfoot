import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liebherr 81k Self-Erecting Crane | lilfoot',
  description: 'Detailed specifications and load tables for the Liebherr 81k self-erecting tower crane.',
};

export default function Liebherr81kPage() {
  redirect('/crane-tables');
} 