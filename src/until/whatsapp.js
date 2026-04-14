export const whatsappNumber = '966579878473'

export const sendWhatsApp = (form) => {
  const text = `Hello, I am ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
}
