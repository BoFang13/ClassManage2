<template>
  <div>
    <div class="activate-form">
      <div class="inp-title">
        <i class="el-icon-arrow-left" @click="back"></i>
        <label >密码设置</label>
      </div>

      <div class="inp-pw">
        <label >输入密码：</label>
        <input type="password" placeholder="">
      </div>

      <div class="inp-pw">
        <label>确认密码：</label>
        <input type="password" placeholder="">
      </div>

      <div class="inp-pw">
        <label>填写邮箱：</label>
        <input type="email" placeholder="">
      </div>

      <div class="inp-pw">
        <label>验证码：</label>
        <input type="number" placeholder="">
      </div>

      <div class="inp-check">
        <button id="check">发送验证码</button>
      </div>

      <div class="inp-sub">
        <a @click="toHomePage">确认提交</a>
      </div>

      <div class="inp-info">
        <a>密码可包含数字、字母、下划线，长度不少于6位</a>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "activate",
        methods:{
          back(){
            this.$router.push({path:'/'})
          },
          toHomePage(){
            this.$router.push({path:'/HomePage'})
          }
        }
    }
</script>

<style scoped>
  .inp-title{
    line-height: 70px;
    display: block;
    background-color: #CCFF99;
    margin: 0 0px 80px 0;
    border-radius: 5px;
  }

  .inp-title label{
    font-size: 25px;
  }
  .inp-title i{
    transform: translateX(-600%);

  }

  .inp-pw{
    margin:0 30px 20px 30px;
    border:1px solid #66CCCC;
    border-radius:25px;
  }

  .inp-sub{
    margin: 90px 30px 20px 30px;
    border: 1px solid #66CCCC;
    border-radius: 25px;
  }

  .inp-pw label{
    width:5em;
    white-space: nowrap;
    text-align: left;
    display:inline-block;
    color: grey;
  }

  .inp-pw input{
    line-height:40px;
    color: darkslategrey;
    background-color:transparent;
    border:none;
    outline: none;
  }

  .inp-sub a{
    display: block;
    width: 100%;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background-color: #66CCCC;
    font-size: 17px;
    letter-spacing: 3px;
    border-radius: 25px;
  }

  .inp-check button{
    text-decoration: none;
    background: #CCFF99;
    border-radius: 4px;
    color: black;
    font-size: 15px;
    transform: translateX(120%);
  }

  .inp-info a{
    color: red;
    position: absolute;
    bottom: 0;
    font-style: italic;
    font-size: 12px;
    white-space: nowrap;
    transform: translateX(-50%);
  }
</style>
