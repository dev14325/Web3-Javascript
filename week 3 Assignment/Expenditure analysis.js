/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    // transactions is an array of objects (transaction);
    const totalSpentBycategory = FinalArr.map(category=>{
        return{
            category : category,
            totalSpent : transactions.filter(transaction=>transaction.category==category)
            .reduce((sum,transactions)=>sum + transactions.price ,0)
        };
    });
    return totalSpentBycategory;
    
  }

  const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza'
    },
    {
        id: 2,
        timestamp: 1656163200000,
        price: 20,
        category: 'Food',
        itemName: 'Burger'
    },
    {
        id: 3,
        timestamp: 1656249600000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-shirt'
    },
    {
        id: 4,
        timestamp: 1656336000000,
        price: 40,
        category: 'Electronics',
        itemName: 'Headphones'
    },
    {
        id: 5,
        timestamp: 1656422400000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans'
    },
    {
        id: 6,
        timestamp: 1656508800000,
        price: 50,
        category: 'Electronics',
        itemName: 'Smartphone'
    },
    {
        id: 7,
        timestamp: 1656595200000,
        price: 5,
        category: 'Food',
        itemName: 'Ice Cream'
    }
];

let arr1 = transactions.map(val=>val.category);
//arr1 = ['food','food','clothing','electronics','clothing','electronics','food']
let uniqueArr = new Set(arr1); //returning set
let FinalArr = [...new Set(uniqueArr)];
// FinalArr = ['food','clothing','electronics'];

console.log(calculateTotalSpentByCategory(transactions));



















  