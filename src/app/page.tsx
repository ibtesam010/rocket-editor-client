"use client";

import Avatar from "@/components/avatar";
import DebouncedInput from "@/components/debounced-input";
import useSocket from "@/hooks/useSocket";
import { store } from "@/store";
import { useStore } from "@tanstack/react-store";

const Home = () => {
  const { socket_ids } = useStore(store);

  useSocket();

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-4xl">Rocket Editor</h1>
      <ul className="flex mt-8 ml-8">
        {socket_ids.map((s, i) => {
          return <Avatar socket_user_id={s} key={i} />;
        })}
      </ul>
      <DebouncedInput />
    </div>
  );
};

export default Home;
