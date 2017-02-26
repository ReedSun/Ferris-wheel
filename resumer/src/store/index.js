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
				{学校: "青岛家里蹲大学", 专业: "计算机科学与技术", 学历: "本科"},
				{学校: "青岛家里蹲研究院", 专业: "计算机科学与技术", 学历: "硕士"}
			],
			project: [
				{项目名: "超厉害的项目1", 项目描述: "我的项目A"},
				{项目名: "超厉害的项目2", 项目描述: "我的项目B"}
			],
			award: [
				{奖项名: "awardA", 奖项描述: "我取得的奖项A"},
				{奖项名: "awardB", 奖项描述: "我取得的奖项B"}
			],
			contacts: [
				{联系方式:"手机", 号码: "12345678910"},
				{联系方式: "邮箱", 号码: "superreedsun@gmail.com"}
			],
			others: [
				{其它信息: "我！哈哈哈哈~"}
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