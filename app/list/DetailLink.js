'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

function DetailLink() {
  let router = useRouter();
  return (
    <div>
      <button onClick={() => { router.refresh()}}>새로고침</button>
    </div>
  )
}

export default DetailLink