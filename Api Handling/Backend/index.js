import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/product', (req, res) => {
    const product = [
        {
            id: 1,
            name: 'table wooden',
            price: 200,
            image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 2,
            name: 'table glass',
            price: 250,
            image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id: 3,
            name: 'Bed plywood',
            price: 800,
            image: 'https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    //http://localhost:3000/api/product?search=metal
    if (req.query.search) {
        const filterProducts = product.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(product);
    }, 3000);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});