export const EXIT_CHAT = 'EXIT_CHAT'

export const exitChat = (bool,string,array) => {
  return {
    type: EXIT_CHAT,
    payload: {
        success:bool,
        name:string,
        messages:array
    },
  };
}