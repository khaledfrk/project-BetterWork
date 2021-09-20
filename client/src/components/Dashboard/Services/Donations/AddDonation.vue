<template>
    <div>
        <div class="jumbotron m-2">
      <a href="#">
        <div class="d-flex">
        <p @click="goToServices()">{{typeOfService.name}}s List</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
        </svg>
        </div>
      </a>
        <h1 class="display-4">Add New {{typeOfService.name}}</h1>
        <p class="lead">You can add a new {{typeOfService.name}} for your employees, just fill in the form below!</p>
        <hr class="my-4">
        <div class="form-group">
            <div class="input-group" :class="{ invalid: $v.name.$error }">
            <input v-model="name" type="text" class="form-control mb-4" id="exampleInputPassword1" :placeholder="'Name of '+typeOfService.name" @blur="$v.name.$touch()">
            </div>
            <div class="row ml-1">
                <div class="input-group col-3" :class="{ invalid: $v.part.$error }">
                <input v-model="part" type="text" class="form-control mb-4" id="exampleInputPassword2" placeholder="Article number" @blur="$v.part.$touch()">
                </div>
                <div class="input-group col-3" :class="{ invalid: $v.chapter.$error }"><input v-model="chapter" type="text" class="form-control mb-4" id="exampleInputPassword3" placeholder="chapter number" @blur="$v.chapter.$touch()">
                </div>
            </div>
            <textarea v-model="description" class="form-control mb-4 uneditable-input" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
            <p class="lead" style="color: grey; font-weight: 300;">Required Documents:</p>
            <div class="row">
            <div class="col-9">
              <multiselect v-model="value" tag-placeholder="Add this as new document" placeholder="Search or add a document" :options="documents" label="name" track-by="name" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
            </div>
        </div>
        <p class="lead" style="color: grey; font-weight: 300;">Amount:</p>
        <div class="input-group" :class="{ invalid: $v.amount.$error }">
          <input v-model="amount" class="form-control mt-4 mb-4" id="exampleInputPassword4" placeholder="Amount" @blur="$v.amount.$touch()">
          </div>
          <p class="lead" style="color: grey; font-weight: 300;">Budget:</p>
        <div class="input-group" :class="{ invalid: $v.budget.$error }">
          <input v-model="budget" class="form-control mb-4" id="exampleInputPassword5" placeholder="Budget" @blur="$v.budget.$touch()">
          </div>
        <div class="row justify-content-start mb-4 mt-4">
            <button @click="handleAddService" type="submit" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad " style="padding:15px 45px !important;font-size:15px">Add {{typeOfService.name}}</button>
          </div>
      </div>
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { required , numeric } from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'
export default {
  components: { Multiselect },
  data () {
    return {
      value: [],
      options: ['Vue.js', 'Javascript', 'Open Source'],
      name: '',
      part: '',
      chapter: '',
      description: '',
      amount: 0,
      budget: 0
    }
  },
  name: 'AddDonation',
  computed: {
    ...mapGetters(['typeOfService', 'token', 'documents'])
  },
  created() {
    this.handleGetAllDocuments()
  },

  validations: {
      name: {
        required,
      },
      part: {
        required,
        numeric,
      },
      chapter: {
        required,
        numeric,
      },
      description: {
        required,
      },
      amount:{
        required,
        numeric,
      },
      budget:{
        required,
        numeric,
      }
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
    goToServices(){
      this.$router.push('/dashboard/services/donations')
    },
    handleAddService() {
      const doc = []
      this.value.forEach((val) => {
        doc.push(val.name)
      })
      const data = {
        typeOfService: this.typeOfService._id,
        name: this.name,
        part: this.part,
        chapter: this.chapter,
        description: this.description,
        documents: doc,
        amount: this.amount,
        budget: this.budget
      }
      //console.log(data)
      this.$store.dispatch("addService", {
        data,
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
.input-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}
</style>
