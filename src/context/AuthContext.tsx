import React, {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { auth } from "@/firebase/appClient";
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { githubProvider, googleProvider } from "@/firebase/appClient";
export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  signInWithGoogle?: () => Promise<UserCredential> | void;
  signInWithGithub?: () => Promise<UserCredential> | void;
}

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(auth, email);
  }
  function signInWithGoogle(): Promise<UserCredential> {
    return signInWithPopup(auth, googleProvider);
  }
  function signInWithGithub(): Promise<UserCredential> {
    return signInWithPopup(auth, githubProvider);
  }
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);
  const requiredData = user
    ? {
        userProviderId: user.providerData[0].providerId,
        userDisplayName: user.displayName,
        userEmail: user.email,
        userPhotoURL: user.photoURL,
        userPhoneNumber: user.phoneNumber,
        userUid: user.uid,
      }
    : {};
  const values = {
    signUp,
    signInWithGoogle,
    signInWithGithub,
    user,
    signIn,
    resetPassword,
    auth,
    ...requiredData,
  };

  return (
    <AuthContext.Provider value={values}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
