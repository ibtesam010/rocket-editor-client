import { store } from "@/store";
import { useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  useEffect(() => {
    const socket = io(process.env["NEXT_PUBLIC_SERVER_BASE_URL"] || "");
    socket.on("connect", () => {
      store.setState((s) => ({ ...s, user_id: socket.id || "" }));
      socket.id && socket.emit("request-access", socket.id);
    });

    socket.on("state", ({ board_content, locked_by_user_id, socket_ids }) => {
      console.log("Board content", board_content);
      store.setState((s) => ({
        ...s,
        board_content,
        locked_by_user_id,
        socket_ids,
      }));
    });

    store.setState((s) => ({ ...s, socket }));

    return () => {
      socket.id && socket.emit("remove-access", socket.id);
      socket.disconnect();
    };
  }, []);
};

export default useSocket;
