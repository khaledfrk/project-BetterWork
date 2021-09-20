<template>
    <div>
        <div class="container m-0">       
            <ul class="nav nav-tabs">
              <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
                <li><router-link to="/dashboard/requests/consult" tag="span" data-toggle="tab" class="nav-item nav-link active"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Requests</span></router-link></li>
                <li><router-link to="/dashboard/requests/access" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Demand Access</span></router-link></li>
                <li><router-link to="/dashboard/requests/accepted" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Accepted Requests</span></router-link></li>
                <li><router-link to="/dashboard/requests/refused" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Refused Requests</span></router-link></li>
            </ul>
        </div>
        <header>
            <div class="container mb-5 " style="margin: auto; max-width: 1000px;">
                <div class="row mb-5">
                    <div class="col-8  pt-0 ">
                        <div style="padding-top: 10px;">
                            <h2 style="color: #e97923 ; ">Requests</h2>
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
                            <div class="modal-footer" v-if="demand.service && demand.owner">
                                <button @click="handleGetRequestById(demand._id)" style="background: #2e5083;color: white;" type="button" class="btn " data-toggle="modal" data-target="#staticBackdrop">Accept</button>
                                <!--   Accept -->
                                <div class="modal fade " id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="justify-self: center !important;">
                                    <div class="modal-dialog">
                                        <div class="modal-content" id="accept" style="background: white ; width: 80%;">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="title" style="color: rgb(0, 0, 0);margin: auto; max-width: 400px;">Are you sure you want to accept ?</h5>
                                                <a href="#" data-dismiss="modal" aria-label="Close" style="float: right;">
                                                    <img id="closeIcon" src="../../../assets/home/close .png">
                                                </a>
                                            </div>
                                            <div class="modal-footer" style="margin: auto; max-width: 300px;" v-if="demand.service">
                                                <button @click="handleAcceptRequest(demand)" style="color: white; background: #2e5083; border-color: #2e5083;" type="button" class="btn " data-dismiss="modal">Accept</button>
                                                <button type="button" class="btn btn-primary " style="color: white;background: #e97923; border-color: #e97923;">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end  Accept -->
                                <button @click="handleGetRequestById(demand._id)" style="background: #e97923; color: white;" type="button" data-toggle="modal" data-target="#staticBackdrop1" class="btn ">Refuse</button>
                                <!-- Refuse Mdel -->
                                <div class="modal fade " id="staticBackdrop1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="justify-self: center !important;">
                                    <div class="modal-dialog">
                                        <div class="modal-content" id="refuse" style="background: white ; width: 80%;">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="title" style="color: rgb(0, 0, 0);margin: auto; max-width: 400px;">Are you sure you want to refuse ?</h5>
                                                <a href="#" data-dismiss="modal" aria-label="Close" style="float: right;">
                                                    <img id="closeIcon" src="../../../assets/home/close .png">
                                                </a>
                                            </div>
                                            <div class="modal-footer" style="margin: auto; max-width: 300px;">
                                                <button @click="handleRefuseRequest(demand._id)" style="color: white; background: #2e5083; border-color: #2e5083;" type="button" class="btn " data-dismiss="modal">Refuse</button>
                                                <button type="button" class="btn btn-primary " style="color: white;background: #e97923; border-color: #e97923;">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Refuse Mdel -->
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script>
import { AddService, deleteService, getServiceById, getServicesByName, getServicesByType, updateService } from '../../../utils/service/service.js'
import { getRequests, getRequestsByService, getRequestById, updateRequest } from '../../../utils/demand/demand.js'
import { getTypeById, updateType } from '../../../utils/typeOfService/typeOfService.js'
import { addDebtor } from '../../../utils/debtor/debtor.js'
import { getGraphServiceByType, getGraphServiceByService, getGraphServiceById, updateGraphService} from '../../../utils/graphs/graphService.js'
import { getGraphTOSByType, getGraphTOSById, updateGraphTOS } from '../../../utils/graphs/graphTOS.js'
import { getGraphAllById, updateGraphAll, updateGraphAllSpendings } from '../../../utils/graphs/graphAll.js'

