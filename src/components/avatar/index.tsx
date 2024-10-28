import { generateName } from "@/helpers/name.helper";
import { store } from "@/store";
import { useStore } from "@tanstack/react-store";
import React from "react";

interface IProps {
  socket_user_id: string;
}

function Avatar({ socket_user_id }: IProps) {
  const { locked_by_user_id, user_id } = useStore(store);
  return (
    <li
      className={`flex justify-center items-center bg-gray-400 h-10 w-10 p-2 mx-2 rounded-full text-white ${
        locked_by_user_id === socket_user_id
          ? "ring-2 ring-gray-500 ring-offset-2"
          : ""
      }`}
    >
      <p>{socket_user_id === user_id ? "You" : generateName(socket_user_id)}</p>
    </li>
  );
}

export default Avatar;
