# duck-classroom

duck-classroom E-Learning web application
bootstrapped with [Create T3 App](https://create.t3.gg) on top of [Next.js](https://nextjs.org/).

## Requirements

- [Node.js](https://nodejs.org/en/) (v14)
- [Yarn](https://yarnpkg.com/) (v1.22)

## Installation

1. Clone the repository

2. Run the following command to install the dependencies

   ```bash
   yarn install
   ```

3. Add the following environment variables to your `.env` file example is provided in `.env.example`
4. Push DB schema to your database with the following command

   ```bash
   yarn prisma db push
   ```

   or

   ```bash
   yarn db:push
   ```

5. Run the following command to start the development server

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. You can observe your database with prisma studio in separate terminal with the following command

   ```bash
   yarn prisma studio
   ```

   or

   ```bash
   yarn db:studio
   ```
