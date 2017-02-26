import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		selected: "workHistory",
		resume: {
			config: [
				{name: "profile", icon: "id"},
				{name: "workHistory", icon: "work"},
				{name: "education", icon: "book"},
				{name: "project", icon: "heart"},
				{name: "award", icon: "cup"},
				{name: "contacts", icon: "phone"},
				{name: "others", icon: "add"}
			],
			profile: {
				姓名: 'ReedSun',
				城市: '青岛',
				职位: '前端工程师',
				生日: '2017.02.26'
			},
			workHistory: [
				{公司: "Tesla", 职位: "前端工程师", 开始时间:"2008.01", 结束时间:"2012.09", 说明: "我很厉害"},
				{公司: "Google", 职位: "前端工程师", 开始时间:"2012.10", 结束时间:"至今", 说明: "我真的很厉害"}
			],
			education: [
				{school: "青岛家里蹲大学", major: "计算机科学与技术", content: "本科"},
				{school: "青岛家里蹲研究院", major: "计算机科学与技术", content: "研究生"}
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