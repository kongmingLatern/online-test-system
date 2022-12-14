export const rules = `

参加国家教育考试的考生须遵守以下规则：

一、自觉服从监考员等考试工作人员管理，不得以任何理由妨碍监考员和考试工作人员履行职责，不得扰乱考场、考点的工作秩序。

二、考生凭《准考证》和当次考试规定的其他有效证件，按规定的时间和地点参加考试，应主动配合监考员进行身份验证和对随身物品等实施的必要检查。

三、只能携带2B铅笔、黑色字迹的钢笔或签字笔、直尺、圆规、三角板、无封套橡皮等必需的考试用品（有特殊规定的除外）进入考场，其他任何物品不得带入考场。

四、入场后对号入座，将《准考证》和当次考试规定的其他有效证件放在桌上指定位置以备查验。领到答题卡和试卷后，应在指定位置和规定时间内准确、清楚地填写姓名、准考证号、座位号等试卷识别信息，凡漏填、错填或字迹不清的答卷、答题卡，导致影响评卷结果，责任由考生自负。

五、遇试卷（答题卡）分发错误及试题字迹不清、重印、漏印或缺页等问题，应立即举手报告监考员或请求更换试卷（答题卡）；开考后再行更换的，延误的考试时间不予补偿；涉及试题内容的疑问，不得向监考员询问。`;

// 禁止右侧菜单
export function disableContextMenu() {
  // 禁止鼠标选中
  document.oncontextmenu = new Function('event.returnValue=false') as any;
  document.onselectstart = new Function('event.returnValue=false') as any;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.shiftKey && e.keyCode === 121) {
      e.preventDefault();
      e.stopPropagation();
    } else if (e.key === 'F5') {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}
