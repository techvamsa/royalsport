import styles from "@/app/styles/ThankYou.module.scss"
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Success Icon */}
        <div className={styles.icon}>
          <span>✅</span>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>Thank You!</h1>

        {/* Message */}
        <p className={styles.message}>
          Your submission has been received successfully.  
          We’ll get back to you shortly.
        </p>

        {/* Button */}
        <Link href="/" className={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
