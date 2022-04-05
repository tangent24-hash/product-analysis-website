import React from 'react';

const TopSection = () => {
    return (
        <div className='row p-4'>
            <div className='col-12 col-md-6 d-flex flex-column align-items-center justify-content-center'>
                <div className='h1 text-primary'>
                    Welcome to XPS Reviews
                </div>
                <p className='text-muted'>XPS laptops are precision crafted with premium materials, featuring stunning displays and the performance you demand to express your creative self and your big ideas. See some reviews here what people say about it.</p>
            </div>
            <div className='col-12 col-md-6'>
                <img className='img-fluid' src='https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/general/xps-13_black_open-up-left-v2.jpg?fmt=pjpg&pscan=auto&scl=1&wid=3334&hei=2017&qlt=100,0&resMode=sharp2&size=3334,2017' alt='dell xpss 13 new'/>
            </div>
            
        </div>
    );
};

export default TopSection;