import React from 'react'

function page() {
  return (
    <div class="p-10">
      <h3>글 작성</h3>
      <form action="/api/post/new" method='POST'>
        <div class="flex flex-col justify-start space-y-8">
          <input class="w-80 h-10 p-4 text-black" maxLength="20" name="title" placeholder="title" data-cy="input-title" />
          <input class="w-[30rem] h-auto p-4 text-black flex-wrap" maxLength='40' name="content" placeholder='content' data-cy="input-content" />
          <button class="w-11" type="submit">버튼</button>
        </div>
      </form>
    </div>
  )
}

export default page