import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/ProductInfo';

export default function ProductDetailPage({ productDetail }) {
  const headerTitle = '상품 상세 정보 페이지';

  return (
    <div>
      <ProductHeader title={headerTitle} />
      <ProductInfo productDetail={productDetail}></ProductInfo>
    </div>
  )
}

export async function getServerSideProps(context) {
    console.log(context.params.id);
    const id = context.params.id;

    const {data} = await fetchProductById(id);

    return {
        props: {
           productDetail: data,
        },
    };
}