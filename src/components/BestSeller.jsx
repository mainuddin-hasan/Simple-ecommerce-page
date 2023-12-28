import { useEffect, useState } from "react";
import BestSaleItemList from "./BestSaleItemList";
import { Pagination } from "@mui/material";
//import Pagination from "./Pagination";


const BestSeller = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        fetch('SaleData.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = products.slice(firstIndex, lastIndex);
    const totalItems = products.length;

    return (
        <div className="mt-40 flex gap-5">
            <div className="mx-auto">
                <img className='w-[700px] h-[400px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNicAA6WEjIlMHz8azt5ep71jTv465hocuVR206HETwQ&s" alt="Best Selling" />
            </div>
            <div className="mx-auto">
                <div className="flex gap-3 mx-auto">
                    <h1 className="text-red-600 font-bold">Best Selling products</h1>
                    <Pagination
                        count={Math.ceil(totalItems / itemsPerPage)}
                        page={currentPage}
                        onChange={(event, newPage) => setCurrentPage(newPage)}
                    />
                </div>
                
                <BestSaleItemList saleData={currentItems} />
            </div>
        </div>
    );
};

export default BestSeller;
