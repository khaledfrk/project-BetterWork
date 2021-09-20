<template>
    <div class="jumbotron m-2 p-4">
      <a href="#">
        <div class="d-flex">
        <p  @click="goToEmployees()">Employees list</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16" style="margin-top: 5px;margin-left:5px">
          <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </div>
    </a>
        <h1 class="display-4">Add New Employee</h1>
        <p class="lead">You can add a new employee in your employee list, just fill in the form below with the informations of the employee in concern!</p>
        <hr class="my-4" >
        <form @submit.prevent="handleAddEmployee">
        <div class="form-group" >
            <div class="input-group" :class="{ invalid: $v.firstname.$error }">
              <input type="text" class="form-control mb-4" v-model="firstname" id="exampleInputPassword1" placeholder="First Name" @blur="$v.firstname.$touch()">
            </div>
            <div class="input-group" :class="{ invalid: $v.lastname.$error }">
              <input type="text" class="form-control mb-4" v-model="lastname" id="exampleInputPassword1" placeholder="Last Name"@blur="$v.lastname.$touch()">
            </div>
            <div class="input-group mb-4" :class="{ invalid: $v.email.$error }">
                <input type="text" class="form-control" @blur="$v.email.$touch()"  v-model="email" placeholder="Professional email" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">@esi-sba.dz</span>
                </div>
              </div>
            <div class="input-group" :class="{ invalid: $v.phoneNumber.$error }">
            <input  class="form-control mb-4" v-model="phoneNumber" id="exampleInputPassword1" placeholder="Phone Number" @blur="$v.phoneNumber.$touch()">
            </div>
            </div>
            <div class="form-group" :class="{ invalid: $v.dateOfBirth.$error }">
                <p class="lead" style="color: grey; font-weight: 300;">Birthday:</p>
                <input class="form-control" v-model= "dateOfBirth" type="date" id="example-date-input" @blur="$v.dateOfBirth.$touch()">
            </div>
            <div class="form-group">
                <p class="lead"  style="color: grey; font-weight: 300;">Job</p>
                <multiselect v-model="job" placeholder="Select Job" :options="options" :multiple="false" :taggable="false"></multiselect>
                </div>
            <div class="form-group" :class="{ invalid: $v.ccp.$error }">
            <input type="text" class="form-control mb-4" v-model="ccp" id="exampleInputPassword1" placeholder="CCP Account" @blur="$v.ccp.$touch()">
            </div>


        <div class="row justify-content-start mb-4 mt-4">
            <button :disabled='isDisabled' type="submit" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad " >Add Employee</button>
        </div>
        </form>
      </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import {mapGetters} from 'vuex'
import { required , minLength  , numeric } from 'vuelidate/lib/validators'
export default {
    components: { Multiselect },
    name: 'AddEmployee',
    data() {
      return {
        options: ['Professor', 'Administration', 'Maitnance', 'Agent'],
        firstname: '',
        lastname: '',
        email:'',
        job:'',
        phoneNumber: '',
        ccp: '',
        dateOfBirth: '',

      }
    },
    validations: {
      email: {
        required,
      },
      phoneNumber: {
        required,
        minlen: minLength(10),
        numeric,
      },
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      dateOfBirth: {
        required,
      },
      job:{
        required,
      },
      ccp:{
        required,
      }
  },
    computed:{
      ...mapGetters(['token']),
  	isDisabled: function(){
    	return this.firstname.length === 0 && this.lastname.length === 0 && this.dateOfBirth.length === 0 && this.job.length === 0 && this.ccp.length === 0 && this.phoneNumber.length === 0 && this.email.length === 0 ;
    }
    },
    methods: {
      goToEmployees() {
        this.$router.push('/dashboard/employees')
      },
      generatePassword(length) {
        let password = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        for ( let i = 0; i < length; i++ ) {
          password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        //console.log(password)
        return password;
      },
      handleAddEmployee() {
        const data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email + '@esi-sba.dz' ,
          password: "betterwork",
          phoneNumber: this.phoneNumber,
          dateOfBirth: this.dateOfBirth,
          job: this.job,
          ccp: this.ccp,
        }
        console.log(data)
        this.$store.dispatch("createEmpAcc", {
          data,
          token: this.token
        })
        this.$router.go(this.$router.push('/dashboard/employees'))
      },

    },

}
</script>

<style scoped>
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

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
          a{
            text-decoration: underline;
            color: #2e5083;
          }
          a:hover{
            color:#0e1e58;
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
  border-color: #2e5083;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.025) inset, 0 0 10px #2e5083;
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
