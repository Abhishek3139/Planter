import { useEffect, useState } from 'react';
import { EmailSent } from '../loaders/emailSent';

export function ThankYou() {
  const [, setShowThankYouAnimation] = useState(false);
  useEffect(() => {
    setShowThankYouAnimation(true);

    return () => {
      setShowThankYouAnimation(false);
    };
  }, []);
  return (
    <>
      <EmailSent />
      <div>Thank you for registering. We’ve sent an email to</div>;
    </>
  );
}
