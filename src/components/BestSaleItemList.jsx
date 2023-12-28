import BestSaleItem from "../BestSaleItem";
import PropTypes from 'prop-types';

const BestSaleItemList = ({ saleData }) => {
    //console.log(saleData);
    return (
        <div className="grid grid-cols-1">
            {saleData?.map((product, index) => {
                return (
                    <BestSaleItem
                        key={index}
                        image={product.image}
                        name={product.productName}
                        price={product.productPrice}
                        discount={product.discountPrice}
                    />
                );
            })}
        </div>
    );
};

BestSaleItemList.propTypes = {
    saleData: PropTypes.array.isRequired,
  };

export default BestSaleItemList;