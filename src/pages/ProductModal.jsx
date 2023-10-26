import React from 'react';

const ProductModal = () => {
    const {id}=useParams();
    const [productDetails,setProductDetails]=useState([]);
    useEffect(()=>{
        fetch(`https://vedic-energie-server-6c3c7yp8s-polyakhtar.vercel.app/productdetails/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProductDetails(data)
        })
    },[])
    return (
        <div>
            {/* {
                productDetails.map(product=><div>
                     <h1>{product.productName}</h1>
                    </div>
                    )
            } */}
           <h1>hello</h1>
        </div>
    );
};

export default ProductModal;