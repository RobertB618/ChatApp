import { useUserStore } from './userStore';
import { create } from 'zustand'


export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
  changeChat: (chatId,user) => { 
      const currentUser = useUserStore.getState().currentUser;

      //check if current user is blocked
      if(user.blocked.includes(currentUser.uid)) {
        return set({
          chatId,
          user: null,
          isCurrentUserBlocked: true,
          isReceiverBlocked: false,
        });
        }

        //check if receiver is blocked
        else if(currentUser.blocked.includes(user.id)) {
          return set({
            chatId,
            user: user,
            isCurrentUserBlocked: false,
            isReceiverBlocked: true,
          });
        } else {
          return set({
            chatId,
            user,
            isCurrentUserBlocked: false,
            isReceiverBlocked: false,
          });
        }

        

      },
          changeBlock: () => {
            set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked}))
          },
}));