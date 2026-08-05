 import { create } from "zustand";
import { persist } from "zustand/middleware";

const UseAuthStore = create(
  persist(
    (set) => ({
      token:null,
      userRole:'admin',
      login:(token,userRole)=>{
        set({
         token: token,
         userRole: userRole
        })
      },
      logout:()=>{
      set({
         token: null,
         userRole: null
      })

      }
       
     
    }),
    {
      name: "UseAuthStore-storage",
    }
  )
);

export default UseAuthStore;