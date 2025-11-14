# 🇳🇬 Nigerian Immigration Portal (React Training Project)

A beginner-friendly React project created for training purposes.  
This project introduces trainees to **components**, **props**, **React Router**, **project structure**, and **basic page navigation**.  
Currently, only the **Home Page** is completed; other pages will be built later.

---

## 🎯 Project Purpose

This project is designed to help trainees understand:

- How to structure a React project
- How to create reusable components
- How to use React Router for page navigation
- How to style components
- How to manage assets (images, icons)
- How real-world websites like immigration portals are organized

---

## 🏗️ Current Features (Home Page Only)

- Responsive Home Page UI  
- Navigation bar with working links  
- Background image hero section  
- Text content passed through props  
- Clean component organization  
- Tailwind CSS styling

---

## 🗺️ Pages (Current & Planned)

### ✔️ Completed
- **Home Page** (`/`)

### ⏳ Coming Soon
- About us Page  
- Service Page  
- Information center Page  
- Contact us Page  

*(The routes may exist but the pages are empty placeholders for now.)*

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS** 
- **Vite**
- **Daisy UI**
- **Google Fonts**
- **Reusable Components**

---

## 📁 Project Structure

```
src/
 ├── assets/           # Images (logo, background, icons)
 ├── components/       # reusables: button, navlinks, hero etc.
 ├── data/             # json data.
 ├── layout/           # shared: navbar and footer.
 ├── routes/           # page routes.
 ├── pages/
 │    ├── Home.jsx     # Completed page
 │    ├── About.jsx    # To be completed
 │    ├── Contact.jsx  # To be completed
 │    └── Services.jsx # To be completed
 │    └── Information.jsx  # To be completed
 ├── App.jsx           # All routes defined here
 └── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/immigration-portal.git
cd immigration-portal
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
```

---

## ▶️ How Routing Works

Routing is already set up to teach trainees how page navigation works:

```jsx
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/about-us" element={<About />} />
<Route path="/contact-us" element={<Contact />} />
<Route path="/information-center" element={<Information />} 
```

The pages (except Home) currently show simple placeholder text.

---

## 🚀 Future Improvements (For Trainees)

- Build full UI for each page  
- Add form validation (React Hook Form / Yup)  
- Add mock API or real API integration  
- Add authentication (login / register)  
- Add global state with Context API or Redux  

---

## 🙌 Author

Created by **[Eguono Imonieroh]** for training and educational purposes.

---

## 📄 License

This project is open-source and can be used for learning and teaching.

