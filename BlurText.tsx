"use client";
import { useEffect, useState } from "react";
export default function BlurText({ text }: { text: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 50); return () => clearTimeout(t); }, []);
  return <span className={show ? "animate-blurIn" : "opacity-0"}>{text}</span>;
}
