<template>
  <div>
    <header class="home-title">
      <div class="homeTitle">
        <i class="el-icon-arrow-left" @click="back"></i>
        <label>OOAD-讨论课</label>
        <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-plus"></i>
            </span>
          <el-dropdown-menu class="el-dropDown" slot="dropdown">
            <el-dropdown-item command="per">
              <i class="el-icon-menu"></i>
              个人页
            </el-dropdown-item>
            <el-dropdown-item command="course">
              <i class="el-icon-star-on"></i>
              讨论课
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <div class="divHeight"></div>

    <div>
      <img src="../../../assets/2.jpg" style="border-radius: 50px"/>
    </div>

    <div class="intro"
         style="height: 50px; background-color: #F0F0F0; display: block">
      <label style="text-align: left; line-height: 50px">
        轮次：
      </label>
      <label style="text-align: center">
        第二轮
      </label>
    </div>

    <div class="intro"
         style="height: 50px; background-color: #fff; display: block">
      <label style="text-align: left; line-height: 50px">
        主题：
      </label>
      <label style="text-align: center">
        业务流程分析
      </label>
    </div>

    <div class="intro"
         style="height: 50px; background-color: #F0F0F0; display: block">
      <label style="text-align: left; line-height: 50px">
        课次序号：
      </label>
      <label style="text-align: center">
        第1次
      </label>
    </div>

    <div class="intro"
         style="height: 50px; background-color: #fff; display: block">
      <label style="text-align: left; line-height: 50px">
        报名情况：
      </label>
      <label style="text-align: center">
        2016 -（1）第3组
      </label>
      <el-button size="small" icon="el-icon-edit" @click="correct"
      style="background-color: #66CCCC">修改</el-button>
    </div>

    <div class="intro1">
      <label style=" line-height: 50px">
        PPT:
      </label>
      <label style="text-align: center;color: red">
        未提交
      </label>
    </div>

    <div class="intro"
         style="text-align: center;height: 50px; background-color: #fff; display: block">
      <label style="line-height: 50px">
        书面报告:
      </label>
      <label style="text-align: center;color: red">
        未提交
      </label>
    </div>
    <el-upload
      class="grade"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <div class="grade">
        <a >PPT提交</a>
      </div>
    </el-upload>

    <el-upload
      class="grade"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <div class="grade">
        <a >书面报告提交</a>
      </div>
    </el-upload>
  </div>
</template>

<script>
    export default {
        name: "ChangeSign",
      methods:{
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        correct(){
          this.$router.push({path:'/Courses/BeforeSeminar/ChangeSign2'});
        }
      }
    }
</script>

<style scoped>
  .homeTitle{
    width: 100%;
    line-height: 70px;
    display: block;
    background-color: #CCFF99;
    border-radius: 5px;
  }

  .el-icon-arrow-left{
    transform: translateX(-380%);
  }

  .homeTitle label{
    font-style: normal;
    font-size: 25px;
  }

  .el-icon-plus{
    font-size: 25px;
    color: grey;
    font-weight: bold;
    transform: translateX(250%);
  }
  .el-dropDown{
    transform: translateX(70%);
  }

  .divHeight{
    display: block;
    color: #fff;
    height: 20px;
  }

  .grade{
    margin:20px 10px 15px 10px;
    border:1px solid #66CCCC;
    border-radius:25px;
  }

  .grade a{
    display: block;
    width: 100%;
    text-align: center;
    line-height: 50px;
    color: #fff;
    background-color: #66CCCC;
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 3px;
    border-radius: 25px;
  }

  .intro1{
    text-align: center;
    height: 50px;
    background-color: #F0F0F0;
    display: block;
    margin: 20px 0 10px 0;
  }
</style>
