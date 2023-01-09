# online-test-system

## 介绍

> 本系统是一个在线考试系统，主要功能有：考试、试卷管理、题库管理、用户管理、权限管理等。管理员和教师均可以发布试卷，学生可以参加考试。系统采用前后端分离的开发模式。

## 功能点

### 学生

- 登录
- 注册
- 查看考试
- 查看分数
- 参加考试（包括了首次考试以及二次，三次考试等，简单的防作弊设置）

### 管理员，教师

- 学生信息管理
- 学生信息上传（导入 Excel, 学生信息）
- 试题库管理（导入 Excel，题库信息）
- 单选题管理
- 多选题管理
- 判断题管理
- 成绩管理
- 试卷生成
- 试卷管理
- 查询考生密码
- 教师管理

### 兼容性

- PC
- 手机端

### 其他功能

- 保存试卷（默认 30s，二次考试进入后会自动选中）
- 超时考试（自动判定 0 分）
- 分配试卷（管理员可以分配试卷给学生，可以班级，支持全选）
- 随机抽题（从指定题库中抽出所需试题,每套都不同）

## 技术栈

### 前端

- Vue3.2
- TypeScript
- Pinia
- Antd
- Vitest
- Vite
- Vue-Router
- Eslint
- Prettier
- Husky
- CommitLint

### 后端

- SpringBoot
- MyBatisPlus
- Mysql
- Redistemplate
- Lombok
- Easyexcel
- Quartz

## 部署

### 前端

#### 1. git clone

```bash
    git clone https://github.com/kongmingLatern/online-test-system.git
```

#### 2. 安装 node

```bash
    https://nodejs.org/en/
```

#### 3. 安装依赖

```bash
    npm i -g pnpm
    pnpm install(Node版本需要>= 14.6.0)
```

#### 4. 启动服务

```bash
    pnpm run dev
```

#### 5. 打包

```bash
    pnpm run build
```

#### 6. 代码检查

```bash
    pnpm run lint
```

#### 7. 执行测试

```bash
    pnpm run test
```

#### 8. 生成测试覆盖率

```bash
    pnpm run coverage
```

### 后端

#### 数据库

> online_test_syst.sql

#### 修改 application.yml 文件

```bash
修改spring.datasource.druid.url&username&password为自己的数据库配置

spring.redis为自己的redis配置
```

运行 OnlineTestSystemApplication
