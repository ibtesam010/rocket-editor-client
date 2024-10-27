import { Socket } from "socket.io-client";

export type IStore = {
  user_id: string;
  board_content: string;
  locked_by_user_id: string;
  socket: Socket | null;
  socket_ids: string[];
};
