import AuthRoute from "@/components/AuthRoute";
import Main from "@/components/Main";
import React from "react";
import { useAuth } from "@/context/AuthContext";
export default function Home() {
  const { user } = useAuth();
  console.log(user?.providerData ?? "not user");
  return (
    <AuthRoute>
      <Main />
    </AuthRoute>
  );
}