import {mapGetters} from 'vuex'
import pdf from 'vue-pdf'
export default {
        name: 'ConsultRequest',
        components: {
		    pdf
	    },
        data () {
            return {
            }
        },
        computed: {
            ...mapGetters(['token', 'demands', 'demand', 'typeOfService'])
        },
        created() {
            this.handleGetRequests()
        },
        methods: {
            handleRefuseRequest(id) {
                this.$store.dispatch("updateRequest", {
                    id,
                    state: 'refused',
                    token: this.token
                })
                //this.$router.go()
            },
            handleAcceptRequest(demand) {
                const vm = this
                if(demand.service.typeOfService === "6127777bbacfd4207414e962") {
                    const servBudget = demand.service.budget
                    const date1 = new Date(demand.service.duration.endOffer);
                    const date2 = new Date();
                    const diffTime = date1 - date2
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays > 0 && demand.service.numPlaces> 0) {
                        this.$store.dispatch("updateRequest", {
                            id: demand._id,
                            state: 'accepted',
                            token: this.token
                        })
                        demand.service.numPlaces = demand.service.numPlaces - 1
                        if(demand.service.numPlaces === 0) {
                            const updates = {
                                numPlaces: demand.service.numPlaces,
                                budget: 0
                            }
                            updateService(demand.service._id, updates, this.token)
                                .then((res) => {
                            const servBud = res.data.budget
                            console.log(res)
                            getGraphServiceByService(res.data._id, this.token)
                              .then(res => {
                                console.log(res)
                                console.log(servBud)
                                console.log(res.data.budgetValues[res.data.budgetValues.length - 1].value)
                                const diff = servBud - res.data.budgetValues[res.data.budgetValues.length - 1].value
                                console.log(diff)
                                const budget = {
                                  value: servBud,
                                  date: new Date()
                                }
                                updateGraphService(res.data._id, budget, this.token)
                                  .then(res => {
                                    this.$store.commit('setGraphService', res.data)
                                    const updates = {
                                      budget: diff,
                                    }      
                              updateType(demand.service.typeOfService, updates, this.token)
                                .then((res) => {
                                console.log(res)
                                const TypeBudget = res.data.budget
                                getGraphTOSByType(demand.service.typeOfService, this.token)
                                  .then(res => {
                                  this.$store.commit('setGraphTOS', res.data)
                                  const budget = {
                                    value: TypeBudget,
                                    date: new Date()
                                  }
                                  updateGraphTOS(res.data._id, budget, this.token)
                                    .then(() => {
                                    getGraphAllById(this.token)
                                      .then(res => {
                                        console.log(res)
                                      this.$store.commit('setGraphAll', res.data)
                                      const budget = {
                                        value: res.data.budgetValues[res.data.budgetValues.length - 1].value + diff,
                                        date: new Date()
                                      }
                                      updateGraphAll(res.data._id, budget, this.token)
                                        .then(res => this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    updateGraphAllSpendings(res.data._id, demand.service.budget, this.token)
                                        .then(res => 
                                            this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                                }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                            //console.log(this.typeOfService._id)
                            //console.log(updates)
                            }).catch(e => console.log(e))
                        } else {
                            const updates = {
                                numPlaces: demand.service.numPlaces,
                            }
                            vm.$store.dispatch("updateService", {
                              id: demand.service._id,
                              updates,
                              token: this.token
                            })
                        }
                    } else if(demand.service.budget !== 0) {
                        const updates = {
                            numPlaces: demand.service.numPlaces,
                            budget: 0
                        }
                        updateService(demand.service._id, updates, this.token)
                                .then((res) => {
                            const servBud = res.data.budget
                            getGraphServiceByService(res.data._id, this.token)
                              .then(res => {
                                console.log(res)
                                console.log(servBud)
                                console.log(res.data.budgetValues[res.data.budgetValues.length - 1].value)
                                const diff = servBud - res.data.budgetValues[res.data.budgetValues.length - 1].value
                                console.log(diff)
                                const budget = {
                                  value: servBud,
                                  date: new Date()
                                }
                                updateGraphService(res.data._id, budget, this.token)
                                  .then(res => {
                                    this.$store.commit('setGraphService', res.data)
                                    const updates = {
                                      budget: diff,
                                    }      
                              updateType(demand.service.typeOfService, updates, this.token)
                                .then((res) => {
                                console.log(res)
                                const TypeBudget = res.data.budget
                                getGraphTOSByType(demand.service.typeOfService, this.token)
                                  .then(res => {
                                  this.$store.commit('setGraphTOS', res.data)
                                  const budget = {
                                    value: TypeBudget,
                                    date: new Date()
                                  }
                                  updateGraphTOS(res.data._id, budget, this.token)
                                    .then(() => {
                                    getGraphAllById(this.token)
                                      .then(res => {
                                        console.log(res)
                                      this.$store.commit('setGraphAll', res.data)
                                      const budget = {
                                        value: res.data.budgetValues[res.data.budgetValues.length - 1].value + diff,
                                        date: new Date()
                                      }
                                      updateGraphAll(res.data._id, budget, this.token)
                                        .then(res => this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    updateGraphAllSpendings(res.data._id, demand.service.budget, this.token)
                                        .then(res => 
                                            this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                                }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                            //console.log(this.typeOfService._id)
                            //console.log(updates)
                            }).catch(e => console.log(e))
                    }
                } else if(demand.service.name === "Debt") {
                    if(demand.service.budget - demand.amount > 0) {
                        //add to debtors
                        const data = {
                            owner: demand.owner._id,
                            amount: demand.amount,
                            remain: demand.amount
                        }
                        this.$store.dispatch("addDebtor", {
                            data,
                            token: this.token
                        })
                        this.$store.dispatch("updateRequest", {
                            id: demand._id,
                            state: 'accepted',
                            token: this.token
                        })
                        const updates = {
                            budget: demand.service.budget - demand.amount
                        }
                        updateService(demand.service._id, updates, this.token)
                                .then((res) => {
                            const servBud = res.data.budget
                            /*getGraphServiceByService(res.data._id, this.token)
                              .then(res => {
                                console.log(res)
                                console.log(servBud)
                                console.log(res.data.budgetValues[res.data.budgetValues.length - 1].value)
                                const diff = servBud - res.data.budgetValues[res.data.budgetValues.length - 1].value
                                console.log(diff)
                                const budget = {
                                  value: servBud,
                                  date: new Date()
                                }
                                updateGraphService(res.data._id, budget, this.token)
                                  .then(res => {
                                    this.$store.commit('setGraphService', res.data)
                                    const updates = {
                                      budget: diff,
                                    }*/      
                              updateType(demand.service.typeOfService, updates, this.token)
                                .then((res) => {
                                console.log(res)
                                const TypeBudget = res.data.budget
                                getGraphTOSByType(demand.service.typeOfService, this.token)
                                  .then(res => {
                                  this.$store.commit('setGraphTOS', res.data)
                                  const budget = {
                                    value: TypeBudget,
                                    date: new Date()
                                  }
                                  updateGraphTOS(res.data._id, budget, this.token)
                                    .then(() => {
                                    getGraphAllById(this.token)
                                      .then(res => {
                                        console.log(res)
                                      this.$store.commit('setGraphAll', res.data)
                                      const budget = {
                                        value: res.data.budgetValues[res.data.budgetValues.length - 1].value + diff,
                                        date: new Date()
                                      }
                                      updateGraphAll(res.data._id, budget, this.token)
                                        .then(res => this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    updateGraphAllSpendings(res.data._id, demand.amount, this.token)
                                        .then(res => 
                                            this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                                }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                            })
                            .catch(e => console.log(e))
                            //console.log(this.typeOfService._id)
                            //console.log(updates)
                    }
                } else {
                    if(demand.service.budget - demand.amount > 0) {
                        this.$store.dispatch("updateRequest", {
                            id: demand._id,
                            state: 'accepted',
                            token: this.token
                        })
                        const updates = {
                            budget: demand.service.budget - demand.amount
                        }
                        updateService(demand.service._id, updates, this.token)
                                .then((res) => {
                            const servBud = res.data.budget
                            getGraphServiceByService(res.data._id, this.token)
                              .then(res => {
                                console.log(res)
                                console.log(servBud)
                                console.log(res.data.budgetValues[res.data.budgetValues.length - 1].value)
                                const diff = servBud - res.data.budgetValues[res.data.budgetValues.length - 1].value
                                console.log(diff)
                                const budget = {
                                  value: servBud,
                                  date: new Date()
                                }
                                updateGraphService(res.data._id, budget, this.token)
                                  .then(res => {
                                    this.$store.commit('setGraphService', res.data)
                                    const updates = {
                                      budget: diff,
                                    }      
                              updateType(demand.service.typeOfService, updates, this.token)
                                .then((res) => {
                                console.log(res)
                                const TypeBudget = res.data.budget
                                getGraphTOSByType(demand.service.typeOfService, this.token)
                                  .then(res => {
                                  this.$store.commit('setGraphTOS', res.data)
                                  const budget = {
                                    value: TypeBudget,
                                    date: new Date()
                                  }
                                  updateGraphTOS(res.data._id, budget, this.token)
                                    .then(() => {
                                    getGraphAllById(this.token)
                                      .then(res => {
                                        console.log(res)
                                      this.$store.commit('setGraphAll', res.data)
                                      const budget = {
                                        value: res.data.budgetValues[res.data.budgetValues.length - 1].value + diff,
                                        date: new Date()
                                      }
                                      updateGraphAll(res.data._id, budget, this.token)
                                        .then(res => this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    updateGraphAllSpendings(res.data._id, demand.amount, this.token)
                                        .then(res => 
                                            this.$store.commit("setGraphAll", res.data))
                                        .catch(e => console.log(e))
                                    }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                                }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                                  }).catch(e => console.log(e))
                              }).catch(e => console.log(e))
                            //console.log(this.typeOfService._id)
                            //console.log(updates)
                            }).catch(e => console.log(e))
                    }
                }
                //this.$router.go()
            },
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
                    state: 'in progress',
                    token: this.token
                })
                //console.log(this.demands)
            }
        }
    }
</script>

<style>
    .avatar {
            vertical-align: middle;
            width: 80px;
            height: 80px;
            padding: 8px;
            border: 1px;
            border-color: #0e1e58;
    }
    .file {
            vertical-align: middle;
            width: 95px;
            height: 95px;

            border: 1px;
            border-color: #0e1e58;

    }
    .btn {

            font-size: 1.2rem;
    }
    .file:hover {
            filter: grayscale(100%);
            transform: scale(1.1);
    }
    .modal-header {
            border-bottom: none !important;
    }
    .modal-footer {

            border-top: none !important;
    }
    #staticBackdrop {
            
            background: rgb(32, 32, 32, 0.6);
    }
    #accept{
            transform: translate(10%,50%);
    }
    #staticBackdrop1 {

            background: rgb(32, 32, 32, 0.6);
    }
    #refuse{
            transform: translate(10%,50%);
    }
    .moreBtn {
            background: #e97923;
            font-size: 1rem;
            font-family: Arial, Helvetica, sans-serif;
    }
    .moreBtn:hover {
            background: #e7a625;
            color: white;

    }
</style>