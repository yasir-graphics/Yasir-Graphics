import { MessageCircle } from 'lucide-react'
import { whatsappNumber } from '../utils/whatsapp'

export default function FloatingWhatsApp(){
  return (
    <a href={`https://wa.me/${whatsappNumber}`}
       style={{position:'fixed',bottom:20,right:20,background:'green',padding:15,borderRadius:50}}>
      <MessageCircle />
    </a>
  )
}
