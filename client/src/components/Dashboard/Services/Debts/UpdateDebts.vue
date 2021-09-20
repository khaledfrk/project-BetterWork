<template>
    <div>
        <div class="container m-0">       
            <ul class="nav nav-tabs">
                <!--<li style="float: right; cursor: pointer;"  v-for="type in types" :key="type._id"><a data-toggle="tab" :href="'#'+type.name" @click="handleGetTypeById(type._id, type.name)" class="nav-item nav-link linka"  style="text-decoration: none">{{type.name}}s</a></li>-->
                <li><router-link to="/dashboard/debts/update" tag="span" data-toggle="tab" class="nav-item nav-link active"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Edit</span></router-link></li>
                <li><router-link to="/dashboard/debts/current" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Debts</span></router-link></li>
                <li><router-link to="/dashboard/debts/archive" tag="span" data-toggle="tab" class="nav-item nav-link linka"  style="text-decoration: none; cursor: pointer" custom v-slot="{ navigate }"><span @click="navigate" @keypress.enter="navigate" role="link">Archives</span></router-link></li>
            </ul>
        <div class="jumbotron m-2">
            <h1 class="display-4">Update {{services[0].typeOfService.name}}</h1>
            <hr class="my-4">
            <div class="form-group">                    
            <input v-model="services[0].name" type="text" class="form-control mb-4" id="exampleInputPassword1" :placeholder="'Name of '+services[0].typeOfService.name">

            <div class="row">
                <div class="col-3"><input v-model="services[0].part" type="text" class="form-control mb-4" id="exampleInputPassword2" placeholder="Article number">
                </div>
                <div class="col-3"><input v-model="services[0].chapter" type="text" class="form-control mb-4" id="exampleInputPassword3" placeholder="chapter number">
                </div>
            </div>
            <textarea v-model="services[0].description" class="form-control mb-4 uneditable-input" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
            <p class="lead" style="color: grey; font-weight: 300;">Required Documents:</p>
            <div class="row">
            <div class="col-9">
              <multiselect v-model="value" tag-placeholder="Add this as new document" placeholder="Search or add a document" :options="documents" label="name" track-by="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>
        </div>
          <p class="lead" style="color: grey; font-weight: 300;">Max Amount:</p>
          <input v-model="services[0].amount" type="number" class="form-control mt-4 mb-4" id="exampleInputPassword4" placeholder="Amount">
          <p class="lead" style="color: grey; font-weight: 300;">Budget:</p>
          <input v-model="services[0].budget" type="number" class="form-control mb-4" id="exampleInputPassword5" placeholder="Budget">
        <div class="row justify-content-start mb-4 mt-4">
            <button @click="handleUpdateService" type="submit" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad " >Update {{services[0].typeOfService.name}}</button>
          </div>
            </div>
        </div>
            <!--<div class="tab-pane show in active">
                <div class="container m-0" >
                    <div class="row">
                        <h3 class="p-5 pt-4 col-4">Debts</h3>
                        <div class="col-8">
                            <div class="row justify-content-end mb-4 mt-4 mr-2 pt-3">
                                <div class="search col-7 m-0 ml-2 "> <input type="text" class="search-input p-2 border m-0" placeholder="Search..." name=""> <a href="#" class="search-icon btn-grad " style="margin-top:-6px; margin-right: -1px;" > <i class="fa fa-search"></i> </a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="row  shadow m-1 mb-4">
                        <div class="pr-5" style="display: block; background-color: #2e5083; width: 2px;"></div>
                        <div class="col-8 p-4 pr-0">
                            <div class="row">
                                <div class="col-2">
                                    <img src="../../../../assets/employees/khaled.jpg.png" alt="Avatar" class="avatar">
                                </div>
                                <div class="col-6">
                                    <h4>Farek Khaled Bahaa Eddine</h4>
                                    <p class="lead">Agent</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="row justify-content-end mt-4">
                                <div class="col-3 mt-4 p-0"><a class="edit" title="Edit" data-toggle="tooltip" ><i class="material-icons linka" type="submit" data-toggle="modal" data-target="#exampleModalCenter" style="text-decoration: none; cursor: pointer;">&#xE254;</i></a></div>
                                 Modal -->
                                <!--<div class="modal fade"  size="sm" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                div class="d-block center"-->
                                                <!--<div class="row">
                                                    <div class="col-3">
                                                        <img src="./assets/employees/khaled.jpg.png" style="float: left;" alt="Avatar" class="avatar m-4">
                                                    </div>-->
                                                    <!--<div class="col-7 m-4">
                                                        <h4>Farek Khaled Bahaa Eddine</h4>
                                                        <p class="lead">1000DA</p>
                                                    </div>
                                                </div>
                                                <div class="row m-4 p-2">
                                                    <div class ="col-2" style="margin-top: +15px">
                                                        <label for="Paid" >
                                                           <h5>Paid:</h5>
                                                        </label>
                                                    </div>
                                                    <div class ="search col-3 m-0 ml-2" style="width: 30%" >
                                                        <input type="number" class="form-control mb-4" id="Paid" value="500" readonly="readonly" placeholder="">
                                                        <input id="Button" style="margin-top:-30px; margin-right: -1px; padding: 10px" type="submit" class="search-icon btn-grad" value="+" />
                                                        <input type="number" class="fa fa-search" id="add" value="" style ="margin-top: -26px; width: 100%; display: none " placeholder="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary p-1 pl-3 pr-3 btn-grad2" data-dismiss="modal" >CLOSE</button>
                                                <button type="button" class="btn btn-primary btn-grad p-1 pl-3 pr-3">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import {mapGetters} from 'vuex'
    export default {
        name: 'UpdateDebts',
        components: { Multiselect },
        data () {
          return {
            //options: ['Vue.js', 'Javascript', 'Open Source'],
          }
        },
        /*beforeCreate() {
            this.$store.dispatch("getDebt", {})
        },*/
        created() {
            this.handleGetAllDocuments()
            this.handleGetDebt()
            this.handleDocs()
        },
        computed: {
            ...mapGetters(['types', 'typeOfService', 'services', 'service', 'token', 'documents', 'value'])
        },
        methods: {
            handleDocs() {
              this.$store.dispatch("getSerDocs", {
                  service: this.services[0]
              })
            },
            handleGetAllDocuments() {
                this.$store.dispatch("getAllDocuments", {token: this.token})
            },
            handleAddDocument(data) {
              this.$store.dispatch("addDocument", {data ,token: this.token})
            },
            addTag (newTag) {
              const tag = {
                name: newTag,
              }
              this.documents.push(tag)
              this.value.push(tag)
              this.handleAddDocument(tag)
            },
            handleGetDebt() {
                this.$store.dispatch("getDebt", {})
            },
            handleUpdateService() {
              const doc = []
              this.value.forEach((val) => {
                doc.push(val.name)
              })
              const updates = {
                name: this.services[0].name,
                part: this.services[0].part,
                chapter: this.services[0].chapter,
                description: this.services[0].description,
                documents: doc,
                amount: parseInt(this.services[0].amount),
                budget: parseInt(this.services[0].budget)
              }
              //console.log(updates)
              this.$store.dispatch("updateService", {
                id: this.services[0]._id,
                updates,
                token: this.token
              })
              this.$router.go(this.$router.push('/dashboard/debts'))
            }
        }
    }
</script>

<style>
    .btn-grad{
            background-image: linear-gradient(to right, #2e5083 0%, #2e5083 30%, #0e1e58   100%)}
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
            color: #2e5083;
    }
    .linka:hover{
            color:#0e1e58;
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
            caret-color: #2e5083;
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
            background-color: #2e5083;
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
            border-color: #0e1e58;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.025) inset, 0 0 10px #0e1e58;
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
    .avatar {
            vertical-align: middle;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 1px;
            border-color: #0e1e58;
    } 
    .center {
            margin: auto;
            text-align: center;
    }
</style>