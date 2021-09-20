<template>
  <div>
    <div class="container m-0">       
        <ul class="nav nav-tabs">
          <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
          <li><router-link to="/dashboard/debts/update" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Edit</span></router-link></li>
          <li><router-link to="/dashboard/debts/current" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Debts</span></router-link></li>
          <li><router-link to="/dashboard/debts/archive" tag="span" data-toggle="tab" class="nav-item nav-link active"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Archives</span></router-link></li>
        </ul>
                  <div class="row">
                    <h3 class="p-5 pt-4 col-4">Archives</h3>
                    <div class="col-8">
                      <div class="row justify-content-end mb-4 mt-4 mr-2 pt-3">
                        <div class="search col-7 m-0 ml-2 "> <input type="text" class="search-input p-2 border m-0" placeholder="Search..." name=""> <a href="#" class="search-icon btn-grad " style="margin-top:-6px; margin-right: -1px;" > <i class="fa fa-search"></i> </a> </div>
                        
                      </div>
                  </div>
                  </div>
                  <div class="row  shadow m-1 mb-4" v-if="debtors.length > 0">
            <div class="pr-5" style="display: block; background-color: #2e5083; width: 2px;"></div>
            <div class="col-8 p-4 pr-0">
               <div class="row" v-for="deb in debtors" :key="deb._id">
                  <div class="col-2">
                     <img src="../../../../assets/employees/khaled.jpg.png" alt="Avatar" class="avatar">
                  </div>
                  <div class="col-6">
                     <h4>{{deb.owner.lastname}} {{deb.owner.firstname}}</h4>
                     <p class="lead">{{deb.owner.job}}</p>
                  </div>
                  <div class="col-4">
                          <div class="row justify-content-end mt-0">
                            <!--<div class="col-3">-->
                              <h4 style="color:  #0e1e58; margin-top: +5px;">{{deb.amount}} DA</h4>
                              <p class="lead">{{deb.updatedAt}}</p>
                            <!--</div>-->
                          </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Archive',
  computed: {
    ...mapGetters(['debtors', 'types', 'typeOfService', 'token'])
  },
  created() {
    this.handleGetDebtorsPaid()
  },
  methods: {
    handleGetDebtorsPaid() {
      this.$store.dispatch("getDebtorsPaid", {
        token: this.token
      })
    }
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
