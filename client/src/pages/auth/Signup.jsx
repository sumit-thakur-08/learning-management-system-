import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../services/auth.service";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(form); // 🔥 backend connect
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    // ⬇️ YE BHI TUMHARA PEHLA WALA DESIGN HAI
    <div className="min-h-screen flex items-center justify-center bg-body">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-light p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
