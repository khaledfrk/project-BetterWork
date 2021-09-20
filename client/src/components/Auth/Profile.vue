<template>
    <div>
        <div class="container-fluid pt-5 pb-5 " >

            <div class="container shadow  " style="background: #ffffff; border: solid #ffffff 2px; border-radius: 8px; ">
                <div class="row p-4 ">
                    <div class="col-md-5 mt-3 " style="text-align: center;">
                        <img src="../../assets/employees/khaled.jpg.png" alt="Avatar" class="avatar m-4">
                        <h4 style="font-weight: bold;">{{user.lastname}} {{user.firstname}}</h4>
                        <h5 style="color: grey;" class="requestsType">{{user.job}}</h5>
                    </div>
                    <div class="col-md-7 mt-5 mb-5 ">
                        <div class="row m-2 ml-4 shadow" style="background: #ffffff; height: max-content; border-radius: 5px;">
                            <div class="col-6 pt-2 pt-2">
                                <h6 > Date de naissance :</h6>
                            </div>
                            <div class="col-6 pt-2 pt-2">
                                <h6 > {{user.dateOfBirth}} </h6>
                            </div>
                        </div>
                        <div class="row m-2 ml-4 shadow" style="background: #ffffff; height: max-content; border-radius: 5px ;">
                            <div class="col-6 pt-2 pt-2">
                                <h6 > Professional email :</h6>
                            </div>
                            <div class="col-6 pt-2 pt-2 ">
                                <h6 > {{user.email}} </h6>
                            </div>
                        </div>
                        <div class="row m-2 ml-4 shadow" style="background: #ffffff; height: max-content; border-radius: 5px;">
                            <div class="col-6 pt-2 pt-2">
                                <h6 > CCP account :</h6>
                            </div>
                            <div class="col-6 pt-2 pt-2">
                                <h6 > {{user.ccp}} </h6>
                            </div>
                        </div>
                        <div class="row m-2 ml-4 ">
                            
                            <div class="col-2 pt-2 ml-5" style="float: right;margin-left:148px !important">
                                <button type="button" class="btn btnEdit mr-0" data-toggle="modal"
                                    data-target="#exampleModal" style="width:250px">Edit Password</button>
                            </div>
                        </div>
                        <div class="row pr-3 m-2 justify-content-end ">
                            <div class="modal-footer mr-0">
                                <button type="button" class="btn btnM " @click="goToContact">Report mistake</button>
                                <button type="button" class="btn btnD mr-0 ">Done</button>
                            </div>

                        </div>
                    </div>
                </div>


                <!-- Modal -->
                <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content ">
                            <div class="modal-header">

                                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="col-auto">
                                    <label for="inputPassword2" class="visually-hidden">password</label>
                                    <input v-model="password" type="password" class="form-control" id="inputPassword2"
                                        placeholder="password">
                                </div>
                                <div class="col-auto mt-3">
                                    <label for="inputPassword2" class="visually-hidden">new password</label>
                                    <input v-model="newPassword" type="password" class="form-control" id="inputPassword2"
                                        placeholder="new password">
                                </div>
                                <div class="col-auto mt-3">
                                    <label for="inputPassword2" class="visually-hidden">confirm new password</label>
                                    <input v-model="conNewPassword" type="password" class="form-control" id="inputPassword2"
                                        placeholder="confirm new password">
                                </div>
                            </div>
                            <div class="modal-footer modal-footer1 mr-3">
                                <button @click="handleChangePassword" type="button" class="btn btnD" data-dismiss="modal">Save</button>
                                <button type="button" class="btn btnM">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    /*function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
    }*/
    export default {
        name: 'Profile',
        data () {
            return{
                password: '',
                newPassword: '',
                conNewPassword: ''
            }
        },
        computed: {
            ...mapGetters(['user', 'token'])
        },
        created() {

        },
        methods: {
            handleChangePassword() {
                if(this.newPassword === this.conNewPassword) {
                    const updates = {
                        password: this.password,
                        newPassword: this.newPassword,
                    }
                    this.$store.dispatch("changeEmpPassword", {
                        id: this.user._id,
                        updates,
                        token: this.token
                    })
                }
            },
            goToContact() {
              this.$router.push('/contact')
            },
        }
    }
</script>

<style>
.btn-prof{
  outline:none !important
}
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
    
    
    .list-group-item.active{
      background-color: white;
        color: #2e5083;
        border: 0px;
        border-radius: 0px;

    }
    .list-group-item{
      padding-left: 50px;
    }
    nav{
      height: 0px;
    }
    .close-button{
      display: none;
    }
    @media (min-width: 992px) {
      nav{
        height: auto;
      }
      .close-button{
      display: block;
    }
    }
 
    .white{
        background-color: #2e5083;
        color: white;
    }
    .white:active{
        background-color: white;
        color:#efa81d;
    }
    .white:hover{
        background-color: #e97923;
        color: white;
    }
    
    .white:focus{
        background-color: white;
        color:#efa81d;
    }
    
    .avatar {
        vertical-align: middle;
        width: 150px;
        height: 150px;
        padding: 8px;
        border: 1px;
        border-radius: 50%;
        border-color: #0e1e58;
    }
    html,
    body {
        height: 100%;
        margin: 0px;
    }
    .container-fluid {
        height: 100% !important;
    }
    .btnD {
        color: #ffffff;
        background-image: linear-gradient(to right, #2e5083 0%, #2e5083 30%, #0e1e58 100%);
        border-radius: 3px;
        transition: 0.5s;
        font-size: 0.9rem;
        background-size: 200% auto;

    }
    .btnD:hover {
        background-position: right center;
        /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
    .btnEdit {
        color: #ffffff;
        background-image: linear-gradient(to right, #2e5083 0%, #2e5083 30%, #0e1e58 100%);
        border-radius: 3px;
        transition: 0.5s;
        font-size: 0.7rem;
        background-size: 200% auto;
        padding: 5px 20px;
        float: right;
    }
    .btnEdit:hover {
        background-position: right center;
        /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
    .btnM {
        color: #ffffff;
        background-image: linear-gradient(to right, #e97923 0%, #e97923 30%, #efa81d 100%);
       /* background-image: linear-gradient(to right, #FF6B6B 0%, #FF6B6B 30%, #B61919 100%);*/
        border-radius: 3px;
        transition: 0.5s;
        font-size: 0.9rem;
        background-size: 200% auto;
    }
    .btnM:hover {
        background-position: right center;
        /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
    .modal-header {
        border-bottom: none;
    }
    .modal-footer {
        border-top: none;
    }
    .modal-footer1 {
        border-top: none;
    }
    #togglePassword {
        cursor: pointer;
    }
</style>