var obj = JSON.parse($response.body);
 obj= {
 "code": 0,
 "msg": "OK",
 "result": {
   "SPEED_VIP_KM4":{
  "resourceld": "",
  "residualSecond": "0",
  "rightsType":"SPEED_VIP_KM4",
  "level":"0",
  "description":null,
  "beginTime":"2022-06-23",
  "endTime":"2029-06-23",
  "userBindDeviceList":[],
  "deviceOverflow":"0",
  "status":"2",
  "overdueSecond":"0"
 },
  "RELIABLE_VIP_KM4":{
  "resourceld": "",
  "residualSecond": "0",
  "rightsType":"SPEED_VIP_KM1",
  "level":"0",
  "description":null,
  "beginTime":"2022-06-23",
  "endTime":"2029-06-23",
  "userBindDeviceList":[],
  "deviceOverflow":"0",
  "status":"2",
  "overdueSecond":"0"
 },
  "RELIBALE_VIP_KM1":{
  "resourceld": "",
  "residualSecond": "0",
  "rightsType":"SPEED_VIP_KM1",
  "level":"0",
  "description":null,
  "beginTime":"2022-06-23",
  "endTime":"2029-06-23",
  "userBindDeviceList":[],
  "deviceOverflow":"0",
  "status":"2",
  "overdueSecond":"0"
 }
}
};
$done({body: JSON.stringify(obj)});
//
