<template>
	<div id="resume-preview">
		<section data-name="profile" v-show="resume.profile">
			<h1>{{resume.profile.姓名}}</h1>
			<h2>{{resume.profile.职位}}</h2>
			<p>
				<small>
					{{resume.profile.城市}} 
					{{resume.profile.生日}}
				</small>
			</p>
		</section>
		
		<section data-name="workHistory" v-show="resume.workHistory">
			<h2>工作经历</h2>
			<ol>
				<li v-for="item in resume.workHistory">
					<h3>{{item.公司}}</h3>
					<h4>{{item.职位}}</h4>
					<h5>
						<small>{{item.开始时间}} - {{item.结束时间}}</small>
					</h5>
					<p>{{item.说明}}</p>
				</li>
			</ol>
		</section>
	
		<section data-name="education" v-show="resume.education">
			<h2>毕业院校</h2>
			<ol>
				<li v-for="item in resume.education">
					<h3>{{item.学校}}</h3>
					<h4>{{item.学历}} - {{item.专业}}</h4>
				</li>
			</ol>	
		</section>
		
		<section data-name="project" v-show="resume.project">
			<h2>项目经历</h2>
			<li v-for="item in resume.project">
				<h3>{{item.项目名}}</h3>
				<p v-show="item.项目描述">{{item.项目描述}}</p>
			</li>
		</section>

		<section data-name="award" v-show="resume.award">
			<h2>获奖情况</h2>
			<li v-for="item in resume.award">
				<h3>{{item.奖项名}}</h3>
				<p v-show="item.奖项描述">{{item.奖项描述}}</p>
			</li>
		</section>

		<section data-name="contacts" v-show="resume.contacts">
			<h2>联系方式</h2>
			<table>
				<tr v-for="item in resume.contacts">
					<td>{{item.联系方式}}</td>
					<td>{{item.号码}}</td>
				</tr>
			</table>
		</section>
	</div>
</template>

<script>
export default {
  name: 'ResumePreview',
  computed: {
  	resume(){
  		return this.$store.state.resume
  	}
  }
}
</script>

<style lang="scss" scopted>
	#resume-preview {
		overflow: auto;
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
		flex-grow: 1;
		margin-left: 16px;
		padding: 2em;
		color: #333;
		line-height: 1.2;
		* {
			box-sizing: border-box;
			font-variant: normal;
			font-weight: normal;
		}
		ol,li {
			list-style: none;
		}
		section + section {
			margin-top: 2em;
		}
		p {
			white-space: pre-line;
		}
		section {
			>h2:first-child{
				background: #ddd;
				display: inline-block;
				padding: 0.2em;
				margin-bottom: 0.5em
			}
		}
		section[data-name="profile"]{
			>h1 {
				margin: 0.1em 0;
				font-size: 4em;
			}
		}
		section[data-name="workHistory"],
		section[data-name="project"],
		section[data-name="award"],
		{
			li+li {
				margin-top: 1em;
			}
			li {
				h5 {
					border-bottom: 1px solid #999;
					padding-bottom: 0.3em;
					margin-bottom: 0.3em;
				}
			}
		}
		section[data-name="education"]{
			li {
				line-height: 1.5;
			}
			li+li {
				margin-top: 1em;
			}
		}
		section[data-name="contacts"]{
			td:first-child{
				padding-right: 1em;
			}
		}
	}
</style>
