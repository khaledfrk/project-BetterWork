<template>
  <div class="p-4">
    <div class="container m-0" v-if="types">       
        <ul class="nav nav-tabs">
          <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
          <li><a data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none;"><router-link to="/dashboard/services/donations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Donations</span></router-link></a></li>
          <li><a data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none;"><router-link to="/dashboard/services/compensations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Compensations</span></router-link></a></li>
          <li><a data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none;"><router-link to="/dashboard/services/offers" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Offers</span></router-link></a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ServicesNavBar',
  computed: {
    ...mapGetters(['types', 'typeOfService', 'token'])
  },
  created() {
    this.handleGetTypes()
  },
  methods: {
    handleGetTypes() {
      this.$store.dispatch("getTypes", {token: this.token})
      //this.typeOfService = this.types[0]
    },
    /*handleGetTypeById(id, name) {
      this.$store.dispatch("getTypeById", {id: id, token: this.token})
      console.log(this.typeOfService)
      this.$router.push('/dashboard/services/'+ name)
    }*/
  }  
}
</script>

<style>
        .btn-grad{
        background-image: linear-gradient(to right, #e97923 0%, #e97923 30%, #efa81d   100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 4px;
            display: block;
            border: 0px;
          }

          .btn-grad2:hover {
            background-color: black; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         .btn-grad2 {
           background-color: grey;
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 4px;
            display: block;
            border: 0px;
          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
          .linka{
            text-decoration: underline;
            color: #e97923;
          }
          .linka:hover{
            color:#efa81d;
            text-decoration: underline;

          }
          .search {
    width: 100%;
    margin-bottom: auto;
    margin-top: 20px;
    height: 50px;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px
}

.search-input {
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    margin-top: 5px;
    caret-color: transparent;
    line-height: 20px;
    transition: width 0.4s linear
}

.search .search-input {
    padding: 0 10px;
    width: 100%;
    caret-color: #536bf6;
    font-size: 19px;
    font-weight: 300;
    color: black;
    transition: width 0.4s linear
}

.search-icon {
    height: 34px;
    width: 34px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #536bf6;
    font-size: 10px;
    bottom: 30px;
    position: relative;
    border-radius: 5px
}

.search-icon:hover {
    color: #fff !important
}
          textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
  border-color: #e97923;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.025) inset, 0 0 10px #e97923;
  outline: 0 none;
}
.bootstrap-select .bs-ok-default::after {
    width: 0.3em;
    height: 0.6em;
    border-width: 0 0.1em 0.1em 0;
    transform: rotate(45deg) translateY(0.5rem);
}

.btn.dropdown-toggle:focus {
    outline: none !important;
}     

</style>
