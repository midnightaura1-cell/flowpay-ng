import React, {createContext, useContext, useEffect, useState} from 'react'

type User = {id: string; email: string} | null

const AuthContext = createContext<{user: User, loading: boolean}>({user:null, loading:true})

export const AuthProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    // TODO: wire up with real auth (Supabase/Bolt) -- placeholder that marks user as not logged in
    setLoading(false)
  },[])

  return (
    <AuthContext.Provider value={{user, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
