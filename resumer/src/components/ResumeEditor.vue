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
				<div class="panels-field">
					<div v-if="resume[item.name] instanceof Array">
						<div v-for="(subitem, subindex) in resume[item.name]">	
							<div v-for="(value,key) in subitem">
								<label>{{key}}</label>
								<input type="text" v-model="resume[item.name][subindex][key]">
							</div>
							<hr>
						</div>
					</div>
					<div v-else  v-for="(value, key) in resume[item.name]">
						<label>{{key}}</label>
						<input type="text" v-model="resume[item.name][key]">	
					</div>
				</div>		
			</li>
		</ol>
	</div>
</template>
<script>
export default {
  name: 'ResumeEditor',
  computed: {
  	selected: {
  		get(){
	  		return this.$store.state.selected
  		},
  		set(value){
  			return this.$store.commit('switchTab', value)
  		}
  	},
  	resume: function(){
  		return this.$store.state.resume
  	}
  }
}
</script>
<style lang="scss" scoped>
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
		>.panels {
			overflow: auto;
			flex-grow: 1;
			>li {
				padding: 24px;
				>.panels-field {
					label {
						display: block;
					}
					input[type=text]{
						margin: 16px 0;
						border: 1px solid #ddd;
						box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25);
						width: 100%;
						height: 40px;
						padding: 0 8px;
					}
					hr {
						border: none;
						border-top: 1px solid #ddd;
						margin: 24px 0;
					}
				}
			}
		}
	}
	ol {
		list-style: none;
	}
</style>
