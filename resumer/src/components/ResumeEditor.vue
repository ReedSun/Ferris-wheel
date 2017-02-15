<template>
	<div id="resume-editor">
		<nav>
			<ol>
			<li v-for="(item,index) in resume.visibleItems"
				v-bind:class="{active: item === selected}"
				v-on:click="selected = item"
			>
				{{index}}
			</li>
			</ol>
		</nav>
		<ol class="panels">
		<li v-for="item in resume.visibleItems"
			v-show="item === selected"
		>
			{{resume[item]}}	
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
			visibleItems: ['bio', 'work history', 'education', 'project', 'award', 'contacts', 'others'],
		bio:  {
				name: '',
				city: '',
				title: ''
			},
		'work history': {
			a:1,
			b:2,
			c:3
		},
		education: [],
		project: [],
		award: [],
		contacts: [],
		other: []
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
				}
			}
		}
	}
	ol {
		list-style: none;
	}
</style>
