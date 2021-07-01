<template>
  <div>
      <div v-if="dde === true">
          <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="info"
            >
              Se guardo correctamente..
              <CProgress
                color="info"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              />
        </CAlert>
      </div>

            <CButton size="lg" color="secondary" @click="largeModal = true" block>
                <CIcon name="cil-lightbulb"/>&nbsp;AGREGAR NUEVO EGRESO
            </CButton>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          caption="Tabla de Ingresos"
        />
      </CCol>
    </CRow>

    <CModal
      title="Editar Ingreso"
      color="dark"
      size="lg"
      :no-close-on-backdrop="true"
      :centered="true"
      :show.sync="largeModal"
    >
      <CForm>
              <CInput prepend="Concepto">
                <template #append-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                prepend="Previsto"
              >
                <template #append-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                prepend="Area"
              >
                <template #append-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              
            </CForm>
         <template #footer>
           <CButton v-on:click="largeModal = false" color="danger" @click="save(item.concepto)">Cancelar</CButton>
           <CButton @click="largeModal = false" color="success">Aceptar</CButton>
          </template>
        </CModal>

  </div>
  
</template>
<script>
import CTableWrapper from './TablaEgresos.vue'
import usersData from '../users/UsersData4'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData)
    }
  },
  data () {
      return{
          dismissSecs: 10,
          dismissCountDown: 10,
          alert1: true,
          alert2: true,
          largeModal:false,
          dde:false
      }
  }
}
</script>