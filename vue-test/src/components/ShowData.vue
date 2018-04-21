<template>
  <div class="whole">
    <h1 class="title">传感器数据</h1>
    <p class="tableDataCss"><b>实时数据</b></p>
    <el-table class="tableCss"
              :data="tableNowData"
              border
    >
      <el-table-column  width="300px" align="center"
        prop="time"
        label="时间"
      >
      </el-table-column>
      <el-table-column align="center"
        prop="tempture"
        label="温度   ℃"
      >
      </el-table-column>
      <el-table-column align="center"
        prop="ax"
        label="x轴加速度">
      </el-table-column>
      <el-table-column align="center"
        prop="ay"
        label="y轴加速度">
      </el-table-column>
      <el-table-column align="center"
        prop="az"
        label="z轴加速度">
      </el-table-column>
      <el-table-column align="center"
        prop="wx"
        label="x角速度">
      </el-table-column>
      <el-table-column align="center"
        prop="wy"
        label="y角速度">
      </el-table-column>
      <el-table-column align="center"
        prop="wz"
        label="z角速度">
      </el-table-column>
      <el-table-column align="center"
        prop="irValue"
        label="ir_value">
      </el-table-column>
      <el-table-column align="center"
        prop="redValue"
        label="red_value">
      </el-table-column>
    </el-table>

    <p class="tableDataCss"><b>历史数据</b></p>
    <el-table class="tableCss"
              :data="tableOldData"
              border
    >
      <el-table-column width="300px" align="center"
        prop="time"
        label="时间"
      >
      </el-table-column>
      <el-table-column align="center"
        prop="tempture"
        label="温度 ℃"
      >
      </el-table-column>
      <el-table-column align="center"
        prop="ax"
        label="x轴加速度">
      </el-table-column>
      <el-table-column align="center"
        prop="ay"
        label="y轴加速度">
      </el-table-column>
      <el-table-column align="center"
        prop="az"
        label="z轴加速度">
      </el-table-column>
      <el-table-column
        prop="wx"
        label="x角速度">
      </el-table-column>
      <el-table-column align="center"
        prop="wy"
        label="y角速度">
      </el-table-column>
      <el-table-column align="center"
        prop="wz"
        label="z角速度">
      </el-table-column>
      <el-table-column align="center"
        prop="irValue"
        label="ir_value">
      </el-table-column>
      <el-table-column align="center"
        prop="redValue"
        label="red_value">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    name: "show-data",
    data() {
      return {
        tableNowData: [],
        tableOldData: [],
      }
    },
    methods: {
      getOldData() {
        return this.$axios.get('/data/getData')
          .then(function (res) {

            this.tableOldData = res.data;
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          })
      },
      getNowData() {
        return this.$axios.get('/data/getNow')
          .then(function (res) {
            this.tableNowData = res.data;

          }.bind(this))
          .catch(function (error) {
            console.log(error);
          })
      },
      doTask () {
        setInterval(()=>{
          console.log("1");
          this.$axios.all([this.getNowData() , this.getOldData()])
            .then(this.$axios.spread(function () {

              console.log("success");
            }))

        },500)
      }
    },
    created: function () {
      this.doTask()
    }
  }
</script>

<style scoped>

  .title {
    text-align: center;
    margin-top: 100px;
    letter-spacing: 60px;
  }

  .tableDataCss {
    text-align: center;
    color: gray;
    font-size: 22px;
    margin-top: 40px;
  }

  .tableCss {
    width: 80%;
    margin-left: 10%;
    margin-top: 10px;
    text-align: center;
  }

  tr {
    text-align: center;
  }



</style>
