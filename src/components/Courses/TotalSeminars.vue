<template>
    <div>
      <header class="home-title">
        <div class="homeTitle">
          <i class="el-icon-arrow-left" @click="back"></i>
          <label>OOAD 2016(1)</label>
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

      <el-input
        placeholder="输入关键字搜索讨论课"
        v-model="filterText"
        @change="filterChange">
      </el-input>
      <div class="divHeight"></div>

      <el-tree
        class="filter-tree"
        :data="data2"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree2">
      </el-tree>

    </div>
</template>

<script>
    export default {
        name: "TotalSeminars",
      watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        }
      },

      methods: {
        filterNode(value, data) {
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
        },
        filterChange:function () {
          // 这里每当输入的数据有变化就触发原生的过滤节点这个函数
          this.$refs.tree2.filter(app.filterText);
        },
        back(){
          this.$router.push({path:'/Courses/CoursePage'});
        }
      },

      data() {
        return {
          filterText: '',
          data2: [{
            id: 1,
            label: '讨论课信息',
            children: [{
              id: 4,
              label: '第一轮',
              children: [{
                id: 9,
                label: '业务流程分析'
              }, {
                id: 10,
                label: '领域模型分析'
              }]
            },{
                id: 11,
                label: '第二轮',
                children: [{
                  id: 9,
                  label: '代码检查'
                }, {
                  id: 10,
                  label: '对象模型设计'
                }]
            }]
          }, {
            id: 2,
            label: '已报名的讨论课',
            children: [{
              id: 5,
              label: '第一轮',
              children:[{
                id: 12,
                label: '业务流程分析'
              },{
                id: 13,
                label: '领域模型分析'
              }]
            }, {
              id: 6,
              label: '第二轮',
              children:[{
                id: 14,
                label: '代码检查'
              },{
                id: 15,
                label: '对象模型设计'
              }]
            }]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
        };
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
    height: 50px;
  }

  .filter-tree{
    line-height: 90px;
    background-color: #F0F0F0;
    border-radius: 5px;
  }

</style>
