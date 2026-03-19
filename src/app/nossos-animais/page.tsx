/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import dynamic from 'next/dynamic';

const NossosAnimaisClient = dynamic(() => import('./ClientPage'), { ssr: false });

export default function Page() {
  return <NossosAnimaisClient />;
}
