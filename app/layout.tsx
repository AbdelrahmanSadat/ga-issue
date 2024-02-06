import { GoogleAnalytics } from '@next/third-parties/google'


export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
      <GoogleAnalytics gaId={"G-XXXXXXXX"}/>

    </html>
  );
}
