export default function Services(){
  const items = ['Logo Design','Brand Identity','Social Media','Thumbnails','Business Cards','Full Branding']
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,padding:30}}>
      {items.map(i=>(
        <div key={i} style={{padding:20,border:'1px solid #333'}}>
          {i}
        </div>
      ))}
    </div>
  )
}
