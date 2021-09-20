<template>
    <div class="row justify-content-center " style="margin-top: 10vh;" >
        <div class="bg-image" style="background-image: url('../../assets/signin/backgroun.png');"></div>
            <div class="col-3 p-0 my-auto "  >
                <div class="flex-column  p-5  shadow ">
                    <div class=" row justify-content-center mb-5">
                        <img class="" src="../../assets/signin/logo.png"/>
                    </div>
                    <form @submit.prevent="handleSigninUser">
                    <div class="form-group">
                        <div class="input-group mb-3" :class="{ invalid: $v.email.$error }">
                        <input type="text" class="form-control" placeholder="Professional email" @blur="$v.email.$touch()" v-model="email" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@esi-sba.dz</span>
                        </div>
                        </div>
                        <p v-if="$v.email.required">This field must not be empty.</p>
                    </div>
                    <div class="form-group" :class="{ invalid: $v.password.$error }">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" @blur="$v.password.$touch()" v-model="password">
                    </div>
                    <div class="row justify-content-end p-0">
                        <div class="col-5 mb-4"><a class="text-left" style="font-size:small;">Forgot password?</a></div>
                    </div>
                    <div class="row justify-content-center mb-4">
                    <button type="submit" class="btn btn-primary pt-2 pb-2 pr-5 pl-5 btn-grad " style="padding:15px 45px !important;font-size:15px">Sign in</button>
                    </div>
                    <div class="mb-1 text-center " style="font-size: small;">You don't have an account?</div>
                    <div class="text-center "><a href="#" style="font-weight:bold;" @click="goToDemandAccount">Demand access!</a></div>


                    </form>




                </div>
        </div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { required , minLength } from 'vuelidate/lib/validators'
export default {
    name: 'Signin',
  data() {
    return {
      email: "",
      password: ""
    };
  },

  validations: {
    email: {
      required,
    },
    password: {
      required,
      minlen: minLength(8)
    }
  },

  computed: {
        ...mapGetters(['user'])
  },
  watch: {
    user(value) {
        //if user value changes from null to object, redirect to home page
        if (value) {
            this.$router.push('/')
        }
    }
  },
  methods: {
    goToDemandAccount() {
      this.$router.push('/demand_account')
    },
    handleSigninUser() {
      console.log(this.email)
      console.log(this.password)
      this.$store.dispatch("loginEmp", {
          email: this.email + "@esi-sba.dz",
          password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
      .btn-grad{
        background-image: linear-gradient(to right, #e97923 0%, #e97923 30%, #efa81d   100%)}
         .btn-grad {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
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

.input-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}
p{
  color: red;
}

.form-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}
p{
  color: red;
}
</style>
