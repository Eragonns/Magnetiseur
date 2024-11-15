const Magnetisme = () => {
  return (
    <section>
      <h1 className="magnetisme_title">Qu&apos;est-ce que le magnétisme ?</h1>
      <div className="magnetisme_flex">
        <img
          src="/citationAlbertCamus.webp"
          alt="image d'une citation d'Albert Camus"
          className="magnetisme_img"
        />
        <article className="magnetisme_article">
          <h2 className="magnetisme_title2">Soulager, Apaiser et Calmer</h2>
          <p className="magnetisme_text">
            Solutions à vos maux: Douleurs articulaires, arthrite, arthrose,
            courbatures, entorse, tendinite, mal de dos. Douleurs lombaires.
            Problèmes de peau, eczéma, zona, psoriasis. Troubles digestifs,
            douleurs abdominales, ou circulatoires. Soulager les brûlures
            (couper le feu) Soulager après les séances de radiothérapie, de
            chimiothérapie. Les plaies, l&apos;inflammation. Le mal être, le
            stress, l&apos;insomnie, les migraines. Liste non exhaustive.{" "}
          </p>
        </article>
      </div>
      <ul className="magnetisme_lists">
        {" "}
        <h2 className="magnetisme_lists_title">
          Déroulement d&apos;une séance.
        </h2>
        <h3 className="magnetisme_lists_stitle">
          La durée d&apos;une séance est d&apos;environ 1 heure.
        </h3>
        <li className="magnetisme_lists_text">
          - On commence par un entretien afin de cibler la problématique
        </li>
        <li className="magnetisme_lists_text">
          - La détection de polarité du sujet.
        </li>
        <li className="magnetisme_lists_text">
          - Une prise de contact pour équilibrer le magnétisme du sujet et celui
          du magnétiseur.
        </li>
        <li className="magnetisme_lists_text">- Les passes de saturation</li>
        <li className="magnetisme_lists_text">- Les passes de traitement.</li>
        <li className="magnetisme_lists_text">- Les passes de dégagement.</li>
      </ul>

      <p className="magnetisme_text2">
        Mes soins ne se substituent pas à un avis médical. Je ne fais aucun
        diagnostic, et ne demande en aucun cas l&apos;arret d&apos;un
        traitement.
      </p>
    </section>
  );
};
export default Magnetisme;
