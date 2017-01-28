import Vue from "vue";

var app = new Vue({
  el: '#app',
  data: {
    newTodo: "",
    todoList: []
  },
  created: function(){
  	window.onbeforeunload = ()=>{
  		let dataString = JSON.stringify(this.todoList)
  		window.localStorage.setItem("myTodos", dataString)
  	}
  	let oldDataString = window.localStorage.getItem("myTodos")
  	let oldData = JSON.parse(oldDataString)
  	this.todoList = oldData || []
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
  		console.log(event)
  		let index = this.todoList.indexOf(event)
  		this.todoList.splice(index,1)
  	}
  }
})   