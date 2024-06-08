import "../styles/AboutZozobra.scss";
//TODO: clickar en el nombre del ul y que me lleve al artículo de la poeta clickada. 
function About() {
  return (
    <div className="divsection">
      <section className="sectionaz">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          aspernatur, consequatur id repellendus eaque, delectus maxime nisi,
          quam voluptates quia quisquam aperiam voluptatem mollitia harum nobis
          ea neque quibusdam iusto?
        </p>
        <nav>
            <ul className="sectionaz__ul">
                <li className="sectionaz__ul--li">Cristina Peri Rossi</li>
                <li className="sectionaz__ul--li">Luisa Castro</li>
                <li className="sectionaz__ul--li">Gloria Fuertes</li>
                <li className="sectionaz__ul--li">Alejandra Pizarnik</li>
                <li className="sectionaz__ul--li">Rosario Castellanos</li>
            </ul>
        </nav>
      </section>
      <section className="articles">
        <article id="Cristina_Peri_Rossi" className="articles__article">
          <h5>Cristina Peri Rossi</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorum sunt tempore facere. Expedita, velit ratione pariatur iure dolores eum eius facere suscipit, culpa maiores optio, earum repellendus distinctio non?</p>
          <a className="articles__article--wiki" href="https://es.wikipedia.org/wiki/Cristina_Peri_Rossi" target="_blank">Link a su wikipedia</a>
        </article>
        <article id="Luisa_Castro" className="articles__article">
          <h5>Luisa Castro</h5>
          <p>resumen de su vida</p>
          <a className="articles__article--wiki" href="https://es.wikipedia.org/wiki/Luisa_Castro" target="_blank">Link a su wikipedia</a>
        </article>
        <article id="Gloria_Fuertes" className="articles__article">
          <h5>Gloria Fuertes</h5>
          <p>resumen de su vida</p>
          <a className="articles__article--wiki" href="https://es.wikipedia.org/wiki/Gloria_Fuertes" target="_blank">Link a su wikipedia</a>
        </article>
        <article id="Alejandra_Pizarnik" className="articles__article">
          <h5>Alejandra Pizarnik</h5>
          <p>resumen de su vida</p>
          <a className="articles__article--wiki" href="https://es.wikipedia.org/wiki/Alejandra_Pizarnik" target="_blank">Link a su wikipedia</a>
        </article>
        <article id="Rosario Castellanos" className="articles__article">
          <h5>Rosario Castellanos</h5>
          <p>resumen de su vida</p>
          <a className="articles__article--wiki" href="https://es.wikipedia.org/wiki/Rosario_Castellanos" target="_blank">Link a su wikipedia</a>
        </article>
      </section>
    </div>
  );
}

export default About;
