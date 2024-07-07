import ProductList from '@/components/ProductList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductPage() {
	return (
		<div>
			<h1>상품 목록</h1>
			<ProductList></ProductList>
		</div>
	);
}

export default ProductPage;
