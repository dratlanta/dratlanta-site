import styles from './ConsultPlanner.module.css';
import GhlBooking from './GhlBooking';

export default function ConsultPlanner() {
  return (
    <div className={styles.wrap}>
      <div className={styles.planner}>
        <h3 className={styles.prompt}>Your smile. Your next step.</h3>
        <div className={styles.q}>
          <p>Tell us what you would like to change and upload your photos using the form.</p>
          <p style={{ marginTop: 20 }}>After you submit, choose a photo estimate or request a virtual consultation with Dr. Atlanta.</p>
          <p style={{ marginTop: 20 }}>For a photo estimate, Dr. Atlanta will review your completed form and clear photos and email a preliminary quote within 24 hours. This is a personal review, not an instant quote.</p>
          <p style={{ marginTop: 20 }}>Prefer to talk it through? We will email you to arrange your virtual consultation and send a Google Meet link once the time is confirmed.</p>
          <p style={{ marginTop: 20 }}>Interested in monthly payment options? Let us know when you reply to your estimate.</p>
          <p className="small" style={{ marginTop: 24 }}>Final recommendations and pricing require an in-person exam and necessary X-rays. We will discuss any changes before treatment.</p>
        </div>
      </div>
      <div id="book" className={`form ${styles.form}`}>
        <p className="small" style={{ marginBottom: 14 }}>Complete your form and add clear photos. Choose your next step after submitting.</p>
        <GhlBooking />
      </div>
    </div>
  );
}
  
