<template>
    <el-main class="content">
      <el-row>
        <el-col :span="12" :offset="6">
          <el-carousel height="500px" >
            <el-carousel-item v-for="item in advertises" :key="item" >
              <el-image style="margin-bottom: 50px;margin-top: 10px" :src="item"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row class="tech">
        <el-col :span="24">

          <p class="tech-content1">
            &nbsp&nbsp&nbsp&nbspお客様のビジネス目標を達成するために、最新の技術トレンドを把握し、革新的なソリューションを提供します。
          </p>
          <p class="tech-content1">
            &nbsp&nbsp&nbsp&nbspお客様のプロジェクトに対して真摯に取り組み、効率的で高品質な成果をお届けすることに誇りを持っています。
          </p>
          <p class="tech-content1">
            &nbsp&nbsp&nbsp&nbspお客様の成功は私たちの成功です。
          </p>
          <p class="tech-content1">
            &nbsp&nbsp&nbsp&nbspお客様との長期的なパートナーシップを築き、お客様のビジネスを支えるために日々努力しています。
          </p>
          <p class="tech-content1">
            &nbsp&nbsp&nbsp&nbspお客様の課題を解決し、新たな可能性を開拓するお手伝いをさせていただきます。
          </p>
        </el-col>
        <el-col :span="24" style="margin-top: 40px">
          <el-container>
            <el-card v-for="(tech, index) in technologys" :key="index" :body-style="{padding: '0px'}" class="tech-card">
              <el-image :src="tech.url" ></el-image>
              <div class="tech-content-link">
                <el-link :underline="false" style="font-size: 30px;margin-left: 110px"><router-link class="amireux-link" :to="'/' + tech.route">{{tech.name}}</router-link></el-link>
              </div>
            </el-card>
          </el-container>
        </el-col>
        <el-col :span="24">
          <p class="tech-content2">
            コンピュータソフトの開発、販売および開発支援，コンピュータおよびインターネットを利用した業務ネットワークの構築。
          </p>
          <p class="tech-content2">
            および運用支援。
          </p>
          <p class="tech-content2">
            上記にかかるコンサルティングその他付随業務。
          </p>
        </el-col>
      </el-row>
    </el-main>
</template>

<script>
  export default {
    name: 'Home',
    data (){
      return {
        advertises: [
          require('../assets/images/advertisement/home1.png'),
          require('../assets/images/advertisement/home4.png')
        ],
        technologys:[
          {
            route:'research',
            name: '開発事例',
            url: require('../assets/images/Home/品質.jpg')
          },
          {
            route:'research',
            name: '開発基盤',
            url: require('../assets/images/Home/効率.jpg')
          },
          {
            route:'research',
            name: '開発管理',
            url: require('../assets/images/Home/信頼.jpg')
          },
          {
            route:'research',
            name: '協力会社',
            url: require('../assets/images/Home/協力.jpg')
          }
        ],
      }
    }
  }
</script>

<style >
  .content  {
    padding: 0px;
    background-color: #DBE4EE
  }

  .content .tech {
    margin: 40px 100px 25px 100px;
  }
  .content .tech .tech-content1 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 1px;
    margin-right: 10px;
    text-align: center;
  }

  .content .tech .tech-content2 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 1px;
    text-align: center;
    color: deepskyblue;
  }

  .content .tech .tech-card {
    width: 100%;
    padding: 2px;
    height: 100%;
    margin: 0px 1px;
  }

  .content .tech .tech-card .tech-content-link{
    padding: 14px;
  }

</style>
