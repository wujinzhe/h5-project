<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <button @click="getFiles">get请求</button> <br>
      <button @click="create">post请求</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const api = 'dev'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getFiles () {
      const url = api + '/files'
      const params = {
        userId: '',
        title: 'wangll',
        content: '2018年8月1日',
        buttonInfo: {
          text: '活动数据',
          url: 'www.baidu.com'
        }
      }
      axios.get(url, params).then(resp => {
        console.log(resp)
      })
    },
    create () {
      const csrfToken = this.getCookie('csrfToken')
      console.log('csrfToken', csrfToken)
      const url = api + '/create'
      const params = {
        userId: '',
        title: 'wangll',
        content: '2018年8月1日',
        buttonInfo: {
          text: '活动数据',
          url: 'www.baidu.com'
        }
      }
      axios.post(url, params, {headers: {'x-csrf-token': csrfToken}}).then(resp => {
        console.log(resp)
      })
    },
    getCookie (name) {
      var strcookie = document.cookie // 获取cookie字符串
      var arrcookie = strcookie.split('; ') // 分割
      // 遍历匹配
      for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split('=')
        if (arr[0] === name) {
          return arr[1]
        }
      }
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
