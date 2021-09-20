<template>
    <div>
        <div class="jumbotron m-2">
      <a href="#">
        <div class="d-flex">
        <p @click="goToServices()">{{service.typeOfService.name}}s List</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
        </svg>
        </div>
      </a>
        <h1 class="display-4">Update {{service.typeOfService.name}}</h1>
        <p class="lead">You can update this {{service.typeOfService.name}}, just fill in the form below!</p>
        <hr class="my-4">
        <div class="form-group">                    
            <input v-model="service.name" type="text" class="form-control mb-4" id="exampleInputPassword1" :placeholder="'Name of '+service.typeOfService.name">

            <div class="row">
                <div class="col-3"><input v-model="service.part" type="text" class="form-control mb-4" id="exampleInputPassword2" placeholder="Article number">
                </div>
                <div class="col-3"><input v-model="service.chapter" type="text" class="form-control mb-4" id="exampleInputPassword3" placeholder="chapter number">
                </div>
            </div>
            <textarea v-model="service.description" class="form-control mb-4 uneditable-input" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
            <p class="lead" style="color: grey; font-weight: 300;">Required Documents:</p>
            <div class="row">
            <div class="col-9">
              <multiselect v-model="value" tag-placeholder="Add this as new document" placeholder="Search or add a document" :options="documents" label="name" track-by="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>
        </div>
          <p class="lead" style="color: grey; font-weight: 300;">Amount:</p>
          <input v-model="service.amount" type="number" class="form-control mt-4 mb-4" id="exampleInputPassword4" placeholder="Amount">
          <p class="lead" style="color: grey; font-weight: 300;">Budget:</p>
          <input v-model="service.budget" type="number" class="form-control mb-4" id="exampleInputPassword5" placeholder="Budget">
        <div class="row justify-content-start mb-4 mt-4">
            <button @click="handleUpdateService" type="submit" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad " >Update {{service.typeOfService.name}}</button>
          </div>
        </div>
        </div>
    </div>    
</template>

<script>
import Multiselect from 'vue-multiselect'

import {mapGetters} from 'vuex'
export default {
  components: { Multiselect },
  data () {
    return {
      //options: ['Vue.js', 'Javascript', 'Open Source'],
    }
  },
  name: 'UpdateDonation',
  computed: {
    ...mapGetters(['service', 'token', 'documents', 'value']),
    value: {
      get() { return this.$store.getters.value; },
      set(newValue) { this.$store.commit('setValue', newValue); }
    },
  },
  created() {
    this.handleGetAllDocuments()
  },
  methods: {
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
    /*addTag (newTag) {
      const tag = {
        name: newTag,
      }
      this.options.push(tag.name)
      this.service.documents.push(tag.name)
    },*/
    goToServices(){
      this.$router.push('/dashboard/services/donations')
    },
    handleUpdateService() {
      const doc = []
      this.value.forEach((val) => {
        doc.push(val.name)
      })
      const updates = {
        name: this.service.name,
        part: this.service.part,
        chapter: this.service.chapter,
        description: this.service.description,
        documents: doc,
        amount: parseInt(this.service.amount),
        budget: parseInt(this.service.budget)
      }
      //console.log(updates)
      this.$store.dispatch("updateService", {
        id: this.service._id,
        updates,
        token: this.token
      })
      this.$router.go(this.$router.push('/dashboard/services/donations'))
    }
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
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