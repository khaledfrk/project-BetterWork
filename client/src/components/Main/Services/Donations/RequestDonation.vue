<template>
    <div>
        <div class="jumbotron m-2">
            <a href="#">
                <div class="d-flex">
                    <p @click="goBack()">{{service.typeOfService.name}}s list</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
                        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </div>
            </a>
            <h1 class="display-4">{{service.name}}</h1>
            <p class="lead">{{service.description}}</p>
            <hr class="my-4">
            <div class="form-group">   
                <p class="lead" style="color: rgb(8, 8, 8); font-weight: 300;">Required Documents:</p>
                <div class="row mt-4" v-for="doc in service.documents" :key="doc">
                    <div class="col-3" :id="removeSpace(doc)+'-borderDot'" style="border: dashed #e97923 2px ; margin-left: 16px; margin-right: 40px"  >
                        <div :class="'lead '+removeSpace(doc)+'-file-name'"  style="color: rgb(82, 80, 80);; font-weight: 300;font-size: large; padding: 4px;">{{doc}}</div>
                    </div>
                    <div class="col-3">
                        <button @click="handleFileUpload(removeSpace(doc))" :id="removeSpace(doc)+'-custom-btn'"
                            type="button" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad m-0"  
                            style="font-size:small" data-toggle="modal" data-target="#exampleModalCenter">Choose a file</button>
                        <input :id="removeSpace(doc)+'-default-btn'" type="file" hidden>
                    </div>
                </div>
                <div class="row justify-content-start mb-4 mt-4">
                    <button @click="handleRequestService" type="button" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad "style="padding:15px 45px !important;font-size:15px"  >Request {{service.typeOfService.name}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'         
    export default {
        name: 'RequestDonation',
        data () {
            return {
                file: '',
                files: []
            }
        },
        computed: {
            ...mapGetters(['service', 'user', 'token'])
        },
        methods: {
            removeSpace(str) {
                str = str.replace(/\s/g, '');
                return str
            },
            goBack() {
                this.$router.push('/donations')
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
        },
    }
</script>

<style>
    .inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
    }
    .btn-grad{
          background-image: linear-gradient(to right, #e97923 0%, #e97923 30%, #efa81d   100%)
    }
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
    a{
          text-decoration: underline;
          color: #e97923;
    }
    a:hover{
          color:#efa81d;
          text-decoration: underline;
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