import React from 'react';
import Link from 'next/link';

export default function Navbar () {
  return (
    <div class="bg-gray-300 text-slate-950 p-4">
      <Link href="/" class="border-r-black border-r-2 pr-2">Home</Link>
      <Link href="/list" class="border-r-black border-r-2 px-2">List</Link>
      <Link href="/write" class="px-2">write</Link>
    </div>
  )
}