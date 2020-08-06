# CreateOrder-Api
A sample app that implements an ordering system to expose a Restful API to help AirAsia.com to receive a hotel booking details and insert the details in the database.

**Tasks**

Implementing a NodeJS API to receive a new order and insert it in the Database. Below details are expected in the API:

+ Hotel Details (Hotel ID and Hotel Name)
+ Check-in Details (Check-in Date and Check-out Date)
+ Customer Details (Name, Email and Contact Number)
+ Room Details (Room ID, Room Name and Number of Guests)
+ Total Amount

MongoDB has been impleneted as the database solution for this API to keep it simple. Although MySQL would be a good alternative to be hosted in AWS RDS

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:mdrijwan/createorder-api.git
```

If you use https, use this instead

```
git clone https://github.com/mdrijwan/createorder-api.git
```

Run the command below to install NPM dependencies

```
npm install
```

Then build the api by compiling the `TypeScript` files to `JavaScript`

```
npm run build
```

Then start the server and visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to see the app in action.

```
npm run start
```


>To get in action, the database needs to be started first.

Start the database

```
sudo service mongod start
```

- To see collections of data
  + Type `mongo`

- To show all the databases
  + `show dbs`

- To select a specific database
  + `use <db name>`

- To see the tables inside the db
  + `show collections`

- Choose your collection and type the following to see all contents of that collection:
  + `db.<collectionName>.find()`

#### Let's get started!

***Methods***
- GET/
  + GET/ `(to see the welcome page)`
  + GET/order `(to see all the orders)`
  + GET/order/orderId `(to see a specific order)`
 
- POST/
  + POST/order `(to create an order)`
   
- PUT/
  + PUT/order/orderId `(to update an order)`
  
- DELETE/
  + DELETE/order `(to delete the whole list of orders)`
  + DELETE/order/orderId `(to delete an order)`