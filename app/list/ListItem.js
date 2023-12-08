'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import DetailLink from './DetailLink';
import { useRouter } from 'next/navigation';

function ListItem(props) {
  let router = useRouter();
  let { item } = props;

  const handleDeleteClick = async (_id) => {
    console.log(_id)
    const response = await fetch('/api/post/delete', {
      method : 'DELETE',
      body: _id.toString()
    })
    router.refresh();
  }
  
  return (
    <div>
      <div class='m-1 w-52 bg-white text-black p-5 rounded-[5px]'>
        <Link prefetch={false} href={`/detail/${item._id}`}>
          <Image src='/tomato.png' width={500} height={500} />
          <h4>{item.title}</h4>
          <p>{item.content}</p>
        </Link>
      </div>
      <div class="flex flex-row justify-around">
        <DetailLink />
        <Link prefetch={false} href={`/edit/${item._id}`}>
          <p class="text-white">수정</p>
        </Link>
        <span onClick={() => handleDeleteClick(item._id)} class="hover: cursor-pointer">🗑</span>
      </div>
    </div>
  )
}

export default ListItem