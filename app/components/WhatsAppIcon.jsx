export default function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <img
      className={`whatsapp-icon ${className}`.trim()}
      src="/imgs/whatsapp.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
    />
  );
}
