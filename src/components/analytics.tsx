'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

export default function Analytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) return null;

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
