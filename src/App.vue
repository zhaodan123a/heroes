<template>
  <div id="app">
		<!-- 头部 -->
    <app-header></app-header>
		<div class="container-fluid">
			<div class="row">
				<!-- 左侧 -->
				<app-spilder></app-spilder>
				<!-- 右侧占位 -->
				<router-view></router-view>
			</div>
		</div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppSpilder from './components/AppSpilder.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppSpilder,

  }
}
</script>

<style>

</style>
