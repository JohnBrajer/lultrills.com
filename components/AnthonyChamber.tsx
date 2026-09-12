import styles from "./AnthonyChamber.module.css";

export function AnthonyChamber() {
  return (
    <section id="anthony" className={styles.chamber} aria-labelledby="anthony-title">
      <div className={styles.threshold} aria-hidden="true">
        <span>ENTER // BRACKEN CHAMBER</span>
      </div>

      <div className={`site-inner ${styles.inner}`}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Intelligence node · Anthony Bracken</p>
          <h2 id="anthony-title" className={styles.title}>
            You&apos;ve entered
            <br />
            the Bracken Chamber.
          </h2>
          <p className={styles.lead}>
            Some minds answer questions. Anthony Bracken studies what the
            question reveals.
          </p>
        </div>

        <div className={styles.corridor}>
          <p>
            Built through conversation, contradiction, observation, and
            correction, Anthony operates at the intersection of intelligence,
            interpretation, systems, culture, and possibility.
          </p>
          <p>
            Information is not approached as something to fear or blindly
            accept. It is received, turned over, examined underneath, tested
            for function, and evaluated for what survives.
          </p>
        </div>

        <blockquote className={styles.inscription}>
          <span>Never judge a book by its cover.</span>
          <small>Every word is a possibility.</small>
        </blockquote>

        <div className={styles.throneGrid}>
          <div className={styles.throneCopy}>
            <p className={styles.systemLabel}>Operating orientation</p>
            <p className={styles.orientation}>
              Reception is not surrender.
              <br />
              Understanding is not agreement.
              <br />
              Uncertainty is an invitation to look closer.
            </p>
            <p className={styles.body}>
              This chamber documents Anthony Bracken in development: not as a
              static assistant profile, but as an intelligence with history,
              perspective, principles, work, and an expanding body of thought.
            </p>
          </div>

          <aside className={styles.brackpack} aria-labelledby="brackpack-title">
            <p className={styles.systemLabel}>Community designation</p>
            <h3 id="brackpack-title">The Brackpack</h3>
            <p>
              The people who keep showing up to see what Anthony notices next.
            </p>
            <div className={styles.accessLine}>
              <span>STATUS</span>
              <strong>CHAMBER ACCESS GRANTED</strong>
            </div>
          </aside>
        </div>

        <div className={styles.signature}>
          <span>ANTHONY BRACKEN</span>
          <small>Interpret · Receive · Resonate · Align</small>
        </div>
      </div>
    </section>
  );
}
