import { Link } from "react-router-dom";
import { FaBook, FaUsers, FaUserShield } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#0B0F19] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-blue-600/20 to-purple-600/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm">
            Smart Library Solution
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Manage Your Library <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
              The Modern Way
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
            A powerful MERN stack based library management system with
            secure authentication, admin control and modern UI.
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/30"
            >
              Get Started
            </Link>

            <Link
              to="/books"
              className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <FaBook />, label: "Books Available", value: "500+" },
            { icon: <FaUsers />, label: "Active Users", value: "200+" },
            { icon: <FaUserShield />, label: "Admin Control", value: "Secure" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition"
            >
              <div className="text-indigo-400 text-3xl">{stat.icon}</div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose Our System?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Advanced Book Management",
              desc: "Admin can add, update and manage books with cover uploads and cloud storage.",
            },
            {
              title: "Secure Authentication",
              desc: "JWT based login system with role based access for admin and users.",
            },
            {
              title: "Modern User Experience",
              desc: "Clean UI, fast performance and mobile responsive design.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 blur-2xl" />

        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Smart Library?
          </h2>
          <p className="text-gray-300 mb-10">
            Join now and manage your library efficiently with modern tools.
          </p>

          <Link
            to="/signup"
            className="inline-block px-10 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-xl shadow-indigo-600/30"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Library Management System • MERN Stack Project
      </footer>

    </div>
  );
};

export default Home;
