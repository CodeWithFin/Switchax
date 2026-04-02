# Switchax - Authorized Zoho Partner Web Application

Switchax is a premium, high-performance web application designed for an **Authorized Zoho Partner**. It serves as a central hub for business transformation services, specializing in Zoho ecosystem implementations, custom development, and strategic digital audits.

## 🚀 Experience the Transformation
The platform is built to provide a seamless, authoritative experience for businesses looking to optimize their workflows using Zoho.

### Key Features:
- **Comprehensive Service Portfolio**: Detailed sections for Zoho CRM, Books, Creator, Desk, and more.
- **Success Stories**: A filterable "Work" showcase demonstrating ROI and business impact.
- **Expert Blog**: A resource center for Zoho insights and product updates.
- **Lead Capture Integration**: A secure, automated contact form that synchronizes inquiries directly with a **Neon PostgreSQL** database.
- **Mobile First Design**: Fully responsive navigation with smooth, gesture-ready animations.

## 🛠 Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19.
- **Styling**: Tailwind CSS 4, Framer Motion (Animations).
- **Database**: Neon (Serverless PostgreSQL).
- **ORM**: Drizzle ORM (Type-safe schema management).
- **Icons**: Iconify (Solar Linear set).

## 📦 Getting Started

### 1. Prerequisites
- Node.js 18+ 
- Neon PostgreSQL account

### 2. Environment Setup
Create a `.env.local` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
```

### 3. Database Initialization
Synchronize the schema with your Neon database:
```bash
npx drizzle-kit push
```

### 4. Run Development Server
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure
- `src/app/`: Next.js pages and layouts.
- `src/components/`: Reusable UI components (Navbar, Footer, Marquee).
- `src/db/`: Database configuration and schema definitions.
- `src/lib/`: Utility functions and helper scripts.

---
Built with excellence by **Switchax**. Certified Zoho Experts.
