const Food = [
    {
        id: 1,
        name:"Burger",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 2,
        name:"Burger",
        type: 'Fruit',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 3,
        name:"Burger",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 4,
        name:"Burger",
        type: 'Non-Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 5,
        name:"Burger",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 6,
        name:"Fish",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 7,
        name:"Steak",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 8,
        name:"Chicken",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 9,
        name:"Ham",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 10,
        name:"Polony",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
    {
        id: 11,
        name:"Cheese",
        type: 'Vegan',
        price:'R5.90',
        image: require('../assets/sq1.jpg')
    },
]

export default Food;

export function getFood() {
    return Food;
}

export function getFoodById(id) {
    return Food.find((food) => food.id ==id)
}