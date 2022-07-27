import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAll = props => {
    const [products, setProduct] = useState(null);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [update])
    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/products/delete/" + id)
            .then(() => setUpdate(!update))
            .catch(err => console.log("issue deleting", err))
    }
    return(
        <div>
            <h2>All Products</h2>
            <div className="flex">
            {
                products ? products.map((item, i) => <div key={i} className="card">
                    <Link to={`/product/${item._id}`}>
                        <h3>{item.name}</h3>
                        <img src={item.photo} alt="product photo" />
                        <h4>Price is required: {item.price}</h4>
                    </Link>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    <Link to={`/update/${item._id}`}><button>Edit</button></Link>
                </div>) : ""
        }
            </div>
        </div>
    );
}

export default ViewAll;