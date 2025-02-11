"use client";

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Sección de encabezado */}
      <header className={styles.header}>
        <h1 className={styles.title}>🚬❌ Vapeadores: La verdad que NO quieren que sepas</h1>
        <Image src="/vapeador-1.webp" alt="Joven exhalando vapor" width={800} height={450} className={styles.image} />
      </header>

      {/* Sección de introducción */}
      <section className={styles.section}>
        <p>Los vapeadores han sido vendidos como una alternativa &quot;segura&quot; al cigarro, pero la realidad es muy distinta. Cada bocanada es una mezcla tóxica de sustancias químicas que pueden <strong>dañar tus pulmones, tu corazón y tu cerebro</strong>.</p>
      </section>

      {/* Sección de Mitos vs Realidad */}
      <section className={styles.section}>
        <h2>⚠️ Mitos vs Realidad</h2>
        <Image src="/vapeador-2.webp" alt="Comparación de vapeador con pulmones dañados" width={800} height={450} className={styles.image} />
        <ul className={styles.list}>
          <li><strong>❌ Mito:</strong> Vapear es solo vapor de agua.<br /><strong>✅ Realidad:</strong> Contiene <strong>metales pesados, nicotina y químicos tóxicos</strong> que afectan tu salud.</li>
          <li><strong>❌ Mito:</strong> No es adictivo.<br /><strong>✅ Realidad:</strong> La mayoría de los vapeadores contienen nicotina, una de las sustancias más adictivas del mundo.</li>
          <li><strong>❌ Mito:</strong> No afecta tu rendimiento físico.<br /><strong>✅ Realidad:</strong> Reduce la capacidad pulmonar, afecta la oxigenación y disminuye tu resistencia.</li>
        </ul>
      </section>

      {/* Sección de efectos en el cuerpo */}
      <section className={styles.section}>
        <h2>💔 Los efectos en tu cuerpo</h2>
        <Image src="/vapeador-3.webp" alt="Órganos afectados por el vapeo" width={800} height={450} className={styles.image} />
        <ul className={styles.list}>
          <li>🔥 <strong>Pulmones:</strong> Enfermedades respiratorias, daño irreversible en los alveolos.</li>
          <li>🧠 <strong>Cerebro:</strong> Afecta la memoria y concentración, genera ansiedad y dependencia.</li>
          <li>❤️ <strong>Corazón:</strong> Aumenta el riesgo de ataques cardiacos y presión arterial alta.</li>
          <li>👩‍⚕️ <strong>Jóvenes en riesgo:</strong> Los adolescentes son los más vulnerables a la adicción.</li>
        </ul>
      </section>

      {/* Sección de la industria */}
      <section className={styles.section}>
        <h2>📢 La industria no te dice la verdad</h2>
        <Image src="/vapeador-4.webp" alt="Joven atrapado en un vapeador gigante" width={800} height={450} className={styles.image} />
        <p>Las marcas de vapeadores diseñan sus productos para que sean <strong>atractivos y adictivos</strong>. Usan sabores como mango, menta y vainilla para engancharte sin que te des cuenta.</p>
        <p><strong>❗ Más del 80% de los jóvenes que vapean no planeaban hacerlo.</strong></p>
      </section>

      {/* Sección de acción */}
      <section className={styles.section}>
        <h2>❌ Tú decides romper el ciclo</h2>
        <Image src="/vapeador-5.webp" alt="Rompiendo un vapeador" width={800} height={450} className={styles.image} />
        <p>✋ <strong>No caigas en la trampa.</strong> Si ya vapeas, busca ayuda para dejarlo. Si aún no lo has probado, <strong>no empieces</strong>.</p>
        <p>📢 <strong>Comparte este mensaje y salva una vida.</strong></p>
      </section>
    </div>
  );
}
