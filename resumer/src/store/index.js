import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		selected: "work history",
		resume: {
			config: [
				{name: "profile", icon: "id"},
				{name: "work history", icon: "work"},
				{name: "education", icon: "book"},
				{name: "project", icon: "heart"},
				{name: "award", icon: "cup"},
				{name: "contacts", icon: "phone"},
				{name: "others", icon: "add"}
			],
			profile: {
				name: '',
				city: '',
				title: ''
			},
			'work history': [
				{conpany: "Tesla", content: "我的第一份工作经历"},
				{conpany: "Google", content: "我的第二份工作经历"}
			],
			education: [
				{school: "本科", content: "我的本科经历"},
				{school: "研究生", content: "我的研究生经历"}
			],
			project: [
				{name: "projectA", content: "我的项目A"},
				{name: "projectB", content: "我的项目B"}
			],
			award: [
				{name: "awardA", content: "我取得的奖项A"},
				{name: "awardB", content: "我取得的奖项B"}
			],
			contacts: [
				{"Contact way": "Contact way A", content: "联系方式A"},
				{"Contact way": "Contact way B", content: "联系方式B"}
			],
			others: [
				{"others": ""}
			]
		}
	},
	mutations: {
		switchTab(state, payload){
			state.selected = payload
		}
	}
})

export default store