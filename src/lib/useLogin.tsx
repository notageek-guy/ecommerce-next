import { githubProvider, googleProvider } from "@/firebase/appClient";
import { auth } from "@/firebase/appClient";
import { signInWithPopup } from "firebase/auth";
export default function useLogin() {
  async function loginWithGithub() {
    const provider = githubProvider;
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
  async function loginWithGoogle() {
    const provider = googleProvider;
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
  return { loginWithGithub, loginWithGoogle };
}
