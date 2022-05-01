<template>
  
  <div class="chart-container">
    <el-select v-model="departmentId" placeholder="请选择">
        <el-option
        v-for="item in departmentList"
        :key="item.departmentId"
        :label="item.departmentName"
        :value="item.departmentId"
        
        >
        </el-option>
    </el-select>
    <chart height="100%" width="100%" :departmentId="departmentId" :key="departmentId"/>
  </div>
</template>

<script>
import Chart from '@/components/Charts/FeeUsageChart'
import {getFeeAnalyseDepartmentList} from '@/api/fee'

export default {
  name: 'FeeUsage',
  components: { Chart },
  created(){
      getFeeAnalyseDepartmentList().then(response=>{
          this.departmentList = response.data
      })
  },
  data() {
      return {
        departmentList: [],
        value: '',
        departmentId: undefined,
      }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

