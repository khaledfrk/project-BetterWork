<template>
    <div class="row justify-content-center " style="margin-top: 10vh;" >
        <div class="col-3 p-0 my-auto "  >
              <div class="flex-column  p-5 pb-2  shadow ">
                <div class=" row justify-content-center mb-5">
                    <img class="" src="../../assets/signin/logo.png"/>

                </div>
                <form @submit.prevent="handleDemandAccount">
                  <div class="form-group" :class="{ invalid: $v.email.$error }">
                    <div class="input-group mb-3">
                      <input v-model="email" type="text" class="form-control" placeholder="Professional email" aria-label="Recipient's username" aria-describedby="basic-addon2" @blur="$v.email.$touch()">
                      <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2">@esi-sba.dz</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group" :class="{ invalid: $v.firstname.$error }">
                    <input v-model="firstname" type="text" class="form-control" id="exampleInputPassword1" placeholder="First name" @blur="$v.firstname.$touch()">
                  </div>
                  <div class="form-group" :class="{ invalid: $v.lastname.$error }">
                    <input v-model="lastname" type="text" class="form-control" id="exampleInputPassword1" placeholder="Last name" @blur="$v.lastname.$touch()">
                  </div>
                  <div class="form-group">
                    <label for="sel1">Job:</label>
                    <multiselect v-model="job" placeholder="Select Job" :options="options" :multiple="false" :taggable="false"></multiselect>
                  </div>
                  <div class="row justify-content-center mb-4">
                    <button type="submit" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad " style="padding:15px 45px !important;font-size:15px">Submit</button>
                  </div>
                  <div class="mb-1 text-center " style="font-size: small;">You already have an account?</div>
                  <div class="text-center "><a @click="goToSignin" href="#" style="font-weight:bold;">Sign in!</a></div>
                </form>




              </div>
      </div>

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { required } from 'vuelidate/lib/validators'
export default {
  components: { Multiselect },
  name: 'DemandAccount',
  data () {
    return {
      options: ['Professor', 'Administration', 'Maitnance', 'Agent'],
      email: '',
      firstname: '',
      lastname: '',
      job: ''
    }
  },

  validations: {
      email: {
        required,
      },
      firstname: {
        required,
      },
      lastname: {
        required,
      },

  },
  methods: {
    goToSignin() {
      this.$router.push('/signin')
    },
    handleDemandAccount() {
      const data = {
        email: this.email + '@esi-sba.dz',
        firstname: this.firstname,
        lastname: this.lastname,
        job: this.job
      }
      console.log(data)
      this.$store.dispatch("demandAcc", {data})
      this.$router.push('/signin')
    }
  },
}
</script>

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
.form-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

</style>
