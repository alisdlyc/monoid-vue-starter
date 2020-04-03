<template>
  <div>
    <div id="container">
      <el-container>
        <el-header>
          <div class="center">
            <el-row>
              <el-col :span="12" :offset="6">
                <el-input placeholder="请输入书籍名称" v-model="searchMsg" class="input-with-select" @keyup.enter.native="toSearch">
                  <el-button slot="append" icon="el-icon-search" v-on:click="toSearch"></el-button>
                </el-input>
              </el-col>
            </el-row>
          </div>
        </el-header>
        <el-main>
          <div v-for="book in books">
            <div class="book">
              <input type="hidden" v-bind:placeholder="book.id">
              <img v-bind:src="book.localImgLink" alt="皮卡皮卡" class="bookImg">
              <div class="bookName">
                {{book.bookName}}
              </div>
              <div class="writer">
                {{book.writer}}
              </div>
              <div class="press">
                {{book.press}}
              </div>
              <div class="pubDate">
                {{book.pubDate}}
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
    <Live2d :modelData="mdata"
            :on-move="handleMove" />

  </div>
</template>

<style scoped>
  .book{
    position: relative;
    width: 63%;
    height: auto;
    background: #f6f6f6;
    padding: 15px 0;
    display: inline-block;
    margin: 10px 0;
  }

  .bookImg{
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 0 0 110px;
  }

  .bookName{
    font-size: medium;
    font-weight: 500;
    color: #76a993;
    position: relative;
    margin: -103px 0px 80px 244px;
    display: block;
    width: max-content;
  }

  .writer{
    color: #5D5D5D;
    font-size: small;
    font-weight: 400;
    position: relative;
    margin: -77px 0 53px 244px;
    display: block;
    width: max-content;
    max-lines: 1;
    max-width: 350px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .press{
    color: #5D5D5D;
    font-size: small;
    font-weight: 300;
    position: relative;
    margin: -48px 0px 28px 244px;
    display: block;
    width: max-content;
    max-lines: 1;
  }

  .pubDate{
    color: #5D5D5D;
    font-size: small;
    font-weight: 300;
    position: relative;
    margin: -20px 0px 5px 244px;
    display: block;
    width: max-content;
    max-lines: 1;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 10px 0 0 0;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: start;
  }

  div > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .center{
    margin: auto;
  }
</style>

<script>
  import axios from 'axios';
  export default {
    props: ['msg'],
    name: "BookList",

    data(){
      return {
        books:[{
          id:null,
          bookName:null,
          writer:null,
          press:null,
          rating:null,
          pubDate:null,
          localImgLink:null,
        }],
        currentPage:null,
        totalPages:null,
        pageSize:null,
        hasNext:null,
        hasPre:null,
      }
    },
    mounted() {
      axios({
        // url:'http://localhost:8088/axios/search',
        url:'../../static/mock/books.json',
        method:'get'
      }).then(res=>{
        console.log(res.data);
        this.currentPage = res.data.currentPage;
        this.totalPages = res.data.totalPages;
        this.pageSize = res.data.pageSize;
        this.hasNext = res.data.hasNext;
        this.hasPre = res.data.hasPre;
        this.books = res.data.data;
      })
    },
    mdata: {
      name: "Epsilon2.1", // 模型名称
      model: "/api/assets/Epsilon2.1/Epsilon2.1.moc", // 模型文件地址
      textures: [
        "/api/assets/Epsilon2.1/Epsilon2.1.2048/texture_00.png", // 材质素材地址
      ]
    },
  }
</script>
