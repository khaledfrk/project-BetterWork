<template>
    <div>
            <div class="container mt-5 ml-3">
                <div class="row">
                    <div class="col">
                        <div class="card  shadow" style="width: 100%;">
                            <img src="../../../../assets/home/summer.jpg" class="card-img-top ">
                            <div class="card-body ">
                                <div class="row p-4 ">
                                    <div>
                                        <div class="m-2  mb-0 ">
                                            <a href="#">
                                                <div class="d-flex">
                                                    <p @click="goBack">{{service.typeOfService.name}}s list</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
                                                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                </div>
                                            </a>
                                            <h3 class="mt-2" style="color: #2e5083;">{{service.name}}</h3>
                                        </div>
                                        <div class="m-2 ">
                                            <div>
                                                <h5 style="float: left; color: #2e5083;">Remaining places : &nbsp;</h5>
                                                <h5 style="color:  #212529;" class="job">{{service.numPlaces}}</h5>
                                            </div>
                                            <div>
                                                <h5 style="  float : left ;color: #2e5083  ">End date : &nbsp;
                                                </h5>
                                                <h5 style=" color: #212529;">{{service.duration.endOffer}} &nbsp;
                                                </h5>
                                            </div>
                                            <div>
                                                <h5 style="color: #2e5083 ">Description : &nbsp;
                                                </h5>
                                                <p class="mt-1">{{service.description}}</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer " style="justify-content:flex-start">
                                            <button type="button" class="btn btn1" data-toggle="modal"
                                                data-target="#exampleModal" >Inlist
                                                now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style="background : #e9ecef;">
                        <div class="row" style="margin: 3px;">
                            <div class="col-6" style="float: left !important;">
                                <h3 class="modal-title ml-4 pt-0" style="color: #000000; padding-top: 0 !important;" id="exampleModalLabel">{{service.name}}</h3>
                            </div>
                            <div class="col-6" style="float: right !important;">
                                <a href="#" data-dismiss="modal" aria-label="Close" style="float: right;">
                                    <img id="closeIcon" src="../../../../assets/home/close .png">
                                </a>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="m-2 mt-0 ">
                                <p class="pb-3" style="border-bottom: solid rgb(144, 144, 144) 1px;">{{service.description}}</p>
                                <p class="lead mt-3" style="color: rgb(8, 8, 8); font-weight: 300;">Required Documents:
                                </p>
                                <div class="form-group " v-if="service.documents.length > 0">
                                    <!--  Documents -->
                                    <div class="row mt-4" v-for="doc in service.documents" :key="doc">
                                        <div class="col-5" :id="removeSpace(doc)+'-borderDot'" style="border: dashed #e97923 2px ; margin-left: 16px; margin-right: 40px">
                                            <div :class="'lead '+removeSpace(doc)+'-file-name'" style="color: rgb(82, 80, 80); font-weight: 300;font-size: large; padding: 4px;">{{doc}}</div>
                                        </div>
                                        <div class="col-5">
                                            <button @click="handleFileUpload(removeSpace(doc))" :id="removeSpace(doc)+'-custom-btn'" type="button" class="btn  pt-3 pb-3 pr-4 pl-4  btn-grad m-0" style="font-size:small" data-toggle="modal" data-target="#exampleModalCenter">Choose a file</button>
                                            <input :id="removeSpace(doc)+'-default-btn'" type="file" hidden>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer mt-0" style="margin: auto !important; max-width: 200px !important;">
                            <button @click="handleRequestService" type="button" class="btn  btn-grad  ">Request</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        name: 'OfferDetails',
        data () {
            return {
                file: '',
                files: []
            }
        },
        computed: {
            ...mapGetters(['service', 'user', 'token'])
        },
        created() {
        },
        methods: {
            removeSpace(str) {
                str = str.replace(/\s/g, '');
                return str
            },
            goBack() {
                this.$router.push('/offers')
            },
            handleFileUpload(val){
                    const vm = this
                    const fileName = document.querySelector("."+val+"-file-name");
                    const defaultBtn = document.querySelector("#"+val+"-default-btn");
                    const customBtn = document.querySelector("#"+val+"-custom-btn");
                    //console.log(defaultBtn)
                    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
                    /*function defaultBtnActive(){
                       defaultBtn.click();
                    }*/
                    defaultBtn.click()
                    defaultBtn.addEventListener("change", function(){
                        const file = this.files[0];
                        if(file){
                            const reader = new FileReader();
                            reader.onload = function(){
                                const result = reader.result;
                                const file = {}
                                file.name = val
                                file.src = result;
                                let i = 0
                                let check = false
                                while (i < vm.files.length && !check) {
                                    if (vm.files[i].name === file.name) {
                                        check = true
                                    }
                                    i++
                                }
                                if (check) {
                                    vm.files[i-1] = file
                                } else if (!check) {
                                    vm.files.push(file)
                                }
                                //console.log(vm.files) 
                                //wrapper.classList.add("active");
                            }
                            reader.readAsDataURL(file);
                        }
                        if(this.value){
                            let valueStore = this.value.match(regExp);
                            fileName.textContent = valueStore;
                            document.getElementById(val+"-borderDot").style.borderColor = "green";
                            document.getElementById(val+"-custom-btn").style.background= "green";
                            document.getElementById(val+"-custom-btn").innerText= "CHANGE   FILE ";
                        }
                    });
            },
            handleRequestService() {
                /*let newFiles = []
                
                this.files.forEach((val) => {
                    newFiles.push(val.src)
                })*/
                var fd = new FormData()
                var ins = this.files.length;
                for (var x = 0; x < ins; x++) {
                    //console.log(this.files[x].name)
                    //console.log(document.getElementById(this.files[x].name+'-default-btn').files[0])
                    fd.append("documents[]", document.getElementById(this.files[x].name+'-default-btn').files[0]);
                }
                fd.append('service', this.service._id)
                fd.append('owner', this.user._id)
                fd.append('amount', this.service.amount)
               
                //console.log(fd)
                /*const data = {
                    service: this.service._id,
                    owner: this.user._id,
                    documents: newFiles,
                    amount: this.service.amount
                }*/
                //console.log(data)
                this.$store.dispatch("requestService", {
                    data: fd,
                    token: this.token
                })
            }
        }
    }
</script>

<style>
            .card-img-top {

                height: 150px;
                object-fit: cover;

            }

            .btn1 {
                background: white;
                border-radius: 0.2rem;
                border-color: #2e5083;
                color: #2e5083;
                justify-content: end !important;
                font-size: 1rem;
                font-weight: 250 !important;
            }

            .btn1:hover {
                background: #2e5083 !important;
                color: white !important;
            }

            .modal-footer {

                border-top: none !important;
            }

            .modal-header {
                border-bottom: none;
            }

            .btn-grad {
                color: white;
                background: #e97923;
                font-weight: 200;
            }

            .btn-grad:hover {
                color: white;
                background: #d89716;
            }

            #list {
                text-decoration: underline;
                color: #e97923;
                padding-bottom: 0px !important;

            }

            #list:hover {
                color: #efa81d;
                text-decoration: underline;
            }

            #closeIcon {
                width: 20px;
                height: 20px;
                margin: 15px;
            }

            #closeIcon:hover {
                color: rgb(255, 255, 255);
            }
        </style>