<template lang="pug">
  div#news
    div.news-list
      ul
        li(v-for="(item, index) in news", :key="index")
          a(href="#")
            div.news-img
              img(:src="item.urlToImage")
            div.content
              p.title.single-line-ellipsis {{item.title}}
              div.news-desc
                p.summary.multi-line-ellipsis {{item.description}}
                p.leftover
                  span.praise 点赞数：{{item.like}}
                  span.time 发表时间：{{item.publishedAt}}
</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        news: []
      }
    },
    created() {
      this.$axios.defaults.baseURL = 'https://newsapi.org/v2/'
      this.$axios.get('everything', {
        params: {
          q: '美图',
          language: 'zh',
          pageSize: 30,
          sortBy: 'popularity',
          apiKey: '165313c207224507b5e8bc02b8071bd0'
        },
        transformResponse(data) {
          data = JSON.parse(data)
          data.articles.map(item => {
            item.like = Math.floor(Math.random() * Math.floor(50))
            item.publishedAt = moment(item.publishedAt).format('YYYY-MM-DD')
            return item
          })
          return data;
        }
      })
      .then(res => {
        console.log(res.data)
        this.news = res.data.articles
      })
      .catch(err => console.log(err))
    }
  }
</script>

<style lang="less" scoped>
#news {
  padding-bottom: 100px;
}
.news-list {
  width: 100%;
  border: 1px solic #ccc;
  font-size: 12px;
  ul > li {
    position: relative;
    a {
      display: flex;
      width: 100%;
      height: 100px;
      color: #808080;
      text-decoration: none;
    }
  }
  .news-img {
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;
    text-align: center;
    img {
      width: 70%;
    }
  }
  .content {
    width: 70%;
    .title {
      display: inline-block;
      color: #1f59df;
      letter-spacing: 0;
      font-family: PingFangSC-Regular;
      margin-top: 10px;
    }
    .news-desc {
      .summary {
        padding: 5px 0;
        line-height: 1.5;
      }
      .leftover {
        position: absolute;
        bottom: 0;
        span {
          color: #ff6700;
        }
        .time {
          margin-left: 30px;
        }
      }
    }
  }
}

</style>