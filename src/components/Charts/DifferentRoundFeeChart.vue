<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
import { getDepartmentDifferentRoundFee } from "@/api/fee";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
    departmentId: {
      type: String,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      const xData = (function () {
        const data = [];
        // for (let i = 1; i < 13; i++) {
        //   data.push(i + 'month')
        // }
        data.push("按需收费");
        data.push("1周");
        data.push("15天");
        data.push("1个月");
        data.push("2个月");
        data.push("3个月");
        data.push("半年");
        data.push("1年");
        return data;
      })();

      console.log(this.departmentId);

      

      getDepartmentDifferentRoundFee({
        departmentId: this.departmentId
      }).then((response) => {
        this.chart.setOption({
          backgroundColor: "#344b58",
          title: {
            text: "组内资源不同周期的使用情况",
            x: "20",
            top: "20",
            textStyle: {
              color: "#fff",
              fontSize: "22",
            },
            subtextStyle: {
              color: "#90979c",
              fontSize: "16",
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          grid: {
            left: "5%",
            right: "5%",
            borderWidth: 0,
            top: 150,
            bottom: 95,
            textStyle: {
              color: "#fff",
            },
          },
          legend: {
            x: "5%",
            top: "10%",
            textStyle: {
              color: "#90979c",
            },
            data: ["费用"],
          },
          calculable: true,
          xAxis: [
            {
              type: "category",
              axisLine: {
                lineStyle: {
                  color: "#90979c",
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitArea: {
                show: false,
              },
              axisLabel: {
                interval: 0,
              },
              data: xData,
            },
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#90979c",
                },
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                interval: 0,
              },
              splitArea: {
                show: false,
              },
            },
          ],
          dataZoom: [
            {
              show: true,
              height: 30,
              xAxisIndex: [0],
              bottom: 30,
              start: 10,
              end: 80,
              handleIcon:
                "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
              handleSize: "110%",
              handleStyle: {
                color: "#d3dee5",
              },
              textStyle: {
                color: "#fff",
              },
              borderColor: "#90979c",
            },
            {
              type: "inside",
              show: true,
              height: 15,
              start: 1,
              end: 35,
            },
          ],
          series: [
            {
              name: "费用",
              type: "bar",
              stack: "total",
              barMaxWidth: 35,
              barGap: "10%",
              itemStyle: {
                normal: {
                  color: "rgba(255,144,128,1)",
                  label: {
                    show: true,
                    textStyle: {
                      color: "#fff",
                    },
                    position: "insideTop",
                    formatter(p) {
                      return p.value > 0 ? p.value : "";
                    },
                  },
                },
              },
              // data: [1, 10, 10, 10, 17, 14, 15, 10],
              data: response.data
            },
          ],
        });
      });
    },
  },
};
</script>
