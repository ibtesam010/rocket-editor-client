import React, { ChangeEvent, useCallback } from "react";
import { Textarea } from "../ui/textarea";
import { useStore } from "@tanstack/react-store";
import { store } from "@/store";
import { debounce } from "lodash";

function DebouncedInput() {
  const { user_id, board_content, socket, locked_by_user_id } = useStore(store);

  const handleFocus = () => {
    socket && socket.emit("request-access", user_id);
  };

  const handleChange = (v: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = v.currentTarget.value || "";
    if (locked_by_user_id === user_id) {
      store.setState((s) => ({
        ...s,
        board_content: newContent,
      }));
      debouncedEmit(newContent);
    }
  };

  const debouncedEmit = useCallback(
    debounce((content) => {
      console.log("emmit");
      socket && socket.emit("board-content", content);
    }, 500),
    [socket]
  );

  const handleBlur = () => {
    socket && socket.emit("remove-access", user_id);
  };

  return (
    <Textarea
      className={`mt-4 w-1/2 h-80 ${
        locked_by_user_id === user_id ? "focus:border-gray-500" : ""
      }`}
      value={board_content}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}

export default DebouncedInput;