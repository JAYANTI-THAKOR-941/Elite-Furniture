import { useEffect, useState } from "react";
import './admin.css';

const ProductManagement = () => {

    const [products, setProducts] = useState(() => {
        let allProducts = localStorage.getItem('allproducts')
        return allProducts ? JSON.parse(allProducts) : [];
    });

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            name: name,
            description: description,
            category: category,
            price: price,
            image: image
        }

        setProducts([...products, newProduct]);
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImage("");
    }



    const handleDelete = (id) => {
        const filterProduct = products.filter((p) => p.id !== id);
        setProducts(filterProduct);
    }

    useEffect(() => {
        localStorage.setItem('allproducts', JSON.stringify(products));
    }, [products])
    return (
        <>
            <h1>Product Management</h1>
            <button onClick={()=>setOpen(true)}>Add New Product</button>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {
                    products.map((p) => (
                        <tr key={p.id}>
                            <td><img src={p.image} /></td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            <td><button>Edit</button></td>
                            <td><button style={{ backgroundColor: "red" }} onClick={() => handleDelete(p.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>

            {open && <form onSubmit={handleSubmit}>
                <h1>Add New Product</h1>
                <input type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter product description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Enter product category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder="Enter product image url" value={image} onChange={(e) => setImage(e.target.value)} />
                <button>Add Product</button>
                <button onClick={()=>setOpen(false)}>Cancel</button>
            </form>}
        </>
    )
}

export default ProductManagement;