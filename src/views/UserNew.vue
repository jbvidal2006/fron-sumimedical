<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Registrar usuario
                </div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" placeholder="Ingrese nombre" required maxlength="50"  id="nombre" class="input form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-envelope-open "></i></span>
                            <input type="text" v-model="email" placeholder="Ingrese email" required maxlength="50"  id="email" class="input form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-key"></i></span>
                            <input type="password" v-model="password" placeholder="Ingrese contraseña" required maxlength="50"  id="password" class="input form-control">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-key"></i></span>
                            <input type="password" v-model="confirmPassword" placeholder="Confirme su contraseña" required maxlength="50"  id="confirmPassword" class="input form-control">
                        </div>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk">Crear usuario</i></button>
                            <p v-if="password !== '' && confirmPassword !== '' && password !== confirmPassword">Las contraseñas no coinciden.</p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  </template>
<script>
import axios from 'axios'
import { mostrarAlerta } from '../funciones'
export default {
  data () {
    return {
      nombre: '',
      email: '',
      password: '',
      confirmPassword: '',
      cargando: false
    }
  },
  methods: {
    guardar () {
      this.cargando = true
      if (this.nombre.trim() === '') {
        mostrarAlerta('Ingrese un nombre', 'warning', 'nombre')
      }
      if (this.password === this.confirmPassword) {
        var parametros = { name: this.nombre, email: this.email, password: this.password }
        axios.get('/api/storetask', parametros)
          .then(response => {
            mostrarAlerta('Usuario creado exitosamente', 'success', 'usuario creado')
          })
          .catch(error => {
            mostrarAlerta(error.response.data, 'werning', 'error')
          })
      }
    }
  }
}
</script>
