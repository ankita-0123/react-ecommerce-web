import React, {createContext, useState, useEffect} from 'react';
export const DataContext = createContext();

const DataProvider = (props) => {
    const [products,setProducts] = useState([
        {
            "_id":"1",
             "title": "Colors",
             "images": [
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
                 ],
                 "description": "The only way to advertise is by not focusing on the product..",
                 "content": "Welcome to our shopping site. Here you can any product.",
             "colors": ["red", "black", "white"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 101,
             "count": 1
         },
         {
             "_id": "2",
             "title": "Black and white Colors",
             "images": [
                'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
                 ],
                 "description": "The only way to advertise is by not focusing on the product.",
                 "content": "Welcome to our shopping site. Here you can any product.",
             "colors": ["red", "black", "teal"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 102,
             "count": 1

         },
         {
             "_id": "3",
             "title": "Yellow and Black Colors",
             "images": [
                'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
                 ],
                 "description": "The only way to advertise is by not focusing on the product.",
                 "content": "Welcome to our shopping site. Here you can any product.",
             "colors": ["red", "black", "yellow"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 103,
             "count": 1

         },
         {
             "_id": "4",
             "title": "Blue Color",
             "images": [
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
                 ],
             "description": "The only way to advertise is by not focusing on the product.",
             "content": "Welcome to our shopping site. Here you can any product.",
             "colors": ["red", "black", "yellow"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 104,
             "count": 1

         },
         {
             "_id": "5",
             "title": "Colors",
             "images": [
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
                 ],
                 "description": "The only way to advertise is by not focusing on the product.",
                 "content": "Welcome to our shopping site. Here you can any product.",
             "colors": ["red", "black", "yellow"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 105,
             "count": 1

         },
         {
             "_id": "6",
             "title": "Blue Color",
             "images": [
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'
                 ],
                 "description": "The only way to advertise is by not focusing on the product.",
                 "content": "Welcome to our shopping site. Here you can any product.",
             "colors": ["red", "black", "yellow"],
             "sizes": ["XL", "L", "M", "XM", "LX"],
             "price": 106,
             "count": 1

         }
    ])

    const [cart, setCart] = useState([])
    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }
    useEffect(() =>{
        const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
     },[])
    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])


    const value={
        products:[products,setProducts],
        cart:[cart, setCart],
        addCart:addCart
    }
  return (
    <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider;
