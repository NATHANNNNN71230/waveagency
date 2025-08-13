export default function RollingGallery(){
  const items = Array.from({length:12},(_,i)=>`/cases/${i%2===0?"noon":"eshop"}.jpg`);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2">
      <div className="flex w-[200%] animate-marquee gap-2">
        {[...items, ...items].map((src,i)=>(
          <img key={i} src={src} alt="" className="h-24 w-auto rounded-md object-cover opacity-80" />
        ))}
      </div>
    </div>
  );
}
