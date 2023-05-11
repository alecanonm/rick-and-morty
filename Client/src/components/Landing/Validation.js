const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function emailValidation(userData, errors, setErrors) {
  userData.email.length === 0
    ? setErrors({ ...errors, email: "Debes de ingresar un email" })
    : !regex.test(userData.email)
    ? setErrors({ ...errors, email: "Ingresa un email valido" })
    : userData.email.length > 35
    ? setErrors({
        ...errors,
        username: "El email no debe de tener mas de 35 caracteres",
      })
    : setErrors({ ...errors, email: "" });
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
