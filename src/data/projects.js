import blogApp from "../assets/blog-app.png";
import currencyConverter from "../assets/currency-converter.png";

const projects = [
  {
    id: 1,
    title: "Appwrite Blog App",
    description:
      "A full-featured blog application where users can create, edit, and delete posts, manage authentication, upload featured images, and view or download post images.",
    technologies: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Router",
      "Appwrite",
      "TinyMCE",
      "Tailwind CSS",
    ],
    image: blogApp,
    github: "https://github.com/anasshiraz/appwriteBlogApp",
    live: "https://appwrite-blog-app-blond.vercel.app/",
  },
  {
    id: 2,
    title: "Currency Converter",
    description:
      "A responsive currency converter that uses live exchange rates to convert between multiple currencies, with swap functionality and a modern glass-morphism interface.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
      "Custom Hooks",
    ],
    image: currencyConverter,
    github: "https://github.com/anasshiraz/currencyConvertor",
    live: "https://currency-convertor-gamma-five.vercel.app/",
  },
];

export default projects;