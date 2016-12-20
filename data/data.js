/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var zip = 85229;
    var customerNames = ["Marcus,HighTower,Male,acmecorp.com",
        "Jesse,Smith,Female,gmail.com",
        "Albert,Einstein,Male,outlook.com",
        "Dan,Wahlin,Male,yahoo.com",
        "Ward,Bell,Male,gmail.com",
        "Brad,Green,Male,gmail.com",
        "Igor,Minar,Male,gmail.com",
        "Miško,Hevery,Male,gmail.com",
        "Michelle,Avery,Female,acmecorp.com",
        "Heedy,Wahlin,Female,hotmail.com",
        "Thomas,Martin,Male,outlook.com",
        "Jean,Martin,Female,outlook.com",
        "Robin,Cleark,Female,acmecorp.com",
        "Juan,Paulo,Male,yahoo.com",
        "Gene,Thomas,Male,gmail.com",
        "Pinal,Dave,Male,gmail.com",
        "Fred,Roberts,Male,outlook.com",
        "Tina,Roberts,Female,outlook.com",
        "Cindy,Jamison,Female,gmail.com",
        "Robyn,Flores,Female,yahoo.com",
        "Jeff,Wahlin,Male,gmail.com",
        "Danny,Wahlin,Male,gmail.com",
        "Elaine,Jones,Female,yahoo.com"];
    var addresses = ["1234 Anywhere St.",
        "435 Main St.",
        "1 Atomic St.",
        "85 Cedar Dr.",
        "12 Ocean View St.",
        "1600 Amphitheatre Parkway",
        "1604 Amphitheatre Parkway",
        "1607 Amphitheatre Parkway",
        "346 Cedar Ave.",
        "4576 Main St.",
        "964 Point St.",
        "98756 Center St.",
        "35632 Richmond Circle Apt B",
        "2352 Angular Way",
        "23566 Directive Pl.",
        "235235 Yaz Blvd.",
        "7656 Crescent St.",
        "76543 Moon Ave.",
        "84533 Hardrock St.",
        "5687534 Jefferson Way",
        "346346 Blue Pl.",
        "23423 Adams St.",
        "633 Main St."];
    var citiesStates = ["Phoenix,AZ",
        "Encinitas,CA",
        "Seattle,WA",
        "Chandler,AZ",
        "Dallas,TX",
        "Orlando,FL",
        "Carey,NC",
        "Anaheim,CA",
        "Dallas,TX",
        "New York,NY",
        "White Plains,NY",
        "Las Vegas,NV",
        "Los Angeles,CA",
        "Portland,OR",
        "Seattle,WA",
        "Houston,TX",
        "Chicago,IL",
        "Atlanta,GA",
        "Chandler,AZ",
        "Buffalo,NY",
        "Albuquerque,AZ",
        "Boise,ID",
        "Salt Lake City,UT"];
    var states = [
        {Name: "Alabama", Abbreviation: "AL"},
        {Name: " Montana", Abbreviation: "MT"},
        {Name: " Alaska", Abbreviation: "AK"},
        {Name: " Nebraska", Abbreviation: "NE"},
        {Name: " Arizona", Abbreviation: "AZ"},
        {Name: " Nevada", Abbreviation: "NV"},
        {Name: "Arkansas", Abbreviation: "AR"},
        {Name: " New Hampshire", Abbreviation: "NH"},
        {Name: "California", Abbreviation: "CA"},
        {Name: "New Jersey", Abbreviation: "NJ"},
        {Name: "Colorado", Abbreviation: "CO"},
        {Name: "New Mexico", Abbreviation: "NM"},
        {Name: "Connecticut", Abbreviation: "CT"},
        {Name: "New York", Abbreviation: "NY"},
        {Name: "Delaware", Abbreviation: "DE"},
        {Name: "North Carolina", Abbreviation: "NC"},
        {Name: "Florida", Abbreviation: "FL"},
        {Name: "North Dakota", Abbreviation: "ND"},
        {Name: "Georgia", Abbreviation: "GA"},
        {Name: "Ohio", Abbreviation: "OH"},
        {Name: "Hawaii", Abbreviation: "HI"},
        {Name: "Oklahoma", Abbreviation: "OK"},
        {Name: "Idaho", Abbreviation: "ID"},
        {Name: "Oregon", Abbreviation: "OR"},
        {Name: "Illinois", Abbreviation: "IL"},
        {Name: "Pennsylvania", Abbreviation: "PA"},
        {Name: "Indiana", Abbreviation: "IN"},
        {Name: " Rhode Island", Abbreviation: "RI"},
        {Name: "Iowa", Abbreviation: "IA"},
        {Name: "South Carolina", Abbreviation: "SC"},
        {Name: "Kansas", Abbreviation: "KS"},
        {Name: "South Dakota", Abbreviation: "SD"},
        {Name: "Kentucky", Abbreviation: "KY"},
        {Name: "Tennessee", Abbreviation: "TN"},
        {Name: "Louisiana", Abbreviation: "LA"},
        {Name: "Texas", Abbreviation: "TX"},
        {Name: "Maine", Abbreviation: "ME"},
        {Name: "Utah", Abbreviation: "UT"},
        {Name: "Maryland", Abbreviation: "MD"},
        {Name: "Vermont", Abbreviation: "VT"},
        {Name: "Massachusetts", Abbreviation: "MA"},
        {Name: "Virginia", Abbreviation: "VA"},
        {Name: "Michigan", Abbreviation: "MI"},
        {Name: "Washington", Abbreviation: "WA"},
        {Name: "Minnesota", Abbreviation: "MN"},
        {Name: "West Virginia", Abbreviation: "WV"},
        {Name: "Mississippi", Abbreviation: "MS"},
        {Name: "Wisconsin", Abbreviation: "WI"},
        {Name: "Missouri", Abbreviation: "MO"},
        {Name: "Wyoming", Abbreviation: "WY"}
    ];
    var orders =
            [
                {Product: "Basket", Price: 29.99, Quantity: 1},
                {Product: "Yarn", Price: 9.99, Quantity: 1},
                {Product: "Needles", Price: 5.99, Quantity: 1},
                {Product: "Speakers", Price: 499.99, Quantity: 1},
                {Product: "iPod", Price: 399.99, Quantity: 1},
                {Product: "Table", Price: 329.99, Quantity: 1},
                {Product: "Chair", Price: 129.99, Quantity: 4},
                {Product: "Lamp", Price: 89.99, Quantity: 5},
                {Product: "Phone", Price: 599.99, Quantity: 1},
                {Product: "Controller", Price: 49.99, Quantity: 1},
                {Product: "Pen", Price: 0.99, Quantity: 1},
                {Product: "Lego City", Price: 49.99, Quantity: 1},
                {Product: "Baseball", Price: 9.99, Quantity: 5},
                {Product: "Glove", Price: 99.99, Quantity: 1},
                {Product: "Monitor", Price: 199.99, Quantity: 2},
                {Product: "Camera", Price: 499.99, Quantity: 1},
                {Product: "Picture Frame", Price: 19.99, Quantity: 5}
            ];
    var customerDoc = [];
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function addDays(startDate, numberOfDays)
    {
        var returnDate = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + numberOfDays,
                startDate.getHours(),
                startDate.getMinutes(),
                startDate.getSeconds());
        return returnDate;
    }
    function SplitValue(val)
    {
        return val.split(',');
    }
    var ordersDoc = [];
    for (var i = 0; i < customerNames.length; i++)
    {
        var nameGenderHost = SplitValue(customerNames[i]);
        var cityState = SplitValue(citiesStates[i]);
        var cust =
                {
                    customerId: i + 1,
                    FirstName: nameGenderHost[0],
                    LastName: nameGenderHost[1],
                    Email: nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3],
                    Address: addresses[i],
                    City: cityState[0],
                    State: states.filter(function (state) {
                        return state.Abbreviation === cityState[1];
                    })[0],
                    Zip: zip + i,
                    Gender: nameGenderHost[2]
                };
        customerDoc.push(cust);
        //Generate customer orders
        var numToGrab = getRandomInt(1, orders.length - 1);
        var custOrders = [];
        for (var j = 0; j < numToGrab; j++)
        {
            var orderPosition = getRandomInt(1, orders.length - 1);
            custOrders.push(orders[orderPosition]);
        }
        for (var k = 0; k < custOrders.length; k++)
        {
            var order = custOrders[k];
            var quantity = getRandomInt(1, 5);
            var multiplier = (quantity % 2 === 0) ? 1 : -1;
            var custOrder = JSON.parse(JSON.stringify(order));
            custOrder.Quantity = (quantity === 0) ? 1 : quantity;
            custOrder.Date = addDays(new Date(), getRandomInt(1, 30) * multiplier);
            custOrder.CustomerId = cust.customerId;
            ordersDoc.push(custOrder);
        }
    }
     db.customers.insert(customerDoc);
     db.orders.insert(ordersDoc);
    
})();



