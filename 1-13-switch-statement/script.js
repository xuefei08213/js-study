const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('定计划');
    console.log('参加会议');
    break;
  case 'tuesday':
    console.log('准备视频');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('写代码');
    break;
  case 'friday':
    console.log('录视频');
    break;
  case 'saturday':
  case 'sunday':
    console.log('休息休息');
    break;
  default:
    console.log('输入的日期不对');
}

if (day === 'monday') {
  console.log('定计划');
  console.log('参加会议');
} else if (day === 'tuesday') {
  console.log('准备视频');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('写代码');
} else if (day === 'friday') {
  console.log('录视频');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('休息休息');
} else {
  console.log('输入的日期不对');
}
