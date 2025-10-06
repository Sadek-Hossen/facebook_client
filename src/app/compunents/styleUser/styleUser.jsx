import Link from "next/link";

// StyleUser.js
function StyleUser({ user }) {
  return (
    <div className="flex flex-col gap-y-3">
      <Link href="/aboutMe">
        <h1
          className="text-2xl font-semibold py-2 mt-2 px-3 rounded-2xl
          bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500
          text-white shadow-md cursor-pointer
          transition-all duration-500 ease-in-out
          hover:scale-105 hover:shadow-xl hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500"
        >
          {user?.name}
        </h1>
      </Link>
    </div>
  );
}

export default StyleUser;
