# FakeStore Cart Application

A beautiful, responsive e-commerce cart application built with React and TypeScript that fetches products from the Fake Store API and allows users to manage their shopping cart through an elegant modal interface.

## 🌟 Features

- **Product Display**: Fetches and displays products from the Fake Store API in a responsive grid layout
- **Add to Cart**: Add products to cart with visual feedback and duplicate prevention
- **Cart Management**: View cart items in a beautiful modal with remove functionality
- **Real-time Updates**: Cart count updates instantly in the navbar
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Toast Notifications**: User-friendly alerts for all cart operations
- **Loading States**: Elegant loading spinner while fetching data
- **Modern UI**: Beautiful gradient design with hover effects and smooth animations

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Clean, customizable icons
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## 📱 Usage

1. **Browse Products**: The homepage displays all available products from the Fake Store API
2. **Add to Cart**: Click the "Add to Cart" button on any product card
3. **View Cart**: Click the cart icon in the navbar to open the cart modal
4. **Remove Items**: Use the "Remove" button in the cart modal to remove items
5. **Alerts**: The app will show alerts when trying to add duplicate items

## 🏗️ Architecture

### Component Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── Navbar.tsx       # Navigation with cart count
│   ├── ProductCard.tsx  # Individual product display
│   ├── ProductGrid.tsx  # Grid layout for products
│   ├── CartModal.tsx    # Shopping cart modal
│   └── LoadingSpinner.tsx
├── pages/
│   └── Index.tsx        # Main page with state management
└── hooks/
    └── use-toast.ts     # Toast notification hook
```

### Key Features Implementation

- **State Management**: Uses React's useState for cart and products state
- **API Integration**: Fetches data from `https://fakestoreapi.com/products`
- **Props Drilling**: All data flows through props as requested
- **Error Handling**: Graceful error handling with user feedback
- **Responsive Layout**: CSS Grid with responsive breakpoints

## 🎨 Design System

The application uses a custom design system with:
- **Purple primary color** (#7C3AED) for brand elements
- **Orange accent color** (#F59E0B) for highlights
- **Elegant gradients** and shadows
- **Smooth animations** and transitions
- **Dark/light mode** color variables

## 📋 API Integration

The app integrates with the Fake Store API:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Method**: GET
- **Response**: Array of product objects with id, title, price, description, category, image, and rating

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Proper component organization
- Responsive design principles

## 📝 Project Requirements Completed

✅ Fetch products from Fake Store API  
✅ Display products in responsive grid layout  
✅ Add to cart functionality with duplicate prevention  
✅ Alert when item already in cart  
✅ Responsive design (mobile & desktop)  
✅ Cart count in navbar  
✅ Cart modal with product list  
✅ Remove from cart functionality  
✅ Props-based data flow  
✅ Clean, documented code  
✅ Beautiful, modern UI design  