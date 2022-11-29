## Delivery mobile app

<div>
<img src="https://raw.githubusercontent.com/albertorsesc/app-delivery/master/assets/customers-screen.jpg" alt="Delivery app" style="width:150px;"/>
<img src="https://github.com/albertorsesc/app-delivery/blob/master/assets/delivery-screen.jpg" alt="Delivery app" style="width:150px;"/>
<img src="https://raw.githubusercontent.com/albertorsesc/app-delivery/master/assets/orders-screen.jpg" alt="Delivery app" style="width:150px;"/>
<div>

#### Requirements

* Setup a [Stepzen](https://stepzen.com/) account and follow instructions to get started.
* Create a Firebase account
  * Create a RealTime Database
  * Import contents of `./sample_data.json` into a new RealTime Database and copy the endpoints for each resource.

    Ex: `https://delivery-app-xyz.firebaseio.com/customers.json` to use it in the GraphQL schemas under `./stepzen` folder.


#### Installation

Clone repo:

`git clone https://github.com/albertorsesc/app-delivery.git`

Step into the project:

`cd app-delivery`

Install dependencies:

`npm install`

Run app:

Terminal #1
`expo start`

Terminal #2
`stepzen start`

Terminal #3
`npm run dev:tailwind`

Scan QR code from Terminal #1 to open app.
