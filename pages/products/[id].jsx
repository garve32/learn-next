import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import React from 'react'

export default function ProductDetailPage({msg, productInfo}) {
  const headerTitle = '상품 상세 정보 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <div>ProductDetailPage : {msg}</div>
      <p>{productInfo.name}</p>
      <p>{productInfo.price}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
    console.log(context.params.id);
    const id = context.params.id;
    const response = await axios.get(`http://localhost:4000/products/${id}`);

    return {
        props: {
           msg: '서버데이터',
           productInfo: response.data,
        },
    };
}