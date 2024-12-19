<template>
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </template>
  <script>
  import * as echarts from 'echarts';
  export default {
    name: 'Chart',
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        const chart = echarts.init(this.$refs.chart);
        const option = {
          title: {
            text: '上香天数榜',
            textStyle: {
              color: '#fff' // 设置标题文字颜色为白色
            }
          },
          tooltip: {
            textStyle: {
              color: '#fff' // 设置提示框文字颜色为白色
            }
          },
          xAxis: {
            axisLabel: {
              textStyle: {
                color: '#fff' // 设置x轴标签文字颜色为白色
              }
            },
            data: ['其妹-张燕', '其子-孙散', '其女-孙离', '其孙-孙损', '亲戚-李丽']
          },
          yAxis: {
            axisLabel: {
              textStyle: {
                color: '#fff' // 设置y轴标签文字颜色为白色
              }
            }
          },
          series: [{
            name: '天',
            type: 'bar',
            data: [743, 323, 121, 68, 33],
            label: {
              show: true,
              textStyle: {
                color: '#fff' // 设置柱状图数据标签文字颜色为白色
              }
            }
          }]
        };
        chart.setOption(option);
      }
    }
  };
  </script>
  <style scoped>
  </style>