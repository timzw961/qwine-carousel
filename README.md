This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Instructions
To run this Next.js application:

1. Ensure you have Node.js (version 16 or later recommended) and npm installed.
2. Clone the repository: git clone https://github.com/timzw961/qwine-carousel.git 
3. Navigate to the project directory: cd qwine-carousel
4. Install dependencies: npm install
5. Start the development server: npm run dev
6. Access the application in your browser at http://localhost:3000

If you encounter any issues, please ensure you have the correct Node.js and npm versions installed.

## Comments and Approach
I began the task by reviewing the QWine website to understand its tech stack and functionality. Observing that the site appeared to use Next.js with the App Router, I chose this framework for my implementation. While I could have opted for the Pages Router, I decided on the App Router because it supports server components, which I believe QWine leverages for improved performance and scalability.

To start, I examined the provided data.json file and created the necessary TypeScript types for the product components. My initial focus was on designing the ProductCard component without integrating carousel functionality. I worked to ensure that the visual design aligned closely with the provided mockup.

Once the basic structure of the ProductCard was complete, I explored libraries for implementing the carousel functionality specified in the task instructions. Having previously worked with React-Slick and noting its use on the QWine website, I decided to use it for this project. React-Slick offered an easy setup, particularly for configuring responsive settings.

With the carousel in place, I focused on reducing code duplication within the ProductCard component. I introduced an AddToCartButton component to encapsulate that functionality and updated the ProductCarousel component to accept a settings prop, making it more flexible and reusable.

I then started implementing unit tests using Jest. However, setting up Jest for TypeScript took more time than anticipated. Given that I had already spent over four hours on the task, I decided to pause further development at this point.

I chose the Next.js App Router because it provides a fast and modern development experience, leveraging both server and client components alongside the latest React features. This aligns with the technical direction of the QWine website.

For the ProductCard component, I considered splitting it into separate components for products on sale and not on sale to simplify logic and enhance maintainability. However, I ultimately kept it as a single component to save time.

Finally, I noticed that the imageSrc provided in data.json contained Unsplash links. To ensure consistency with the mockup, I updated data.json to include product names and added the corresponding images to the public folder. This adjustment improved the alignment between the data and the visual requirements.

## Commit history
You will be able to see the commit history in the github repo: https://github.com/timzw961/qwine-carousel.git 
