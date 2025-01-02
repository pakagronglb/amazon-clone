# 🛍️ Amazon Clone

[!banner](public/banner,jpeg)

A fully functional Amazon clone built with modern web technologies. This project is based on the tutorial by [CodeKing6](https://www.youtube.com/@BharatIntern) and includes features like user authentication, shopping cart, favorites, and Stripe payment integration.

## 🚀 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-000000?style=for-the-badge&logo=next.js&logoColor=white)

## ✨ Features

- 🔐 User Authentication with NextAuth
- 🛒 Shopping Cart Functionality
- ❤️ Favorites/Wishlist
- 💳 Secure Payment Processing with Stripe
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔄 State Management with Redux
- 🌐 Server-Side Rendering with Next.js

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/pakagronglb/amazon-clone.git
```

2. Install dependencies:
```bash
cd amazon-clone
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

## 🌟 Usage

- Visit `http://localhost:3000` in your browser
- Sign in using your credentials
- Browse products, add to cart, and checkout
- Process payments using test Stripe credentials

## 💖 Credits

This project was created following the tutorial by [CodeKing6](https://www.youtube.com/@BharatIntern) - "Master Full-Stack Development in 2024:⚡Amazon Clone with React, Next.js, Stripe, Tailwind"

Tutorial Link: [Watch Here](https://www.youtube.com/watch?v=UxuegESbmDg)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---

Made with ❤️ by [Pakagronglb](https://github.com/pakagronglb)
