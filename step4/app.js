import Vue from "vue";
import AV from "leancloud-storage"

AV.init({
  appId: "1Xc77oO2QeqkR673C4pGnJhJ-gzGzoHsz",
  appKey: "CmzLtIVXSPC3lefBIMlqqIaU"
});


var app = new Vue({
  el: '#app',
  data: {
    newTodo: "",
    todoList: [],
    actionType: "signUp",
    formData: {
      user: "",
      password: ""
    },
    currentUser: null
  },
  created: function(){
  	window.onbeforeunload = ()=>{
  		let dataString = JSON.stringify(this.todoList)
  		window.localStorage.setItem("myTodos", dataString)
  	}
  	let oldDataString = window.localStorage.getItem("myTodos")
  	let oldData = JSON.parse(oldDataString)
  	this.todoList = oldData || []
    this.currentUser = this.getCurrentUser();
  },
  methods: {
  	submit: function(event) {
  		this.todoList.push({
  			title: this.newTodo,
  			createAt: (new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()),
  			done: false
  		})
  		this.newTodo =""
  	},
  	deleteTodo: function(event) {
  		let index = this.todoList.indexOf(event)
  		this.todoList.splice(index,1)
  	},
    changeToSignUp: function(event){
      this.actionType = "signUp";
      var btn = document.getElementsByClassName("btn")
      for (var i=0;i<btn.length;i++) {
        btn[i].setAttribute("class", "btn");
      }     
      event.target.setAttribute("class", "btn active")
    },
    changeToSignIn: function(){
      this.actionType = "signIn";
      var btn = document.getElementsByClassName("btn")
      for (var i=0;i<btn.length;i++) {
        btn[i].setAttribute("class", "btn");
      }     
      event.target.setAttribute("class", "btn active")    
    },
    signUp: function(){
      var user = new AV.User();
      user.setUsername(this.formData.user);
      user.setPassword(this.formData.password);
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
      }, function(error){
        alert("注册失败")
      });
    },
    login: function(){
      AV.User.logIn(this.formData.user, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser();
      }, function(error){
        alert("登陆失败")
      })
    },
    logout: function(){
      AV.User.logOut();
      this.currentUser = null;
      window.location.reload();
    },
    getCurrentUser: function(){
      let current = AV.User.current();
      if (current) {
        let {id, createdAt, attributes:{username}} = AV.User.current();
        return {id, username, createdAt}
      } else {
        return null
      }
    }
  }
})   