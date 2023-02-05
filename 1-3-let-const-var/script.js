let age = 30;
age = 31;

// 加载列表
getData;

for (let i = 0; i < 10; i++) {
  let groupedEvent = group();
  addMarker(groupedEvent);
}

function addMarker(groupedEvent) {
  // 获取杆塔列表进行打点
  // 打点
  // callback
  // 选中当前行
  // this.$store.commit('selectedRow',groupedEvent)
  // this.$store.commit('setFootCardFlag',true)
}
// 中屏卡片
function group(event) {
  let obj = { ...event };
  obj.groupId = obj.id;
  obj.eventList.push(event);
  obj.eventCount = 1;
  return obj;
}

/**
 * 雷电预警影响线路列表
 * 雷电预警信息 线路 影响的杆塔列表
 */

let obj = {
  id: 1,
  lineId: 2,
  towerList: [{ id: 1 }, { id: 2 }],
};

let groupedEvent = group(obj);
