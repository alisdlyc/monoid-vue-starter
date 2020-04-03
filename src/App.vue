<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created () {
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'static/Live2dw/',
          pluginJsPath: 'lib/',
          // pluginModelPath: 'live2d-widget-model-shizuku/assets/',
          pluginModelPath: 'kanna/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '../static/Live2dw/kanna/model.json' },
          display: { position: 'right', width: 300, height: 520 },
          mobile: { show: true },
          message: '../static/Live2dw/kanna/message.json',
          log: false
        })
      }, 1000)
    },
  }
</script>
