import age from './data';

function CartItem () {
  return (
    <div class="flex flex-row justify-around border-b-[1px] border-gray-500">
      <p>상품명 {age}</p>
      <p>가격</p>
      <p>개수</p>
    </div>
  )
}

function page () {
  return (
    <div>
      <h4 class="text-center my-5">Cart</h4>
      <CartItem />
    </div>
  )
}

export default page