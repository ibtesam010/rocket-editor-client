"use client";

import DebouncedInput from "@/components/debounced-input";
import { generateName } from "@/helpers/name.helper";
import useSocket from "@/hooks/useSocket";
import { store } from "@/store";
import { useStore } from "@tanstack/react-store";

const Home = () => {
  const { user_id, locked_by_user_id, socket_ids } = useStore(store);

  useSocket();

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-4xl">Rocket Editor</h1>
      <ul className="flex mt-8 ml-8">
        {socket_ids.map((s, i) => {
          return (
            <li
              key={i}
              className={`bg-gray-400 p-2 mx-2 rounded-full text-white ${
                locked_by_user_id === s
                  ? "ring-2 ring-gray-500 ring-offset-2"
                  : ""
              }`}
            >
              {s === user_id ? "You" : generateName(s)}
            </li>
          );
        })}
      </ul>
      <DebouncedInput />
    </div>
  );
};

export default Home;
