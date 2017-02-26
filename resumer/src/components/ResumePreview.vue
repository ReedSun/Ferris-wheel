<template>
	<div id="resume-preview">
		<p>I am Resume Preview</p>
		<p>{{count}}</p>
		<p><button @click="add">click</button></p>
	</div>
</template>

<script>
export default {
  name: 'ResumePreview',
  computed: {
  	count(){
  		return this.$store.state.count
  	}
  },
  methods: {
  	add(){
  		this.$store.commit("increment")
  	}
  }
}
</script>

<style>
	#resume-preview {
		background: #fff;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
		flex-grow: 1;
		margin-left: 16px;
	}
</style>
