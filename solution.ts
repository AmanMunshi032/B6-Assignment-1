  const formatValue  = (input:string | number | boolean)=>{
   if(typeof input  === "string"){
     return input.toLocaleUpperCase()
   }else if(typeof input === "number"){
      return input*10
    }else if( input === true){
        return !true
    } else{
        return !false
    }
    
}

const getLength = (input:string | any[] )=>{
    if( typeof input === "string" ){
        return input.length
    } else if(Array.isArray(input)){
         return input.length
    }

}

class Person {
    name:string;
    age:number;

    constructor (name:string, age:number){
        this.name = name;
        this.age = age
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

type book = {
 title: string,
 rating:number
}

const filterByRating =(items:book[])=>{
return  items.filter(item =>item.rating > 4)
   
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

type user ={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

const filterActiveUsers =(items: user[])=>{
  return items.filter(item=> item.isActive === true)

}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
  
];


interface Book {
title :string,
author :string,
publishedYear :number,
 isAvailabl:boolean
}
const printBookDetails=(items:Book)=>{
  if(items.isAvailabl === true){
    return `Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes`
  }
  
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailabl: true,
};

const getUniqueValues =<T>(array1:T[],array2:T[]) =>{ 
  const Tanvir = array1.concat(array2)
   let newarray = new Set(Tanvir)
   return Array.from(newarray)
}

const array1 = [1, 2, 3, 4, 5,];
const array2 = [3, 4, 5, 6, 7,];

type Product ={
name :string;
price :number;
quantity :number;
discount?:number;
}


const  calculateTotalPrice= (products: Product[])=>{
   return products.map((product)=>{
       const  basePrice = product.price * product.quantity;
    const finalprice = product.discount? basePrice - (basePrice *     product.discount) / 100: basePrice;
    return finalprice
   })
     .reduce((total, price) => total + price, );
   }

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
