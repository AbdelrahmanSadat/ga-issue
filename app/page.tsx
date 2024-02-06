/** Add your relevant code here for the issue to reproduce */
"use client";
import { sendGAEvent } from "@next/third-parties/google"

export default function Home() {
  return <>
    <button onClick={() => sendGAEvent({event: "page_view", value: ''})}>Send event with sendGAEvent</button>
    <button onClick={() => (window as any).gtag("event", "page_view", {value: ''})}>Send event with window.gtag</button>
  </>
}
