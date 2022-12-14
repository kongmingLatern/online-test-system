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
- 学生信息上传（导入 Excel）
- 试题库管理
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

## 技术栈

### 前端

- Vue3.2
- TypeScript
- Pinia
- Antd
- Vitest
- Vite
- Vue-Router

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

#### 1. 安装 node

```bash
    https://nodejs.org/en/
```

#### 2. 安装依赖

```bash
    npm i -g pnpm
    pnpm install(Node版本需要>= 14.6.0)
```

#### 3. 启动服务

```bash
    pnpm run dev
```

#### 4. 打包

```bash
    pnpm run build
```

#### 5. 代码检查

```bash
    pnpm run lint
```

#### 6. 执行测试

```bash
    pnpm run test
```

#### 7. 生成测试覆盖率

```bash
    pnpm run coverage
```

### 后端
