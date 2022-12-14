# online-test-system

## 介绍

> 本系统是一个在线考试系统，主要功能有：考试、试卷管理、题库管理、用户管理、权限管理等。管理员和教师均可以发布试卷，学生可以参加考试。系统采用前后端分离的开发模式。

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
