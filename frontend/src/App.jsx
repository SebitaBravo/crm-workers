import { MainRouter } from "./router/MainRouter";
import { AuthProvider } from "./auth/context/AuthContext";

export const App = () => {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
};
