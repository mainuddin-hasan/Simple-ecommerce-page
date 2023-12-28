import PropTypes from 'prop-types';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const BestSaleItem = ({ image, name, price, discount }) => {
    return (
        <div className='flex gap-10 p-4'>
            <div className='flex gap-4'>
                <img className='w-[100px] h-[100px]' src={image} alt={name} />
            </div>
            <div >
                <ul className='flex'>
                    <li><StarBorderIcon /></li>
                    <li><StarBorderIcon /></li>
                    <li><StarBorderIcon /></li>
                    <li><StarBorderIcon /></li>
                    <li><StarBorderIcon /></li>
                </ul>
                <h2 className='text-black font-bold text-lg font-mono'>{name}</h2>
                <div className='flex gap-4'>
                <h3 className='text-red-600 font-bold text-3xl'>${price}</h3>
                <h2 className='text-gray-400 font-bold text-base mt-[6px] line-through'>${discount}</h2>
                </div>
            </div>
        </div>
    );
};
BestSaleItem.propTypes = {
    image: PropTypes.any.isRequired,
    name: PropTypes.any.isRequired,
    price: PropTypes.any.isRequired,
    discount: PropTypes.any.isRequired,
};
export default BestSaleItem;