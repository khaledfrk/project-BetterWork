<template>
  <div>
    <div class="container m-0">       
        <ul class="nav nav-tabs">
          <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
          <li><router-link to="/dashboard/debts/update" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Edit</span></router-link></li>
          <li><router-link to="/dashboard/debts/current" tag="span" data-toggle="tab" class="nav-item nav-link active"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Debts</span></router-link></li>
          <li><router-link to="/dashboard/debts/archive" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Archives</span></router-link></li>
        </ul>
        <div class="row">
            <h3 class="p-5 pt-4 col-4">Debts</h3>
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
                  <div class="col-3">
                     <div class="row justify-content-end mt-4">
                       <div class="col-3 mt-4 p-0"><a @click="handleGetDebtorById(deb._id)" class="edit" title="Edit" data-toggle="tooltip" ><i class="material-icons linka" type="submit" data-toggle="modal" data-target="#exampleModalCenter" style="text-decoration: none; cursor: pointer;">&#xE254;</i></a></div>
                     </div>
                  </div>
               </div>
            </div>
            
                    <!-- Modal -->
                    <div class="modal fade"  size="sm" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" v-if="debtor">
                     <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                           <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                           </div>
                           <div class="modal-body">
                              <!--div class="d-block center"-->
                              <div class="row">
                                 <div class="col-3">
                                    <img src="../../../../assets/employees/khaled.jpg.png" style="float: left;" alt="Avatar" class="avatar m-4">
                                 </div>
                                 <div class="col-7 m-4">
                                    <h4>{{debtor.owner.lastname}} {{debtor.owner.firstname}}</h4>
                                    <p class="lead">{{debtor.remain}}</p>
                                 </div>
                              </div>
                            
                              <div class="row m-4 p-2">
                                 <div class ="col-2" style="margin-top: +15px">
                                    <label for="Paid" >
                                       <h5>Paid:</h5>
                                    </label>
                                 </div>
                                 <div class ="search col-3 m-0 ml-2" style="width: 30%" >
                                    <input v-model="paid" type="number" class="form-control mb-4" id="Paid" placeholder="">
                                    <input id="Button" style="margin-top:-30px; margin-right: -1px; padding: 10px" type="submit" class="search-icon btn-grad" value="+" />
                                    <input type="number" class="fa fa-search" id="add" value="" style ="margin-top: -26px; width: 100%; display: none " placeholder="">

                                    
                                 </div>

                                 <!--div class="search col-3  ">
                                  <input type="text" class="search-input p-2 border m-0" placeholder="Search..." name=""> 
                                  <a href="#" class="search-icon btn-grad " style="margin-top:-5px; margin-right: 2px;" > 
                                   <i>
                                     +
                                   </i>
                                 </a> 
                               </div-->
                              </div>
                           </div>
                       
                        <div class="modal-footer">
                           <button type="button" class="btn btn-secondary p-1 pl-3 pr-3 btn-grad2" data-dismiss="modal" >CLOSE</button>
                           <button @click="handleUpdateDebtor(debtor._id)" type="button" class="btn btn-primary btn-grad p-1 pl-3 pr-3">Save changes</button>
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
  name: 'CurrentDebts',
  data() {
     return {
        paid: 0
     }
  },
  computed: {
    ...mapGetters(['services', 'debtors', 'debtor', 'types', 'typeOfService', 'token'])
  },
  created() {
   this.handleGetDebtorsUnpaid()
   this.handleGetTypeDebt()
  },
  methods: {
   handleGetTypeDebt() {
     this.$store.dispatch("getTypeDebt", {})
     //this.$router.push("/debts/request")
   },
   /*handleGetDebt() {
       this.$store.dispatch("getDebt", {
           service: this.services[0]
       })
   },*/
   handleGetDebtorById(id) {
     this.$store.dispatch("getDebtorById", {
        id,
        token: this.token
     })
   },
   handleGetDebtorsUnpaid() {
      this.$store.dispatch("getDebtorsUnpaid", {
        token: this.token
      })
   },
   handleUpdateDebtor(id) {
      let remain = this.debtor.remain - this.paid
      this.$store.dispatch("updateDebtor", {
        id,
        remain,
        token: this.token
     })
     const updates = {
        budget: this.services[0].budget + this.paid
     }
     vm.$store.dispatch("updateService", {
        id: demand.service._id,
        updates,
        token: this.token
      })
      vm.$store.dispatch("getGraphServiceByService", {
              service: demand.service._id,
              token: this.token
      }).then(res => {
          vm.$store.dispatch("updateGraphService", {
              id: res.data._id,
              budget: {
                  value: res.data.budgetValues.value[res.data.budgetValues.length - 1] + this.paid,
                  date: new Date()
              },
              token: this.token
          }).then(res => {
              vm.$store.commit('setGraphService', res.data)
              const updates = {
                budget: this.paid
              }
              vm.$store.dispatch("updateType", {
                id: res.data.typeOfService._id,
                updates: updates,
                token: this.token
              }).then(res => {
                  const TypeBudget = res.data.budget
                  vm.$store.dispatch("getGraphTOSByType", {
                    typeOfService: res.data._id,
                    token: this.token
                  }).then(res => {
                      vm.$store.commit('setGraphTOS', res.data)
                      vm.$store.dispatch("updateGraphTOS", {
                          id: res.data._id,
                          budget: {
                            value: TypeBudget,
                            date: data.budgetValues.date
                          },
                          token: this.token
                      })
                      vm.$store.dispatch("getGraphAllById", {
                          token: this.token
                      }).then(res => {
                          vm.$store.commit('setGraphAll', res.data)
                          vm.$store.dispatch("updateGraphAll", {
                              id: res.data._id,
                              budget: {
                                value: res.data.budgetValues[res.data.budgetValues.length - 1].value + this.paid,
                                date: data.budgetValues.date
                              },
                              token: this.token
                          }).then(res => 
                              commit("setGraphAll", res.data))
                          .catch(e => console.log(e))
                          vm.$store.dispatch("updateGraphAllSpendings", {
                              id: res.data._id,
                              amount: this.paid,
                              token: this.token
                          }).then(res => 
                              commit("setGraphAll", res.data))
                          .catch(e => console.log(e))
                      }).catch(e => console.log(e))
                  }).catch(e => console.log(e))
              }).catch(e => console.log(e))
          }).catch(e => console.log(e))
      }).catch(e => console.log(e))
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
