<script setup lang="ts">
import type { Unidad } from '@/models/unidad'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var unidades = ref<Unidad[]>([])

async function getUnidades() {
  unidades.value = await http.get(ENDPOINT).then((response) => response.data)
  //va devolver un lista de unidades de la base de datos
}

function toEdit(id: number) {
  router.push(`/unidades/editar/${id}`)
  //redirecciona a otra vista en este caso a editar
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Intérprete?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getUnidades())
  }
}

onMounted(() => {
  getUnidades()
})
</script>

<template>
  <div class="find-us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-heading">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Unidads</li>
              </ol>
            </nav>
            <h2>LISTA DE UNIDADES</h2>
            <div class="col-12">
              <RouterLink to="/unidades/crear">Crear Nuevo</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





  <div class="container">


    <div class="table-responsive">
      <table class="table table-dark table-striped">
        <!-- <table class="table table-bordered"> -->
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Unidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-warning" v-for="(unidad, index) in unidades.values()" :key="unidad.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ unidad.descripcion }}</td>
            <td>
              <button class="btn btn-warning" @click="toEdit(unidad.id)">Editar</button>
              <button class="btn btn-danger" @click="toDelete(unidad.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>