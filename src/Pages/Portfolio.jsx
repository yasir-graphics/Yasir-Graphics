export default function Portfolio(){
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,padding:30}}>
      {[1,2,3,4,5,6].map(i=>(
        <div key={i} style={{height:100,border:'1px solid #333',display:'flex',alignItems:'center',justifyContent:'center'}}>
          Design {i}
        </div>
      ))}
    </div>
  )
}
