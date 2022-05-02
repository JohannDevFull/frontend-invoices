<template>

  <div class="mt-4" style="border: 1px solid white">

    <div>
      <router-link class="btn btn-primary" to="/invoices-sales/create">
        Crear Factura compra
      </router-link>
    </div>

    <table class="table table-dark table-striped mt-4" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {
  },
  data(){
      return {
          show: 5,
          field: 'id',
          order: 'DESC',
          search: ''
      }
  },
  methods:{

    getInvoices()
    {
        var payload = {
            show:this.show,
            field:this.field,
            order:this.order,
            order:this.search
        };
        this.loading = true;

        alert(localStorage.getItem('token'))

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

        axios.post('http://127.0.0.1:8000/api/invoices-sales-pagination', payload)
        .then(response => {
            
            console.log("--------- ...... --------");
            console.log(response);
            console.log("--------- ...... --------");

            this.$router.push('/invoices-sales');
        })
        .catch(error => {
            var data = error.response.data;
        });

        this.loading = false;
    }
  }
}
</script>
