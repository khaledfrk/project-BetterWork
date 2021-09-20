<template>
  <div>
    <div class="container m-0">       
        <ul class="nav nav-tabs">
          <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
          <li><router-link to="/dashboard/requests/consult" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Requests</span></router-link></li>
          <li><router-link to="/dashboard/requests/access" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Demand Access</span></router-link></li>
          <li><router-link to="/dashboard/requests/accepted" tag="span" data-toggle="tab" class="nav-item nav-link active"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Accepted Requests</span></router-link></li>
          <li><router-link to="/dashboard/requests/refused" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Refused Requests</span></router-link></li>
        </ul>
    </div>
    <header>
            <div class="container mb-5 " style="margin: auto; max-width: 1000px;">
                <div class="row mb-5">
                    <div class="col-8  pt-0 ">
                        <div style="padding-top: 10px;">
                            <h2 style="color: #e97923 ; ">Accepted Requests</h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container " style="margin: auto; max-width: 1000px;"  v-for="dem in demands" :key="dem._id">
                <div class="row   mb-5 ">
                    <div class="col-10">
                        <div class="card shadow" style="border-left: solid #e97923 50px;">
                            <div>
                                <img src="../../../assets/home/user(1).png" alt="Avatar" class="avatar m-4 " style="float: left;">
                                <div class="m-5" style="float: right;">
                                    <button @click="handleGetRequestById(dem._id)" type="button" class="btn moreBtn" style="color: white;" data-toggle="modal" data-target="#exampleModal">see more</button>
                                </div>
                                <div class="m-4 pt-2 ">
                                    <h3 v-if="dem.owner">{{dem.owner.lastname}} {{dem.owner.firstname}}</h3>
                                    <h3 v-else>account deleted</h3>
                                    <p style="color: grey;" class="requestsType" v-if="dem.service">{{dem.service.name}}</p>
                                    <p style="color: grey;" class="requestsType" v-else>service deleted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="demand">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <a href="#" data-dismiss="modal" aria-label="Close" style="float: right;">
                                    <img id="closeIcon" src="../../../assets/home/close .png">
                                </a>
                            </div>
                            <div class="modal-body mt-0">
                                <img src="../../../assets/home/user(1).png" alt="Avatar" class="avatar m-4 p-3" style="float: left;">
                                <div class="m-4 pt-2 " v-if="demand.owner">
                                    <h3>{{demand.owner.lastname}} {{demand.owner.firstname}}</h3>
                                    <p class="requestsType" style="color: grey;">{{demand.owner.job}}</p>
                                </div>
                                <div class="m-4 pt-2 " v-else>
                                    <h3>account deleted</h3>
                                </div>
                                <div class="m-4 pt-2 ">
                                    <h4 style="float: left; color: rgb(95, 91, 91);">Request : &nbsp;</h4>
                                    <h4 style="color:  #0e1e58;" class="job" v-if="demand.service">{{demand.service.name}}</h4>
                                    <h4 style="color:  #0e1e58;" class="job" v-else>service deleted</h4>
                                    <h4 style=" color: rgb(95, 91, 91); margin-top: 20px; ">Documents : &nbsp;</h4>
                                    <div style="margin: auto; max-width: 350px;" class="mt-3 mb-3" v-for="doc in demand.documents" :key="doc">
                                        <!--<a  data-lightbox="myFiles">-->
                                            <!--<div class="m-2" style="border: dashed grey 1px;float: left;">
                                                <img :src="doc" alt="Avatar" class="  file">
                                            </div>-->
                                            <!--<object :data="doc" type="application/pdf" width="100%" height="100%">
                                              <p>Alternative text - include a link <a :href="doc">to the PDF!</a></p>
                                            </object>-->
                                            <div class="container">
                                                <!-- Trigger the modal with a button -->
                                                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">A - Cover Page<embed :src="'http://localhost:3000/' + doc" frameborder="0" width="0%" height="0px"></button>
                                                <!-- Modal -->
                                                <div id="myModal" class="modal fade" role="dialog">
                                                    <div class="modal-dialog modal-lg">
                                                    
                                                        <!-- Modal content
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                            </div>
                                                            <div class="modal-body">
                                                            
                                                                <embed :src="'http://localhost:3000/' + doc" frameborder="0" width="100%" height="400px">
                                                                <iframe :src="'http://localhost:3000/' + doc" width="600" height="780" style="position: absolute;top: 66px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 3;height: 100%;"></iframe>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                        </div>-->
                                                    </div>
                                                </div>
                                            </div>
                                        <!--
                                            <a href="naiss.jpg" data-lightbox = "myFiles">
                                                <div class="m-2 " style="border: dashed grey 1px;float: left;">
                                                    <img src="naiss.jpg" alt="Avatar" class="  file ">
                                                </div>
                                            </a>
                                            <a href="file.png" data-lightbox = "myFiles">
                                                <div class="m-2 files" style="border: dashed grey 1px;float: left;">
                                                    <img src="file.png" alt="Avatar" class="  file">
                                                </div>
                                            </a>
                                            <a href="file.png" data-lightbox = "myFiles">
                                                <div class="m-2 files" style="border: dashed grey 1px;float: left;">
                                                    <img src="file.png" alt="Avatar" class="  file">
                                                </div>
                                            </a>
                                        -->
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'AcceptedRequests',
  computed: {
    ...mapGetters(['token', 'demands', 'demand', 'typeOfService'])
  },
  created() {
    this.handleGetRequests()
  },
  methods: {
    replaceUrl(doc) {
        let newDoc = doc.replace("\\", "/")
        return newDoc
    },
    handleGetRequestById(id) {
        this.$store.dispatch("getRequestById", {id, token: this.token})
        console.log(this.demand)
    },
    handleGetRequests() {
        this.$store.dispatch("getRequests", {
            state: 'accepted',
            token: this.token
        })
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
