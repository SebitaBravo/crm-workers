import * as React from "react";
import { loginService } from "../services/LoginService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [inputFields, setInputFields] = React.useState({
    usuario: "",
    password: "",
  });

  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputFields({
      ...inputFields,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      const { token, rol, expiration } = await loginService(
        inputFields.usuario,
        inputFields.password
      );
      login(token, rol, expiration);
      switch (rol) {
        case "hr":
          navigate("/hr");
          break;
        case "admin":
          navigate("/hrboss");
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="py-14 w-[420px] px-8 flex gap-4">
        <Input
          autoFocus
          label="usuario"
          placeholder="Ingresa tu usuario"
          variant="bordered"
          name="usuario"
          value={inputFields.usuario}
          onChange={handleInput}
        />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          type="password"
          variant="bordered"
          name="password"
          value={inputFields.password}
          onChange={handleInput}
        />
        <div className="flex py-2 px-1 justify-between">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
          >
            Remember me
          </Checkbox>
          <Link color="primary" href="#" size="sm">
            Forgot password?
          </Link>
        </div>
        <Button color="primary" onPress={handleLogin}>
          Sign in
        </Button>
      </Card>
    </div>
  );
};
