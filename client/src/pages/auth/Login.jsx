import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form); // 🔥 backend connect
      navigate("/");     // same behaviour
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    // ⬇️ YE PURE JSX TUMHARA PEHLA WALA HI HAI
    <div className="min-h-screen flex items-center justify-center bg-body">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-light p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="w-full bg-accentColor text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
