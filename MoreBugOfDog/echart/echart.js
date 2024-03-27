// 遵循源仓库的开源协议
// 引入 echarts 库，感谢这个库的开发团队
// 感谢jsdelivr提供的cdn加速服务
/**
 * @version Build.1.alpha.1 
 */

import * as art from "https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js";
// import Cast from '../utils/cast.js'
import cover from './assets/cover.svg'
import icon from './assets/icon.svg'
class echartensions {
  constructor(runtime) {
    this.runtime = runtime
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'echart.extensionName': '啸天犬的canvs图表',
        "echart.docs":"打开拓展教程",
        "echart.example":"绘制示例图表",
      },

      en: {
        'echart.extensionName': "MoreBugOfDog's Canvas Chart",
        
      },
    })
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }

  getInfo() {
    return {
      id: 'echart', // 拓展id
      name: this.formatMessage('echart.extensionName'), // 拓展名
      color1: '#FF8383',
      menuIconURI: icon,
      blockIconURI: icon,
      blocks: [
        {
          // 判断相等（区分大小写）
          opcode: 'docs',
          blockType: 'button',
          text: this.formatMessage('echart.docs'),
          
        },
        {
          // 计算点A到点B的方向
          opcode: 'example',
          blockType: 'command',
          text: this.formatMessage('echart.example'),
          
        },
      
      ],
    }
  }
  
  docs() {
    let a = document.createElement('a');
    a.href = "https://github.com";
    a.rel = "noopener noreferrer";
    a.target = "_blank";
    a.click();
}
example() {
        //初始化echarts实例
        var myChart = echarts.init(document.getElementsByClassName('gandi_stage_stage_1fD7k'));

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        };
  
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}



}



window.tempExt = {
    Extension: echartensions,
    info: {
      name: 'echart.extensionName',
      description: 'echart.description',
      extensionId: 'echart',
      iconURL: icon,
      insetIconURL: cover,
      featured: true,
      disabled: false,
      collaborator: '快速地绘制图表！',
    },
    l10n: {
      'zh-cn': {
        'echart.extensionName': '啸天犬的canvs图表',
        'echart.description': '快速地绘制图表！',
      },
      en: {
        'echart.extensionName': "MoreBugOfDog's Canvas Chart",
        'echart.description': 'Plot charts quickly!',
      },
    },
  }

