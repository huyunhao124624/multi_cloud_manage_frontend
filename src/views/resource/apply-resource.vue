<template>
  <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="80px" size="medium"
    @submit.native.prevent>
    <div class="static-content-item">
      <b>当前资源池云厂商为：{{cloudProviderName}}</b>
    </div>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="资源类型" class="label-right-align">
          <el-select v-model="formData.resourceTypeCode" class="full-width-input" clearable>
            <el-option v-for="(item, index) in resourceTypeOptions" :key="index" :label="item.resourceTypeName"
              :value="item.resourceTypeCode" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="实例规格" class="label-right-align">
          <el-select v-model="formData.instanceType" class="full-width-input" clearable>
            <el-option v-for="(item, index) in resourceSpecsOptions" :key="index" :label="item.instanceType+' '+item.cpuSize+'core '+item.memorySize+'g'"
              :value="item.instanceType" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="虚拟机镜像" class="label-right-align">
          <el-select v-model="formData.amiOutId" class="full-width-input" clearable>
            <el-option v-for="(item, index) in amiOutIdOptions" :key="index" :label="item.amiName"
              :value="item.amiOutId" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="grid-cell">
        <el-form-item label="数据盘大小(GB)" class="label-right-align">
          <el-input v-model="formData.diskSize" :autosize="{ minRows: 1, maxRows: 1}" 
            type="textarea" placeholder="Please input" 
            class="full-wdth-input"/>
        </el-form-item>
      </el-col>
    </el-row>
    
    <div class="static-content-item">
      <el-button @click="clickApplyResource">申请资源</el-button>
    </div>
  </el-form>
  
</template>

<script>
import {getInitApplyResourcePageObject,applyResource} from '@/api/resource'
  export default {
    name: 'ApplyResource',
    components: {},
    props: {},
    data() {
      return {
        cloudProviderName:'亚马逊云',
        formData: {
          cloudProviderCode:'',
          
          resourceTypeCode: '',
          resourceTypeName:'',
          instanceType: undefined,
          amiOutId: undefined,
          cloudProviderCode: '',
          cpuNum: undefined,
          memorySize: undefined,
          diskSize: undefined,
        },
        rules: {},
        resourceTypeOptions: [],
        resourceSpecsOptions: [],
        amiOutIdOptions: [],
      }
    },
    computed: {},
    watch: {},
    created() {
        getInitApplyResourcePageObject().then(response=>{
            this.resourceTypeOptions = response.data.resourceTypeList
            this.resourceSpecsOptions = response.data.resourceSpecsList
            this.amiOutIdOptions = response.data.imageList
            this.cloudProviderName = response.data.cloudProviderName
            this.formData.cloudProviderCode = response.data.cloudProviderCode
        })
    },
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['vForm'].validate(valid => {
          if (!valid) return
          //TODO: 提交表单
        })
      },
      resetForm() {
        this.$refs['vForm'].resetFields()
      },clickApplyResource(){
        applyResource(this.formData).then(response=>{
          this.$router.push('/resource/get-resources')
        })
      }
    }
  }
  
</script>

<style lang="scss">
  .el-input-number.full-width-input,
  .el-cascader.full-width-input {
    width: 100% !important;
  }
  
  .el-form-item--medium {
    .el-radio {
      line-height: 36px !important;
    }
    
    .el-rate {
      margin-top: 8px;
    }
  }
  
  .el-form-item--small {
    .el-radio {
      line-height: 32px !important;
    }
    
    .el-rate {
      margin-top: 6px;
    }
  }
  
  .el-form-item--mini {
    .el-radio {
      line-height: 28px !important;
    }
    
    .el-rate {
      margin-top: 4px;
    }
  }
  
  .clear-fix:before,
  .clear-fix:after {
    display: table;
    content: "";
  }
  
  .clear-fix:after {
    clear: both;
  }
  
  .float-right {
    float: right;
  }
  
</style>

<style lang="scss" scoped>
  div.table-container {
    table.table-layout {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;

      td.table-cell {
        display: table-cell;
        height: 36px;
        border: 1px solid #e1e2e3;
      }
    }
  }
  
  div.tab-container {}
  
  .label-left-align ::v-deep .el-form-item__label {
    text-align: left;
  }
  
  .label-center-align ::v-deep .el-form-item__label {
    text-align: center;
  }
  
  .label-right-align ::v-deep .el-form-item__label {
    text-align: right;
  }
  
  .custom-label {}
  
  .static-content-item {
    min-height: 20px;
    display: flex;
    align-items: center;

    ::v-deep .el-divider--horizontal {
      margin: 0;
    }
  }
  
</style>