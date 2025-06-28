"use client";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center mt-5 mb-5 gap-15">
      <button
        className="bg-white border border-white text-black text-lg px-4 py-3 h-auto rounded-full transition-all transform hover:scale-105"
        onClick={() => router.push("/startup/create")}
      >
        List your ghost projects
      </button>
      <button
      className="bg-white border border-white text-black text-lg px-4 py-3 h-auto rounded-full transition-all transform hover:scale-105"
        onClick={() => router.push("/discover")} >
        Find Projects to review 
      </button>
    </div>
  );
}

