import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddForm = props => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        photo: "",
        price: 1
    });
    const [errors, setErrors] = useState({});
    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", form)
            .then(res => {
                // we did it wrong
                if(res.data.err) {
                    console.log("Something went wrong!")
                    setErrors(res.data.err.errors)
                } else {
                    // we did it right
                    console.log("we made it!")
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={form.name} onChange={onChangeHandler} />
                    { errors.title ? <span>{errors.title.message}</span> : "" }
                </div>
                <div>
                    <label htmlFor="photo">Product Photo</label>
                    <input type="text" name="photo" value={form.photo} onChange={onChangeHandler} />
                    { errors.photo ? <span>{errors.photo.message}</span> : "" }
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" value={form.price} onChange={onChangeHandler} />
                    { errors.price ? <span>{errors.price.message}</span> : "" }
                </div>
                <div>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
        </div>

    );
}

export default AddForm;