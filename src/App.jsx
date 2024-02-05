import React from 'react';

const App = () => {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700">Email address</label>
          <input type="email" className="mt-1 p-2 border rounded-md w-full" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="mt-2 text-sm text-gray-500">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 p-2 border rounded-md w-full" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 flex items-center">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" id="exampleCheck1" />
          <label className="ml-2 block text-sm text-gray-900" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Sign in</button>
      </form>
    </div>
  );
}

export default App;
