# Next.js Yumitok

# Next Yumitok

ECommerce Website using Next.js

- Source Code : https://github.com/raynmon
- Demo Website : http://yumitok.org

## What this project comprises:

- NextJS basics like setting up project, navigating between pages and data fetching
- NextJS advanced topics like dynamic routing, image optimization, SSG and SSR
- MaterialUI framework to build responsive website using custom theme, animation and carousel
- ReactJS including decomposing components, context API and hooks
- Next Connect package to build backend API
- MongoDB and Mongoose to save and retrieve data like products, orders and users
- PayPal developer api to make online payment
- Deploy web applications on servers like Vercel and Netlify

Run it live at http://yumitok.org
Admin login: admin@example.com
Admin Pass: 123456

1. Sequence of project tasks
2. Install Tools
   1. VS Code
   2. Chrome
   3. Node.js
   4. MongoDB
3. Create Next App
   1. npx create-next-app
   2. add layout component
   3. add header, main and footer
4. Add Styles
   1. add css to header, main and footer
5. Fix SSR Issue on MaterialUI
   1. add \_documents.js
   2. add code to fix styling issue
6. List Products
   1. add data.js
   2. add images
   3. render products
7. Add header links
   1. Add cart and login link
   2. use next/link and mui/link
   3. add css classes for header links
8. Route Product Details Page
   1. Make Product cards linkable
   2. Create /product/[slug] route
   3. find product based on slug
9. Create Product Details Page
   1. Create 3 columns
   2. show image in first column
   3. show product info in second column
   4. show add to cart action on third column
   5. add styles
10. Add MaterialUI Theme
    1. create theme
    2. use theme provider
    3. add h1 and h2 styles
    4. set theme colors
11. Create Application Context
    1. define context and reducer
    2. set darkMode flag
    3. create store provider
    4. use it on layout
12. Connect To MongoDB
    1. install mongodb
    2. install mongoose
    3. define connect and disconnect
    4. use it in the api
13. Create Products API
    1. create product model
    2. seed sample data
    3. create /api/products/index.js
    4. create product api
14. Fetch Products From API
    1. use getServerSideProps()
    2. get product from db
    3. return data as props
    4. use it in product screen too
15. Implement Add to cart
    1. define cart in context
    2. dispatch add to cart action
    3. set click event handler for button
16. Create Cart Screen
    1. create cart.js
    2. redirect to cart screen
    3. use context to get cart items
    4. list items in cart items
17. Use Dynamic Import In Cart Screen
    1. Use next/dynamic
    2. Wrap cart in dynamic with out ssr
18. Update Remove Items In Cart
    1. Implement onChange for Select
    2. Show notification by notistack
    3. implement delete button handler
19. Create Login Page
    1. create form
    2. add email and password field
    3. add login button
    4. style form
20. Create Sample Users
    1. create user model
    2. add sample user in seed api
21. Build Login AP 3. use jsonwebtoken to sign token 4. implement login api
22. Complete Login Page
    1. handle form submission
    2. add userInfo to context
    3. save userInfo in cookies
    4. show user name in nav bar using menu
23. Create Register Page
    1. create form
    2. implement backend api
    3. redirect user to redirect page
24. Login and Register Form Validation
    1. install react-hook-form
    2. change input to controller
    3. use notistack to show errors
    4. use notistack to show errors
25. Create Shipping Page 4. create form 5. add address fields 6. save address in context
26. Create Payment Page
    1. create form
    2. add radio button
    3. save method in context
27. Create Place Order Page
    1. display order info
    2. show order summary
       add place order button
28. Implement Place Order Action
    1. create click handler
    2. send ajax request
    3. clear cart
    4. redirect to order screen
    5. create backend api
29. Create Order Details Page
    1. create api to order info
    2. create payment, shipping and items
    3. create order summary
30. Pay Order By PayPal
    1. install paypal button
    2. use it in order screen
    3. implement pay order api
31. Display Orders History
    1. create orders api
    2. show orders in profile screen
32. Update User Profile
    1. create profile screen
    2. create update profile api
33. Create Admin Dashboard
    1. Create Admin Menu
    2. Add Admin Auth Middleware
    3. Implement admin summary api
34. List Orders For Admin
    1. fix isAdmin middleware
    2. create orders page
    3. create orders api
    4. use api in page
35. Deliver Order For Admin
    1. create deliver api
    2. add deliver button
    3. implement click handler
36. List Products For Admin
    1. create products page
    2. create products api
    3. use api in page
    4. use api in page
37. Create Product Edit Page
    1. create edit page
    2. create api for product
    3. show product data in form
38. Update Product
    1. create form submit handler
    2. create backend api for update
39. Upload Product Image
    1. create cloudinary account
    2. get cloudinary keys
    3. create upload api
    4. upload files in edit page
40. Create And Delete Products
    1. add create product button
    2. build new product api
    3. add handler for delete
    4. implement delete api
41. List Users For Admin
    1. create users page
    2. create users api
    3. use api in page
42. Create User Edit Page
    1. create edit page
    2. create api for user
    3. show user data in form
43. Deploy on Vercel
    1. create vercel account
    2. connect to github
    3. create altas mongodb db
    4. create altas mongodb db
    5. push code to github