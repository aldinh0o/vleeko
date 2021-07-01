<template>

  <CCardBody>
    <CDataTable
      :items="items"
      :fields="fields"
      column-filter
      table-filter
      items-per-page-select
      :items-per-page="5"
      hover
      sorter
      pagination
    >
      <template #opciones="{item}">
        
        <td>
          <CButton size="sm" color="info" class="" v-on:click="largeModal = true" @click="save(item.concepto)">
              Editar
            </CButton>
            <CButton size="sm" color="danger" class="ml-1" @click="dangerModal = true">
              Eliminar
            </CButton>
            
            <div>
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
        <CModal
      title="Desea eliminar la informacion"
      color="danger"
      :no-close-on-backdrop="true"
      :centered="true"
      :show.sync="dangerModal"
      footer-wrapper
    >
      Lorem
        <template #footer>
           <CButton v-on:click="dangerModal = false" color="danger" >Cancelar</CButton>
           <CButton v-on:click="dangerModal = false" color="success" @click="save(item.concepto)">Aceptar</CButton>
          </template>
        </CModal>
        </div>
        </td>
        
      </template>
      
       
      
    </CDataTable>

    
    
  </CCardBody> 

</template>


<script>
export default {
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['nombre','apellidos','fijo','carga_social','descuentos','total_base','total','rol','area','opciones']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    save(asd){
      console.log("mira "+asd)

    }
  },
  data () {
    return{
      largeModal:false,
      currentAlertCounter: 10,
      dangerModal: false
     
    }
  }
}
</script>
