export default function Navbar({ setPage }) {
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:20,borderBottom:'1px solid #333'}}>
      <h2>Yasir Graphics</h2>
      <div>
        {['home','about','services','portfolio','clients','contact'].map(p=>(
          <button key={p} onClick={()=>setPage(p)} style={{margin:5}}>
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}
