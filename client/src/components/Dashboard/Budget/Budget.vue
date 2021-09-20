<template>
    <div style="width:100% !important">   
        <header>
            <div class="container mb-5" >
                <div class="row mb-5" >
                    <div class="col-8  pt-0 "> 
                        <div style="padding-top: 10px;" >
                            <h2  style="color: #2e5083 ; ">Budget</h2>
                        </div>
                    </div>
                </div>
                <div class="row pl-2 pr-2">
                    <div class="col-md-8 p-0">
                        <div class="card" >
                            <div class="card-body shadow "  >
                                <h5 class="card-title" style="padding: 5px;color:#2e5083 ;">Total Budget</h5>
                                <h2 style="padding-left: 10px;padding: 5px;color: #2e5083;">{{maxBudget(graphAll.budgetValues)}},00DA</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 p-0">
                        <div class="card" >
                            <div class="card-body shadow  "  >
                                <h5 class="card-title" style="padding: 5px; color:rgba(255, 99, 132, 0.8) ;">Spent Budget</h5>  
                                <h2 style="padding-left: 10px;padding: 5px;color: rgba(255, 99, 132, 0.8);">{{graphAll.spendings}},00DA</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div class="container mt-0">
                <div class="row ">
                    <div class="col-md-8 mt-0 " style="margin-top: -10px !important; max-width: 750px;height:100%">
                        <div class="form-group mb-4 mt-0 " >
                            <ul class="nav nav-tabs mt-0">
                            <li><router-link to="/dashboard" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><a data-toggle="tab" class="nav-item nav-link active" style="text-decoration: none;">All Spendings</a></span></router-link></li>
                            <li><router-link to="/dashboard/budget/donations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><a data-toggle="tab" class="nav-item nav-link linka" style="text-decoration: none;">Donations Spendings</a></span></router-link></li>
                            <li><router-link to="/dashboard/budget/compensations" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><a data-toggle="tab" class="nav-item nav-link linka" style="text-decoration: none;">Compensations Spendings</a></span></router-link></li>
                            <li><router-link to="/dashboard/budget/offers" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><a data-toggle="tab" class="nav-item nav-link linka" style="text-decoration: none;">Offers Spendings</a></span></router-link></li>
                            <li><router-link to="/dashboard/budget/debts" tag="span" style="cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link"><a data-toggle="tab" class="nav-item nav-link linka" style="text-decoration: none;">Debts Spendings</a></span></router-link></li>
                            </ul>
                                <!--<button @click="onChange1" selected>All Spendings</button>
                                <button @click="onChange2" >Donations Spendings</button>
                                <button @click="onChange3" >Compensations Spendings</button>
                                <button @click="onChange4" >Offers Spendings</button>
                                <button @click="onChange5" >Debts Spendings</button>-->
                        </div>
                           <div class="card h-100 shadow">
                            <div class="card-body">
                                <canvas id="myChart" style="padding: 20px;"></canvas>
                            </div>
                            
                        </div> 
                     
                    </div>
                    <div class="col-md-4" >
                        <div class="card " style="margin-left: 0; margin-right: 0;margin-top: 40px;">
                            <div class="card-body shadow">
                                <canvas id="pieChart" ></canvas> 
                            </div>
                        </div>
                    </div>
                </div> 
             </div>
        </main> 
    </div>
</template>

