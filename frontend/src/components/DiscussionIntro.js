import React from "react";

const DiscussionIntro = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 space-y-8 text-center">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
        <h4 className="text-xl font-semibold text-gray-800">
          <a
            href="/users/register/"
            className="text-indigo-600 hover:underline"
          >
            Create an account
          </a>
          to join ongoing discussions or start your own!
        </h4>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
        <h4 className="text-lg text-gray-700">
          Whenever you're inspired or learn something new, start a discussion or
          contribute to an existing one.
          <span className="font-medium text-indigo-600">
            Your voice helps everyone grow!
          </span>
        </h4>
      </div>

      <div className="App">
        <p>
          Copyright <code>@2025</code>
        </p>
      </div>
    </div>
  );
};

export default DiscussionIntro;
