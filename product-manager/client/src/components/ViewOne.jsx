import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewOne = props => {
    const [oneProduct, setOneProduct] = useState(null)
    const { _id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res => setOneProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])
    return(
        <div>
            {
                oneProduct ? <div>
                    <h2>{oneProduct.name}</h2>
                    <img src={oneProduct.photo} alt="Product Photo" width="300px"/>
                    <h3>Price: {oneProduct.price}</h3>
                </div> : ""
            }
        </div>
    );
}

export default ViewOne;