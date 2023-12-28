
import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Item = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;


    const [isHovered, setIsHovered] = useState(null);

    const handleCardHover = (itemId) => {
        //console.log(itemId)
        setIsHovered(itemId);
    };
    const handleMouseLeave = () => {
        setIsHovered(null);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProducts();
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);



    function animateProducts(transformValue) {
        const products = document.querySelectorAll('.grid-cols-2 > div');
        products.forEach((product) => {
            product.style.transform = transformValue;
        });

        setTimeout(() => {
            products.forEach((product) => {
                product.style.transform = 'translateX(0)'; 
            });
        }, 300);
    }


    const handlePrevClick = () => {

        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        animateProducts('translateX(-100%)');
    };

    const handleNextClick = () => {

        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        animateProducts('translateX(100%)');
    };

    const startIdx = (currentPage - 1) * productsPerPage;
    const endIdx = startIdx + productsPerPage;
    const visibleProducts = products.slice(startIdx, endIdx);

    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex gap-10 items-center w-11/12 h-5/6 mx-auto">
                <button className='h-[50px] w-[50px] rounded-full border-1 border-black shadow-xl' onClick={handlePrevClick} disabled={currentPage === 1}>
                    <ArrowBackIosIcon />
                </button>

                <div style={{ transition: 'transform 0.5s ease-in-out' }} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-28'>

                    {visibleProducts.map((product, index) => (
                        <div key={index} className='flex gap-8' onMouseEnter={()=>handleCardHover(product.id)} onMouseLeave={handleMouseLeave}>
                            <div className='relative'>
                                <div className='w-[300px] h-[200px] overflow-hidden hover:opacity-30'>
                                    <img className='w-full h-full object-cover' alt="product image" src={product?.image} />
                                </div>
                                <div className={`flex gap-1 absolute top-20 px-16 ${isHovered===product.id ? 'visible' : 'invisible'}`}>
                                    <button className='h-[50px] w-[50px] rounded-full border-1 border-black bg-slate-300'>
                                        <FavoriteIcon />
                                    </button>
                                    <button className='h-[50px] w-[50px] rounded-full border-1 border-black bg-slate-300'>
                                        <AutorenewIcon />
                                    </button>
                                    <button className='h-[50px] w-[50px] rounded-full border-1 border-black bg-slate-300'>
                                        <SearchIcon />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <ul className='flex'>
                                    <li><StarBorderIcon /></li>
                                    <li><StarBorderIcon /></li>
                                    <li><StarBorderIcon /></li>
                                    <li><StarBorderIcon /></li>
                                    <li><StarBorderIcon /></li>
                                </ul>
                                <h3 className='text-black font-bold text-lg font-mono mx-1 mt-1'>{product?.productName}</h3>
                                <div className='flex gap-4 mx-1 mt-1'>
                                    <p className='text-red-600 font-bold text-2xl'>${product?.productPrice}</p>
                                    <p className='text-gray-400 font-bold text-base mt-[6px] line-through'>${product?.discountPrice}</p>
                                </div>
                                <p className='mx-1 mt-1 text-gray-400 font-normal'>{product?.productDescription}</p>
                                <button className={`h-[40px] w-[130px] rounded-3xl border-1 border-black bg-gray-900 text-white mx-1 mt-4 ${isHovered===product.id ? 'visible' : 'invisible'}`}>ADD TO CART</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='h-[50px] w-[50px] rounded-full border-1 border-black shadow-xl' onClick={handleNextClick} disabled={currentPage === totalPages}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default Item;
