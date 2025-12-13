import { Link } from "react-router-dom";
import { Button } from "../../components";

const Login = () => {
  return (
    <div className="min-h-screen bg-body flex items-center justify-center px-4">

      <div className="bg-light w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-2">
          Welcome Back
        </h2>

        <p className="text-spanColor mb-8">
          Login to access your library
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-lightBg
              focus:outline-none focus:ring-2 focus:ring-accentColor/40"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-lightBg
              focus:outline-none focus:ring-2 focus:ring-accentColor/40"
            />
          </div>

          <Button className="w-full">
            Login
          </Button>
        </form>

        <p className="text-sm text-center text-spanColor mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-accentColor hover:underline">
            Sign up
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Login;
