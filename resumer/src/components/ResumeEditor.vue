<template>
	<div id="resume-editor">
		<nav>
			<ol>
			<li v-for="(item,index) in resume.config"
				v-bind:class="{active: item === selected}"
				v-on:click="selected = item"
			>
				<svg>
					<use v-bind:href='`#icon-${item.icon}`'></use>
				</svg>
			</li>
			</ol>
		</nav>
		<ol class="panels">
		<li v-for="item in resume.config"
			v-show="item === selected"
		>
			{{resume[item.name]}}	
		</li>
		</ol>
	</div>
</template>
<script>
export default {
  name: 'ResumeEditor',
  data: function () {
    return {
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
		'work history': {
			a:1,
			b:2,
			c:3
		},
		education: "education",
		project: "project",
		award: "award",
		contacts: "contacts",
		others: "others"
		}
	}
  }
}
</script>
<style lang="scss">
	#resume-editor {
		width: 35%;
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: row;
		overflow: hidden;
		>nav {
			width: 80px;
			background: black;
			color: white;
			flex-shrink: 0;
			>ol {
				>li {
					height: 48px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 16px;
					margin-bottom: 16px;
					cursor: pointer;
					&.active {
						background: white;
						color: black;
					}
					svg {
						height: 24px;
						width: 24px;
						fill: currentColor;
						vertical-align: -0.1em;
						font-size: 16px;
					}
				}
			}
		}
	}
	ol {
		list-style: none;
	}
</style>
