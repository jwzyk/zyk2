# 景德镇中国陶瓷博物馆网站 - Vercel部署指南

## 项目概述
这是一个基于Next.js 16开发的景德镇中国陶瓷博物馆网站，使用Tailwind CSS 4进行样式设计，采用TypeScript开发。

## 部署到Vercel的要求

### 必须包含的文件和目录

| 文件/目录 | 说明 |
|----------|------|
| `app/` | 包含所有页面和路由组件 |
| `public/` | 包含静态资源和图片 |
| `next.config.ts` | Next.js配置文件 |
| `package.json` | 项目依赖和脚本配置 |
| `tsconfig.json` | TypeScript配置文件 |
| `postcss.config.mjs` | PostCSS配置（用于Tailwind CSS） |
| `eslint.config.mjs` | ESLint配置文件 |
| `README.md` | 项目说明文件 |

### 可以忽略的文件和目录

| 文件/目录 | 说明 |
|----------|------|
| `.next/` | 开发和构建生成的目录，Vercel会重新构建 |
| `node_modules/` | 依赖包目录，Vercel会重新安装 |
| `tp/` | 原始图片目录，图片已复制到`public/` |
| `jdztc/` | 空目录或其他项目，与当前项目无关 |

## 部署步骤

### 1. 准备Git仓库

确保项目已经初始化为Git仓库，并添加了合适的`.gitignore`文件。如果还没有，可以创建一个：

```bash
git init
touch .gitignore
```

在`.gitignore`中添加以下内容：

```
# Dependencies
node_modules/

# Build outputs
.next/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Testing
coverage/
*.lcov
.nyc_output

# Misc
.turbo/
```

### 2. 上传到Git仓库

将项目上传到GitHub、GitLab或Bitbucket等Git仓库：

```bash
git add .
git commit -m "Initial commit"
git remote add origin <your-git-repository-url>
git push -u origin main
```

### 3. 部署到Vercel

1. 登录Vercel控制台：https://vercel.com/dashboard
2. 点击"Add New" -> "Project"
3. 连接到你的Git仓库
4. 配置项目设置：
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）
5. 点击"Deploy"

### 4. 配置环境变量（如果需要）

如果项目使用了环境变量，可以在Vercel项目设置中添加：

1. 进入项目设置
2. 点击"Environment Variables"
3. 添加所需的环境变量
4. 重新部署项目

## 部署后访问

部署成功后，Vercel会生成一个URL，例如：`https://your-project.vercel.app`

你可以通过这个URL访问部署后的网站。

## 自定义域名（可选）

如果需要使用自定义域名，可以在Vercel项目设置中配置：

1. 进入项目设置
2. 点击"Domains"
3. 添加你的自定义域名
4. 按照提示配置DNS记录

## 持续部署

当你向Git仓库推送新的代码时，Vercel会自动触发新的部署，实现持续部署。

## 常见问题

### 1. 部署失败，提示缺少依赖

确保`package.json`中包含了所有必要的依赖，并且版本正确。

### 2. 图片不显示

确保图片存放在`public/`目录下，并且在代码中使用正确的路径引用。

### 3. 样式不生效

确保`postcss.config.mjs`和`tailwind.config.js`（如果有的话）配置正确。

## 技术栈

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Vercel

## 联系方式

如有部署问题，可以联系Vercel支持或查看Next.js官方文档：
- Vercel支持：https://vercel.com/support
- Next.js文档：https://nextjs.org/docs
