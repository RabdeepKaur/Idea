"use client";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center mt-5 mb-5">
      <button
        className="bg-black hover:bg-yc-pink-dark text-white text-lg px-4 py-3 h-auto rounded-full transition-all transform hover:scale-105"
        onClick={() => router.push("/startup/create")}
      >
        Submit your idea
      </button>
    </div>
  );
}

