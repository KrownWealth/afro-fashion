/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import './collections/collection.styles.scss';
import Directory from '../directory/directory.component';

export const categories = [
  {
    id: 1,
    title: 'Kids Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1570545917537-873e36d4f64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    route: 'shop/kids',
  },
  {
    id: 2,
    title: 'Women Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1585487000302-c75e6fe328b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
    route: 'shop/women',
  },
  {
    id: 3,
    title: 'Men Clothing',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxibGFjayUyMG1lbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww',
    route: 'shop/men',
  },
  {
    id: 4,
    title: "Jerseys",
    imageUrl: 'https://images.unsplash.com/photo-1616124619460-ff4ed8f4683c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmNoZXN0ZXIlMjB1bml0ZWQlMjBqZXJzZXl8ZW58MHx8MHx8fDA%3D',
    route: 'shop/jerseys',
  },
  {
    id: 5,
    title: 'Hats & Head Gears',
    imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhhdHMlMjBhbmQlMjBiZWFuaWVzfGVufDB8fDB8fHww',
    route: 'shop/hats',
  },
  {
    id: 6,
    title: 'Jackets & Coats',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 7,
    title: 'Sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 8,
    title: 'Boots & Shoes',
    imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
    route: 'shop/shoes',
  },
  {
    id: 9,
    title: 'Slippers & Slides',
    imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2xpcHBlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    route: 'shop/slippers',
  },
  {
    id: 10,
    title: 'Fashion Bags',
    imageUrl: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
    route: 'shop/bags',
  },
  {
    id: 11,
    title: 'Accessories',
    imageUrl: 'https://media.istockphoto.com/id/1144368578/photo/young-african-american-woman-in-traditional-clothing.webp?b=1&s=170667a&w=0&k=20&c=w5lx7EKxnYbc1lTsC0QZe5TKS7DVTRJY7lGjmfD8Kqs=',
    route: 'shop/accessories',
  },
  {
    id: 12,
    title: 'Senegalese',
    imageUrl: 'https://media.istockphoto.com/id/1384884976/photo/young-black-woman-playing-with-her-daughter.jpg?s=612x612&w=0&k=20&c=bnGaBdQfImLCwVyit2WMCK5lEk3S585Xfq2WEKHFrj4=',
    route: 'shop/senegalese',
  },
]
    
  
const Collection = () => {

  return <Directory categories={categories} />
};


export default Collection;