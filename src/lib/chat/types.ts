export type ChatRole = "user" | "assistant" | "system";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ClientChatMessage = Omit<ChatMessage, "role"> & {
  role: "user" | "assistant";
};

export type ChatApiRequest = {
  messages?: ClientChatMessage[];
};

export type ChatApiResponse = {
  message: string;
};
