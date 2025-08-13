"use client";
export default function ContactForm() {
  return (
    <form className="mt-8 grid gap-4 max-w-xl"
      action="https://formsubmit.co/waveagency.booking@gmail.com"
      method="POST"
      onSubmit={() => (window as any).plausible?.("Form_Contact_Submit")}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Nouveau message depuis Wave Agency" />
      <label className="grid gap-1">
        <span className="text-sm text-zinc-300">Nom</span>
        <input name="name" required className="rounded-xl bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-white/25" placeholder="Votre nom" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-zinc-300">E-mail</span>
        <input type="email" name="email" required className="rounded-xl bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-white/25" placeholder="vous@exemple.com" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-zinc-300">Téléphone</span>
        <input name="phone" className="rounded-xl bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-white/25" placeholder="+33 ..." />
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-zinc-300">Message</span>
        <textarea name="message" required rows={5} className="rounded-xl bg-white/5 px-3 py-2 text-white outline-none ring-1 ring-white/10 focus:ring-white/25" placeholder="Parlez-nous de votre projet…" />
      </label>
      <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-white hover:bg-white/20">
        Envoyer
      </button>
    </form>
  );
}
