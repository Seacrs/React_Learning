import { useState, useEffect } from 'react'
import { BrandContext } from '../context'
import PropTypes from 'prop-types'

const BrandProvider = ({ children }) => {
    const [brand, setBrand] = useState(null);

    useEffect(()=>{
        const data = {"name": "tapascript", "color": "#765645"}
        setBrand(data);
    },[])

    return (
        <BrandContext value={brand}>
            { children }
        </BrandContext>
    );
};

BrandProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default BrandProvider;