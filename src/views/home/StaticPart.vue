<template>
    <div class="position">
      <span class="iconfont position__icon">&#xe60e;</span>
      北京理工大学国防科技园2号楼10层
      <span class="iconfont position_notice">&#xe628;</span>
    </div>
    <div class="search">
        <span class="iconfont ">&#xe67a;</span>
        <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img
          class="banner__img"
          src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        />
    </div>
     <div class="icons">
        <div class="icons__item" v-for="item in iconList" :key="item.desc">
          <img
            class="icons__item__img"
            :src="item.img"
          />
          <p class="icons__item__desc">{{item.desc}}</p>
        </div>
      </div>
      <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      {
        img: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '蛋糕'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        desc: '红包套餐'
      },
      {
        img: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '家居时尚'
      }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
.warpper{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;
  // background: cadetblue;
}
.icons{
  display: flex;
   flex-wrap: wrap;
  margin-top: .16rem;
  &__item{
    width: 20%;
    &__img{
      display:block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: #333;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: #F1F1F1;
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.search{
  margin-bottom: .12rem;
  line-height: 0.32rem;
  background: #F5F5F5;
  border-radius: 16px;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}
.position{
  position: relative;
  padding: .16rem .24rem .16rem 0;
  // padding: 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: #333;
}
</style>