<script>
    import { getGraphServiceByType, getGraphServiceByService, getGraphServiceById, updateGraphService} from '../../../utils/graphs/graphService.js'
    import { getGraphTOS, getGraphTOSByType, getGraphTOSById, updateGraphTOS } from '../../../utils/graphs/graphTOS.js'
    import { getGraphAllById, updateGraphAll, updateGraphAllSpendings } from '../../../utils/graphs/graphAll.js'
    import {mapGetters} from 'vuex'
    export default {
        name: 'Budget',
        data () {
          return {/*
            showAll: true,
            showDeb: false,
            showDon: false,
            ShowComp: false,
            showOff: false,*/
          }
        },
        computed: {
            ...mapGetters(['graphService', 'graphAll', 'graphTOS', 'token', 'types', 'typeOfService', 'services'])
        },
        created() {
            this.handleGetGraphAll()
        },
        mounted() {
            this.handleGetGraphTOS()
            this.handleGraphs()
            this.handleGetGraphAll()
            this.handleGetTypes()
        },
        methods: {
            maxBudget(bud) {
                let i = 0
                bud.forEach(val => {
                    if(val.value > i) i = val.value
                })
                return i
            },
            handleGetTypes() {
                this.$store.dispatch("getTypes", {token: this.token})
                //this.typeOfService = this.types[0]
            },
            /*onChange1(){
                this.showAll = true
                this.showDeb = false
                this.showOff = false
                this.ShowComp = false
                this.showDon = false
            },
            onChange2(){
                this.showAll = false
                this.showDeb = false
                this.showOff = false
                this.ShowComp = false
                this.showDon = true
            },
            onChange3(){
                this.showAll = false
                this.showDeb = false
                this.showOff = false
                this.ShowComp = true
                this.showDon = false
            },
            onChange4(){
                this.showAll = false
                this.showDeb = false
                this.showOff = true
                this.ShowComp = false
                this.showDon = false
            },
            onChange5(){
                this.showAll = false
                this.showDeb = true
                this.showOff = false
                this.ShowComp = false
                this.showDon = false
            },*/
            handleGetGraphAll() {
                getGraphAllById(this.token)
                    .then(res => {
                        console.log(this.res)
                        this.$store.commit('setGraphAll', res.data)
                        //this.$router.go()
                        console.log(this.graphAll)
                    })
                    .catch(e => console.log(e))
                //this.$router.go()
            },
            handleGetGraphTOS() {
                getGraphTOS(this.token)
                    .then(res => {
                        console.log(res.data)
                        this.$store.commit('setGraphTOS', res.data)
                        //this.$router.go()
                        //console.log(this.graphTOS)
                        
                    })
                    .catch(e => console.log(e))
                //this.handleGetGraphServiceByType(id)
                //this.$router.go()
            },
            /*handleGetGraphServiceByType(id) {
                getGraphServiceByType(id, this.token)
                    .then(res => {
                        this.$store.commit('setGraphService', res.data)
                        this.$store.dispatch("getServicesByType", {
                          typeOfService: id,
                          token: this.token
                        })
                        var barc = document.getElementById('barChart').getContext('2d');
                        let newLabelsNames = []
                        this.services.forEach((val) => {
                            newLabelsNames.push(val.name)
                        })
                        let newLabelsTypeBudget = []
                        this.services.forEach((val) => {
                            newLabelsTypeBudget.push(val.budget)
                        })
                        var barChart = new Chart(barc, {
                            type: 'bar',
                            data: {
                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                datasets: [{
                                    label: '# of Votes',
                                    axis: 'y',
                                    data: [12, 19, 3, 5, 2, 3],
                                    backgroundColor: 'rgba(255, 159, 64, 0.5)',
                                    borderColor: 'rgba(255, 159, 64, 1)',
                                    borderWidth: 1
                                }]
                            },
                            options: {
                                indexAxis: 'y',
                            }
                        });
                        //console.log(this.graphService)
                    })
                    .catch(e => console.log(e))
            },*/
            handleGraphs () {
                //this.handleGetGraphAll()
                var ctx = document.getElementById('myChart').getContext('2d');
                //var ctx2 = document.getElementById('myChartType').getContext('2d');//l5et
                var piec = document.getElementById('pieChart').getContext('2d');//dawayra
                //var barc = document.getElementById('barChart').getContext('2d');//bar
                
                if(this.graphAll) {
                    let newLabelsAllDates = []
                    this.graphAll.budgetValues.forEach((val) => {
                        newLabelsAllDates.push(val.date)
                    })
                    let newLabelsAllBudget = []
                    this.graphAll.budgetValues.forEach((val) => {
                        newLabelsAllBudget.push(val.value)
                    })
                    var myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: newLabelsAllDates,
                            datasets: [{
                                label: 'All Spendings',

                                data: newLabelsAllBudget,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
                /*var ctx2 = document.getElementById('myChartComp').getContext('2d');
                if(this.graphTOS[1].budgetValues){
                    let newLabelsTypeDates = []
                    this.graphTOS[1].budgetValues.forEach((val) => {
                        newLabelsTypeDates.push(val.date)
                    })
                    let newLabelsTypeBudget = []
                    this.graphTOS[1].budgetValues.forEach((val) => {
                        newLabelsTypeBudget.push(val.budget)
                    })
                    var myChartType = new Chart(ctx2, {
                        type: 'line',
                        data: {
                            labels: newLabelsTypeDates,
                            datasets: [{
                                label: 'Comp Spendings',
                                data: newLabelsTypeBudget,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
                var ctx3 = document.getElementById('myChartDon').getContext('2d');
                if(this.graphTOS[0].budgetValues){
                    let newLabelsTypeDates1 = []
                    this.graphTOS[0].budgetValues.forEach((val) => {
                        newLabelsTypeDates1.push(val.date)
                    })
                    let newLabelsTypeBudget1 = []
                    this.graphTOS[0].budgetValues.forEach((val) => {
                        newLabelsTypeBudget1.push(val.budget)
                    })
                    var myChartType = new Chart(ctx2, {
                        type: 'line',
                        data: {
                            labels: newLabelsTypeDates1,
                            datasets: [{
                                label: 'Don Spendings',
                                data: newLabelsTypeBudget1,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
                var ctx4 = document.getElementById('myChartOff').getContext('2d');
                if(this.graphTOS[2].budgetValues){
                    let newLabelsTypeDates2 = []
                    this.graphTOS[2].budgetValues.forEach((val) => {
                        newLabelsTypeDates2.push(val.date)
                    })
                    let newLabelsTypeBudget2 = []
                    this.graphTOS[2].budgetValues.forEach((val) => {
                        newLabelsTypeBudget2.push(val.budget)
                    })
                    var myChartType = new Chart(ctx2, {
                        type: 'line',
                        data: {
                            labels: newLabelsTypeDates2,
                            datasets: [{
                                label: 'Off Spendings',
                                data: newLabelsTypeBudget2,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
                var ctx5 = document.getElementById('myChartDeb').getContext('2d');
                if(this.graphTOS[3].budgetValues){
                    let newLabelsTypeDates3 = []
                    this.graphTOS[3].budgetValues.forEach((val) => {
                        newLabelsTypeDates3.push(val.date)
                    })
                    let newLabelsTypeBudget3 = []
                    this.graphTOS[3].budgetValues.forEach((val) => {
                        newLabelsTypeBudget3.push(val.budget)
                    })
                    var myChartType = new Chart(ctx2, {
                        type: 'line',
                        data: {
                            labels: newLabelsTypeDates3,
                            datasets: [{
                                label: 'Debts Spendings',
                                data: newLabelsTypeBudget3,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }*/
                let newLabelsNames = []
                this.types.forEach((val) => {
                    newLabelsNames.push(val.name)
                })
                let newLabelsBudget = []
                this.types.forEach((val) => {
                    newLabelsBudget.push(val.budget)
                })
                var pieChart = new Chart(piec, {
                    type: 'pie',
                    data: {
                        labels: newLabelsNames,
                        datasets: [{
                            label: '# of Votes',
                            data: newLabelsBudget,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(255, 159, 64, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
                /*var barChart = new Chart(barc, {
                    type: 'bar',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            axis: 'y',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: 'rgba(255, 159, 64, 0.5)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                    }
                });*/
            }
        }
    }
</script>

<style>
    .avatar {
        vertical-align: middle;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px;
        border-color: #0e1e58;
    } 
</style>