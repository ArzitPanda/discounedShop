first run nodemon index.js by going to storebackend after adding all deps

it is on localhost 3000


then goto store folder 
and add the node deps and  then npm run dev

the fronted has 3 routes

/admin => it gives the admin to acess the products, add products ,get the orders,get the coupon value and discounted value

/ =>user can get all the products and add to cart

/cart =>get the cart value aand total value eligible fodiscount or not



the backend has two routes
/  =>it has 6 sub routes  (adminRoutes)
👇

POST => "/" =>TAKE IMAGE,NAME,PRICE IN BODY ADN ADD TO PRODUCTS

GET =>"/" +>get all the products

GET =>"/nth" => get the nth customer

GET => "/quant" => get the quantity of items orderd by the users uniquely by the productid

DELETE => "/:id" =>take the product id and remove it from products
GET => "/orders  => get the orders




/order  =>it has 4 sub routes  (adminRoutes)
👇

POST => "/order" =>MAKE ORDERS

GET =>"/checkout:couponId" +>
check the coupon is valid or not

GET =>"/couponList" => getthe coupon list with discount

GET => "/coupon" => check user is suitable user for the coupon if suitable sent coupon else not eligible




