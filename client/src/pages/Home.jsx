import { Link } from "react-router-dom";

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    img: "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
  },
];

const Home = () => {
  return (
    <div className="bg-body min-h-screen text-fontColor">

      {/* ================= NAV HERO ================= */}
      <section className="bg-light">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Discover & Manage <br />
              <span className="text-accentColor">Your Library</span> Smartly
            </h1>

            <p className="text-spanColor text-lg mb-8">
              A modern library management system where users can explore books
              and admins can manage everything seamlessly.
            </p>

            <div className="flex gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 rounded-lg bg-accentColor text-light
                hover:opacity-90 transition shadow-md"
              >
                Get Started
              </Link>

              <Link
                to="/books"
                className="px-8 py-3 rounded-lg border border-spanColor/40
                hover:bg-primary hover:text-light transition"
              >
                Browse Books
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Library"
              className="rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= BOOK SHOWCASE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">
          Popular <span className="text-accentColor">Books</span>
        </h2>
        <p className="text-spanColor mb-12">
          Explore some of the most loved books in our library
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-light rounded-2xl p-4 shadow-lg
              hover:-translate-y-2 transition"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-56 w-full object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold">
                {book.title}
              </h3>
              <p className="text-spanColor text-sm">
                {book.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-lightBg">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Admin Control",
              desc: "Manage books, users and categories from a secure dashboard.",
            },
            {
              title: "User Friendly",
              desc: "Simple interface for users to browse and request books.",
            },
            {
              title: "Cloud Based",
              desc: "Book covers and data stored securely on cloud.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-light rounded-xl p-8 shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-spanColor">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-light">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Library?
          </h2>

          <p className="text-spanColor mb-8">
            Create your account and manage books efficiently.
          </p>

          <Link
            to="/signup"
            className="px-10 py-4 rounded-lg bg-accentColor
            hover:opacity-90 transition shadow-lg"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-primary text-spanColor text-center py-5 text-sm">
        © {new Date().getFullYear()} Library Management System
      </footer>

    </div>
  );
};

export default Home;
