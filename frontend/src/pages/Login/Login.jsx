import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-300">ChatApp</span>
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link
              to="/signup"
              className="text-sm hover:underline mt-2 inline-block hover:text-blue-600"
            >
              {"Don't"} Have an Account?
            </Link>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full btn-sm mt-2"
              >
                {!loading ? "Log In" : <span className="loading loading-spinner"></span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
