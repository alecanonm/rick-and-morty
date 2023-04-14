const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function emailValidation(userData, errors, setErrors) {
  userData.username.length === 0
    ? setErrors({ ...errors, username: "Debes de ingresar un email" })
    : !regex.test(userData.username)
    ? setErrors({ ...errors, username: "Ingresa un email valido" })
    : userData.username.length > 35
    ? setErrors({
        ...errors,
        username: "El email no debe de tener mas de 35 caracteres",
      })
    : setErrors({ ...errors, username: "" });
}

export function passwordValidation(userData, errors, setErrors) {
  userData.password.length === 0
    ? setErrors({ ...errors, password: "Ingresa tu contraseña" })
    : userData.password.length < 6 || userData.password.length > 10
    ? setErrors({
        ...errors,
        password: "La contrasena debe de contener entre 6 a 10 caracteres",
      })
    : setErrors({
        ...errors,
        password: "",
      });
}
