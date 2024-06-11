import "../styles/AboutZozobra.scss";

function About() {
  //función de JS que hace el scroll
  const doScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="divsection">
      <section className="sectionaz">
        <h3 className="sectionaz__h3">About</h3>
        <p className="sectionaz__text">
          La poesía en español está llena de mujeres que pusieron palabras a
          aquello que todes sentimos. Las experiencias femeninas de las que
          hablan estas poetas son propias, sí, pero tan universales como nos han
          hecho pensar que son las masculinas. La poesía de las mujeres narra la
          intimidad, susurra la ternura, disecciona la rabia y, si se lee con
          atención, propone casi siempre la rebelión.
        </p>
        <nav>
          <ul className="sectionaz__ul">
            <li
              className="sectionaz__ul--li"
              onClick={() => doScroll("Cristina_Peri_Rossi")}
            >
              Cristina Peri Rossi&nbsp;-&nbsp;
            </li>
            <li
              className="sectionaz__ul--li"
              onClick={() => doScroll("Luisa_Castro")}
            >
              Luisa Castro&nbsp;-&nbsp;
            </li>
            <li
              className="sectionaz__ul--li"
              onClick={() => doScroll("Gloria_Fuertes")}
            >
              Gloria Fuertes&nbsp;-&nbsp;
            </li>
            <li
              className="sectionaz__ul--li"
              onClick={() => doScroll("Alejandra_Pizarnik")}
            >
              Alejandra Pizarnik&nbsp;-&nbsp;
            </li>
            <li
              className="sectionaz__ul--li"
              onClick={() => doScroll("Rosario Castellanos")}
            >
              Rosario Castellanos
            </li>
          </ul>
        </nav>
      </section>
      <section className="articles">
        <article id="Cristina_Peri_Rossi" className="articles__article">
          <h5 className="articles__article--title">Cristina Peri Rossi</h5>
          <h6 className="articles__article--text">Montevideo, Uruguay, 1941</h6>
          <p className="articles__article--text">
            Escritora y poeta uruguaya destacada por su obra literaria que
            abarca poesía, narrativa y ensayo. Exiliada en España desde 1972 por
            razones políticas, su trabajo explora temas como el exilio, la
            identidad, la sexualidad entre mujeres y la propia literatura.
          </p>
          <a
            className="articles__article--wiki"
            href="https://es.wikipedia.org/wiki/Cristina_Peri_Rossi"
            target="_blank"
          >
            Link a su wikipedia
          </a>
        </article>
        <article id="Luisa_Castro" className="articles__article">
          <h5 className="articles__article--title">Luisa Castro</h5>
          <h6 className="articles__article--text">Foz, Lugo, España 1966</h6>
          <p className="articles__article--text">
            Escribiendo en castellano y gallego, la obra de Luisa Castro se
            caracteriza por una profunda exploración de la identidad y la
            experiencia femenina. Ha recibido varios premios literarios,
            incluyendo el Premio Hiperión de Poesía y el Premio de Novela
            Torrente Ballester.
          </p>
          <a
            className="articles__article--wiki"
            href="https://es.wikipedia.org/wiki/Luisa_Castro"
            target="_blank"
          >
            Link a su wikipedia
          </a>
        </article>
        <article id="Gloria_Fuertes" className="articles__article">
          <h5 className="articles__article--title">Gloria Fuertes</h5>
          <h6 className="articles__article--text">
            Madrid, 1917 - Madrid, 1998
          </h6>
          <p className="articles__article--text">
            De esta autora es muy conocida su poesía para lectores infantiles,
            aunque escribió mucho también para adultos. Su estilo sencillo y
            directo, junto con su humor y ternura, la hicieron muy popular. Fue
            una figura importante de la Generación del 50.
          </p>
          <a
            className="articles__article--wiki"
            href="https://es.wikipedia.org/wiki/Gloria_Fuertes"
            target="_blank"
          >
            Link a su wikipedia
          </a>
        </article>
        <article id="Alejandra_Pizarnik" className="articles__article">
          <h5 className="articles__article--title">Alejandra Pizarnik</h5>
          <h6 className="articles__article--text">
            Avellaneda, Argentina, 1936 - Buenos Aires, Argentina, 1972
          </h6>
          <p className="articles__article--text">
            Poeta argentina cuyas obras exploran temas de la muerte, la soledad
            y la búsqueda de identidad.Su poesía, influenciada por el
            surrealismo, es conocida por su intensidad y profundidad emocional.
            Su vida fue marcada por la fragilidad mental y terminó trágicamente
            con su suicidio.
          </p>
          <a
            className="articles__article--wiki"
            href="https://es.wikipedia.org/wiki/Alejandra_Pizarnik"
            target="_blank"
          >
            Link a su wikipedia
          </a>
        </article>
        <article id="Rosario Castellanos" className="articles__article">
          <h5 className="articles__article--title">Rosario Castellanos</h5>
          <h6 className="articles__article--text">
            Ciudad de México, México, 1925 - Tel Aviv, Israel, 1974
          </h6>
          <p className="articles__article--text">
            Escritora, poeta, ensayista y diplomática mexicana. Su obra aborda
            la opresión de las mujeres y los indígenas en México. Fue una de las
            voces más importantes de la literatura mexicana del siglo XX y es
            recordada por su compromiso social y feminista.
          </p>
          <a
            className="articles__article--wiki"
            href="https://es.wikipedia.org/wiki/Rosario_Castellanos"
            target="_blank"
          >
            Link a su wikipedia
          </a>
        </article>
      </section>
    </div>
  );
}

export default About;
