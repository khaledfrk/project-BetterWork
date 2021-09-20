<template>
	<div class="pl-4 mt-4" style="overflow-y:hidden !important">
		
		<!--<select v-model="src" style="width: 30em">
			<option v-for="item in pdfList" :key="item" v-text="item"></option>
		</select>--> 
		<button @click="$refs.pdf.print()" class="mb-4 btn btn-grad">Read the document</button>
		<div style="width: 100%" v-if="regulations">
			<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
			<pdf v-if="show" ref="pdf" style="border: 5px solid #2e5083" :src="'http://localhost:3000/'+regulations[0].link" ></pdf>
		</div>
	</div>
</template>
<script>
import pdf from 'vue-pdf'
import {mapGetters} from 'vuex'
export default {
	components: {
		pdf: pdf
	},
    name: 'Regulations',
	data () {
		return {
			show: true,
			src:'',
			loadedRatio: 0,
			page: 1,
			numPages: 0,
			rotate: 0,
		}
	},
    computed: {
        ...mapGetters(['token', 'regulations'])
    },
    created() {
        this.handleGetRegDocument()
    },
	methods: {
        handleGetRegDocument() {
            this.$store.dispatch("getRegDocument", {token: this.token})
        }
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