<template>
<div class="docker" >
    <div class="docker__item active" v-for="item in iconList" :key="item.icon">
      <div class="iconfont " v-html="item.icon" />
      <div class="title">{{item.title}}</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const iconList = [
      { title: '首页', icon: '&#xe64e;' },
      { title: '购物车', icon: '&#xe60f;' },
      { title: '订单', icon: '&#xe610;' },
      { title: '我的', icon: '&#xe640;' }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
.docker{
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid #F1F1F1;
  &__item{
    flex: 1;
    text-align: center;
    .iconfont{
      margin: 0.07rem 0  0.02rem 0;
      font-size: 0.18rem;
  }
  }
  color: #333;
}
</style>
