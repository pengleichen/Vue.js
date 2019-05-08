<template lang="pug">
  div#menu
    ul
      li(v-for="(menu, index) in menus" :key="menu.id")
        router-link(:to="menu.router")
          i.far.fas.fa-2x(:class="menu.icon", :style="menu.style")
          p {{menu.label}}
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          {
            id: 1,
            icon: 'fa-newspaper',
            style: 'color: green;',
            label: '新闻资讯',
            router: {
              name: 'news.list'
            }
          },
          {
            id: 2,
            icon: 'fa-share-square',
            style: 'color: #e0cd37;',
            label: '图文分享',
            router: {
              name: 'news.list'
            }
          },
          {
            id: 3,
            icon: 'fa-gifts',
            style: 'color: #e07f37;',
            label: '商品展示',
            router: {
              name: 'news.list'
            }
          },
          {
            id: 4,
            icon: 'fa-file-medical-alt',
            style: 'color: #e03837;',
            label: '资讯',
            router: {
              name: 'news.list'
            }
          },
          {
            id: 5,
            icon: 'fa-comment-dots',
            style: 'color: #4837e0;',
            label: '留言反馈',
            router: {
              name: 'news.list'
            }
          },
          {
            id: 6,
            icon: 'fa-headset',
            style: 'color: #117aca;',
            label: '联系我们',
            router: {
              name: 'news.list'
            }
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
#menu {
  width: 100%;
  height: 100%;
}
ul {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  li {
    width: 33%;
    margin: 10px 0;
    a {
      text-decoration: none;
      color: #000;
      p {
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }
}
  
</style>