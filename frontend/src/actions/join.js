export const JOIN_CHAT = 'JOIN_CHAT'

export const joinChat = (bool, string) => {
  return {
    type: JOIN_CHAT,
    payload: {
        success:bool,
        name:string,
        avatar:string
    },
  };
}