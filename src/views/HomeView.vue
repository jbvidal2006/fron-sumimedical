<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>N°</th>
              <th>Id</th>
              <th>Nombre</th>
              <th>email</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="this.cargando">
              <td colspan="6"><h3>Cargando</h3></td>
            </tr>
            <tr v-else v-for="us, i in this.users" :key="us.id">
              <td v-text="(i+1)"></td>
              <td v-text="(us.id)"></td>
              <td v-text="(us.name)"></td>
              <td v-text="(us.email)"></td>
              <td>********</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: null,
      cargando: false
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      this.cargando = true
      axios.get('http://127.0.0.1:8000/api/user').then(
        res => {
          this.users = res.data
          this.cargando = false
        }
      )
    }
  }
}
</script>
