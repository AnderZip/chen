<template>
    <el-container>
      <el-mian class="topbar">
          <h1 class="icon"><router-link class="amireux-link" to="/home"><p style="color: white;height: 10px">AMIREUX</p></router-link></h1>
          <nav class="nav">
            <el-breadcrumb class="menu-item">
              <el-breadcrumb-item><router-link class="amireux-link" to="/home">AMIREUX</router-link></el-breadcrumb-item>
              <el-breadcrumb-item><router-link class="amireux-link" to="/introduction">会社案内</router-link></el-breadcrumb-item>
              <el-breadcrumb-item><router-link class="amireux-link" to="/production">開発関連</router-link></el-breadcrumb-item>
              <el-breadcrumb-item><router-link class="amireux-link" to="/service">サービス</router-link></el-breadcrumb-item>
              <el-breadcrumb-item><router-link class="amireux-link" to="/info">社内活動</router-link></el-breadcrumb-item>
              <el-breadcrumb-item><router-link class="amireux-link" to="/research">お問い合わせ</router-link></el-breadcrumb-item>
              <el-breadcrumb-item></el-breadcrumb-item>
            </el-breadcrumb>
          </nav>
      </el-mian>
      <router-view ></router-view>
      <el-footer class="tail">
        <div>
          <p class="address" style="">---  AMIREUX 〒123-4567 東京都足立区栗原団地ｘｘビル　TEL.01-2345-6789  ---</p>
        </div>

<!--          <div :span="2" class="tail-qrcode" v-for="(QRCode, index) in QRCodes" :key="index">-->
<!--            <img :src="QRCode.img" alt="qrcode"/>-->
<!--            <p>{{QRCode.name}}</p>-->
<!--          </div>-->

      </el-footer>
    </el-container>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        QRCodes: [
          {
            name: 'WeChat',
            img: require('./assets/images/QRCode/official_chat.png')
          },
          {
            name: 'Line',
            img: require('./assets/images/QRCode/official_weblog.png')
          },
        ],
      }
    },
    mounted () {
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          this.screenWidth = window.screenWidth
        })()
      }
    },
  }

</script>

<style >
  *{
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
  }
  .address {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 50px;
    color: white;
    text-align: center;
    background-color: #909399;
  }

  .topbar {
    height:90px;
    background-color: #909399;
    color: #999;
    /*display: flex;*/
    align-items: center;
    padding: 0px;
  }
  .topbar .icon {
    margin-top: 20px;
    font-family: serif;
    font-size: 60px;
    line-height: 60px;
    margin-left: 200px;
  }

  .amireux-link{
    text-decoration: none;
    color: inherit;
  }

  .topbar .nav {
    margin: auto;
    text-align: right;
    margin-left: 800px;
    font-family: sans-serif;

  }
  .topbar .nav .menu-item {
    margin: 0.5em;
    color: #999999;
    font-size: 20px;
  }

  .tail {
    margin: 0px;
    padding: 0px;
  }
  /*.tail > .el-row {*/
  /*  text-align: center;*/
  /*  margin: 4px 0;*/
  /*}*/
  /*.tail .tail-link {*/
  /*  font-size: 18px;*/
  /*  line-height: 1.5;*/
  /*  !*border: 1px solid red;*!*/
  /*  !*background-color: #999999;*!*/
  /*  text-align: center*/
  /*}*/
  /*.tail .tail-link .tail-link-item {*/
  /*  font-size: 16px;*/
  /*  border: 1px solid #999;*/
  /*  border-radius: 4px;*/
  /*  margin: 3px 0;*/
  /*}*/
  /*.tail .tail-qrcode {*/
  /*  text-align: center;*/
  /*  margin: 0 20px;*/
  /*}*/
  /*.tail .tail-qrcode >img{*/
  /*  width: 80px;*/
  /*}*/
</style>
