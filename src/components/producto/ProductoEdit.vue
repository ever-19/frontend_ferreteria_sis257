<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Categoria } from '@/models/categoria';

var categorias = ref<Categoria[]>([])
async function getCategorias() {
  categorias.value = await http.get("categorias").then((response) => response.data)
}

onMounted(() => {
  getCategorias()
})

const props = defineProps<{
    ENDPOINT_API: any
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const idCategoria = ref('')
const codigo = ref('')
const descripcion = ref('')
const unidad = ref('')
const precio = ref(0)
const existenciaProducto = ref(0)
const urlImagen = ref('')
const total = computed(() => precio.value * existenciaProducto.value)
const id = router.currentRoute.value.params['id']

async function editarProducto() {
    await http
        .patch(`${ENDPOINT}/${id}`, {
            idCategoria: idCategoria.value,
            codigo: codigo.value,
            descripcion: descripcion.value,
            unidad: unidad.value,
            precio: precio.value,
            existenciaProducto: existenciaProducto.value,
            urlImagen: urlImagen.value
        })
        .then(() => router.push('/productos'))
}

async function getProducto() {
    await http.get(`${ENDPOINT}/${id}`).then((response) => {
        ;   (idCategoria.value = response.data.idCategoria),
            (codigo.value = response.data.codigo),
            (descripcion.value = response.data.descripcion),
            (unidad.value = response.data.unidad),
            (precio.value = response.data.precio),
            (existenciaProducto.value = response.data.existenciaProducto),
            (urlImagen.value = response.data.urlImagen)
    })
}

function goBack() {
    router.go(-1)
}

onMounted(() => {
    getProducto()
})
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/productos">Productos</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Editar</li>
            </ol>
        </nav>

        <div class="find-us">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">

                        <h2>EDITAR DATOS DEL PRODUCTO</h2>
                        <button class="btn btn-link" @click="goBack">Volver</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <form @submit.prevent="editarProducto">
                <div class="form-floating mb-3">
                    <select v-model="idCategoria" class="form-select" >
                        <option v-for="categoria in categorias" :value="categoria.id" placeholder="categoria" required>{{ categoria.descripcion }} </option>
                    </select>
                    <label for="categoria">Categoria</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="codigo" placeholder="codigo" required />
                    <label for="codigo">Codigo</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="descripcion" placeholder="Descripcion" required />
                    <label for="descripcion">Descripcion</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="unidad" placeholder="Unidad" required />
                    <label for="unidad">Unidad</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="precio" placeholder="Precio" required />
                    <label for="precio">Precio</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="existenciaProducto" placeholder="existenciaProducto"
                        required />
                    <label for="existenciaProducto">ExistenciaProducto</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" v-model="urlImagen" placeholder="imagen" required />
                    <label for="imagen">URL Imagen</label>
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" v-model="total" placeholder="Total" required readonly />
                    <label for="Total">Total</label>
                </div>

                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-lg">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</template>


<style></style>


