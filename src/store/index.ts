import { Store } from "@tanstack/react-store";
import { IStore } from "./store";

export const store = new Store<IStore>({
  user_id: "",
  board_content: "",
  locked_by_user_id: "",
  socket: null,
  socket_ids: [],
});
