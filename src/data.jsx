import Chance from 'chance';
import './style.css';

const chance = new Chance();

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'black', 'white'];
const categories = ['t-shirt', 'jeans', 'shirt', 'dress', 'shoes', 'short'];
const images = [
    'images/t-shirt.jpg', 'images/jeans.jpg', 'images/shirt.jpg', 'images/dress.jpg', 'images/shoes.jpg',
    'images/short.jpg'
];

export const generateProducts = (num) => {
    return Array.from({ length: num }, () => ({
        id: chance.guid(),
        name: chance.word() + ' ' + chance.word(),
        description: chance.sentence({ words: 5 }),
        color: chance.pickone(colors),
        category: chance.pickone(categories),
        price: chance.integer({ min: 10, max: 999 }),
        rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
        imageUrl: chance.pickone(images)
    }));
};