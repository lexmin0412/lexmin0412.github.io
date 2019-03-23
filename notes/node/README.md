# node.js

### 大纲
- node核心api
- 网络编程
- 持久化(数据库操作)：mysql, mongodb, redis
- web框架(koa)
- egg
- nuxt
- 部署(nginx、pm2)

### 特点和应用场景

- 非阻塞I/O
- 

应用场景：
- web应用
- api编写
- 中间层
- 微服务

区别：
- php多线程（同步、高并发时利用线程做多任务处理  优点：充分利用多核CPU性能 缺点：消耗性能大，编程复杂，高并发不如node）
- 计算量大的不适合用node，适合php（会阻塞进程）

与java、python比较
- node开发效率高，适合开发web应用
- java，适合做庞大应用
- python适合数据分析应用

### 运行、调试、模块系统

### 掌握核心api: global、process、fs、buffer、http

### 简版express