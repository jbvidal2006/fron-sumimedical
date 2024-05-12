import Swal from 'sweetalert2'

export function mostrarAlerta (titulo, icono, foco = '') {
  if (foco !== '') {
    document.getElementById(foco).focus()
  }
  Swal.fire({
    title: titulo,
    icon: icono,
    customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoonIn' },
    buttonStyling: false
  })
}
