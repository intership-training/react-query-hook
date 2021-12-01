# Writing Clean Code ( 7 Tips )

## Use Object Destructuring

```ts
//before
const name = employee.name;
const email = employee.email;
const phone = employee.phone;

//after
const {name, email, phone} = employee;
```

### When to Use:
- Using multiple property from Object
- Using same property multiple times
- Using property that is deeply nested

## Use Multiple Params Over Single Object Params
```ts
//before
function CustomerDetail (User){    
    console.log('This is ${User.CustomerName} of ${User.CustomerType} and need ${User.Order}');
}

//after
function CustomerDetail (CustomerName, CustomerType, Order){    
  console.log('This is ${CustomerName} of ${CustomerType} and need ${Order}');
} 
```

## Make Use of Arrow function
```ts
//before
function myOrder(order){
   console.log(`Customer need ${order}`);
}
//after
const myOrder = order => console.log(`Customer need ${order}`);
```

## Use Template Literal
```ts
//before
var name = 'Peter';
var message = 'Hi'+ name + ',';
//after
var name = 'Peter';
var message = `Hi ${name},`;
```

## Spread Extension Operator
```ts
let x = [car, bus,van];
let y = [bike, truck, ...x, lorry]
```

## Avoid Callback
```ts
//before
function1(function (err, data) { 
  ...  
  function2(user, function (err, data) {
    ...
     function3(profile, function (err, data) {
      ...
      function4(account, function (err, data) {
        ....
      }); 
    }); 
  });
});

// Promises
function1() 
.then(function2) 
.then(function3) 
.then(function2) 
.catch((err) => console.error(err));
// Async/Await
async function myAsyncFunction() {  
try {    
  const data1= await function1();    
  const data2= await function2(data1);    
  const data3= await function3(data2);    
  return function4(data4);  
} 
catch (e) {    
  console.error(err);  
}}
```

## Use Shorthand

```ts
//before
if (x !== "" && x !== null && x !== undefined) { ... }
//after
if ( !!x ) { ... }
```