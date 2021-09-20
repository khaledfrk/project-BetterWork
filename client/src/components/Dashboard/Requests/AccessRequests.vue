<template>
  <div>
    <div class="container m-0">       
        <ul class="nav nav-tabs">
          <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
          <li><router-link to="/dashboard/requests/consult" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Requests</span></router-link></li>
          <li><router-link to="/dashboard/requests/access" tag="span" data-toggle="tab" class="nav-item nav-link active"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Demand Access</span></router-link></li>
          <li><router-link to="/dashboard/requests/accepted" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Accepted Requests</span></router-link></li>
          <li><router-link to="/dashboard/requests/refused" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Refused Requests</span></router-link></li>
        </ul>
    </div>
    <header>
            <div class="container mb-5 " style="margin: auto; max-width: 1000px;">
                <div class="row mb-5">
                    <div class="col-8  pt-0 ">
                        <div style="padding-top: 10px;">
                            <h2 style="color: #e97923 ; ">Access Requests</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container " style="margin: auto; max-width: 1000px;"  v-for="dem in accDemands" :key="dem._id">
                <div class="row   mb-5 ">
                    <div class="col-10">
                        <div class="card shadow" style="border-left: solid #e97923 50px;">
                            <div>
                                <img src="../../../assets/home/user(1).png" alt="Avatar" class="avatar m-4 " style="float: left;">
                                <div class="m-5" style="float: right;">
                                    <button @click="handleGetRequestById(dem._id)" type="button" class="btn moreBtn" style="color: white;" data-toggle="modal" data-target="#exampleModal">Done</button>
                                </div>
                                <div class="m-4 pt-2 ">
                                    <h3 style="color: #0e1e58;">{{dem.lastname}} {{dem.firstname}}</h3>
                                    <h6 style="color:  grey;" class="job">{{dem.email}}</h6>
                                    <p class="requestsType" style="color: grey;">{{dem.job}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete request?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary p-1 pl-3 pr-3 btn-grad" data-dismiss="modal">keep</button>
                        <button @click="handleDeleteRequest(accDemand._id)" type="button" class="btn btn-primary btn-grad2 p-1 pl-3 pr-3"  data-dismiss="modal">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal -->

            </div>
        </main>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'AccessRequests',
  computed: {
    ...mapGetters(['token', 'accDemands', 'accDemand', 'typeOfService'])
  },
  created() {
    this.handleGetRequests()
  },
  methods: {
    handleGetRequestById(id) {
        this.$store.dispatch("getDemandAccById", {id, token: this.token})
        //console.log(this.demand)
    },
    handleDeleteRequest(id) {
        this.$store.dispatch("deleteDemandAcc", {id, token: this.token})
        this.$router.go()
        //console.log(this.demand)
    },
    handleGetRequests() {
        this.$store.dispatch("getDemandAccs", {token: this.token})
        //console.log(this.demands)
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
