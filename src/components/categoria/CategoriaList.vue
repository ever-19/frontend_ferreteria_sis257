<script setup lang="ts">
import type { Categoria } from '@/models/categoria'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import { useAuthStore } from "@/stores/index";
const authStore = useAuthStore();

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var categorias = ref<Categoria[]>([])

async function getCategorias() {
  categorias.value = await http.get(ENDPOINT).then((response) => response.data)
  //va devolver un lista de categorias de la base de datos
}

function toEdit(id: number) {
  router.push(`/categorias/editar/${id}`)
  //redirecciona a otra vista en este caso a editar
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Intérprete?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCategorias())
  }
}

onMounted(() => {
  getCategorias()
})
</script>

<template>
  <div v-if="authStore.token">
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
                <li class="breadcrumb-item active" aria-current="page">Categorias</li>
              </ol>
            </nav>
            <h2>LISTA DE CATEGORIAS</h2>
            <div class="col-12">
              <RouterLink to="/categorias/crear">Crear Nuevo</RouterLink>
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
            <th scope="col">Categoria</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-warning" v-for="(categoria, index) in categorias.values()" :key="categoria.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ categoria.descripcion }}</td>
            <td>
              <button class="btn btn-warning" @click="toEdit(categoria.id)">Editar</button>
              <button class="btn btn-danger" @click="toDelete(categoria.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<style scoped></style>