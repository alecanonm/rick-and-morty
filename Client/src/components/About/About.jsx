import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <h1>SOBRE ESTA APLICACION WEB:</h1>
      <section>
        <p>
          Esta aplicacion web fue construida con los conocimientos que la
          academia HENRY me ha brindado <br /> tambien hay gran aporte de
          conocimiento que he ido adquiriendo de manera impirica.
        </p>
        <br />
        <p>
          En todo este recorrido la aplicacion fue construida con la ibreria
          REACT, CSS, HTML y JS. <br />
          Para esta aplicacion web las tecnologias Express, JS, Node.Js fueron
          implementadas para <br /> el lado del servidor (back-end)
        </p>
      </section>
    </div>
  );
}
