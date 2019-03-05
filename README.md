## ipfs api service

实现了通过api的方式调用ipfs的 add , addJSON , cat , catJSON

## Usage

参考 test.js

## 流程测试

1. 转账EOS买key （新建一个价格0.0001EOS的key类型）
2. 提交收key的email （通过调用submit email 的api） -- 
   可以用： curl -d "username=joetothemoon&mail=343747757@qq.com" -X POST https://ipfs.libra.bet/submitmail
3. 合约记录order，后台自动发货，并修改相关的状态 （这一步是程序主动执行的，不用管）
4. 检查结果一致性，期望是email收到key，合约中order记录状态修改or删除，mysql中key的状态改为已经出售