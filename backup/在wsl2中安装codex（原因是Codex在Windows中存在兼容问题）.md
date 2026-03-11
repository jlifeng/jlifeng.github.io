# Node.js LTS 版本安装指南（Ubuntu/Debian）

## 安装步骤
```bash
# 添加 Node.js LTS 源并安装
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt-get install -y nodejs
```

## 验证安装
```bash
# 检查 Node.js 和 npm 版本
node --version
npm --version
```

# OpenAI Codex 安装指南

## 安装步骤
```bash
# 全局安装 Codex
npm i -g @openai/codex

# 创建配置目录
mkdir -p ~/.codex
```

## 配置说明
1. 先在 Windows 系统完成安装并登录授权
2. 将 Windows 用户目录下的 `.codex` 文件夹复制到 Linux 系统的 `/root/.codex` 目录（覆盖原有文件）

## 使用验证
```bash
# 检查版本
codex --version

# 在项目中使用
cd your-project
codex
```

# 辅助工具

## CC Switch
![CC Switch 界面截图](https://i-blog.csdnimg.cn/direct/badff775cba14797bc80dfb6b9aa7aec.png)

## WSL 管理工具
推荐使用 [wsl-dashboard](https://github.com/owu/wsl-dashboard)  
![wsl-dashboard 界面截图](https://i-blog.csdnimg.cn/direct/913051c70be94cb693c4df9cdf53d736.png)# 下载并安装 Node.js LTS 版本（Ubuntu/Debian）

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -

sudo apt-get install -y nodejs
```

5.2 验证安装

```bash
node --version

npm --version
```

6. OpenAI Codex 安装
6.1 安装 Codex

npm i -g @openai/codex

6.2 创建配置目录

mkdir -p ~/.codex

6.3 首先在Windows中先安装好，然后进行登录授权，最后将Windows下的用户目录下的.codex目录直接copy到linux Ubuntu root目录下的.codex，直接覆盖
# 验证安装

codex --version

# 进入项目目录使用

cd your-project

codex

# CC Switch
![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/badff775cba14797bc80dfb6b9aa7aec.png)

## wsl管理工具
[wsl-dashboard](https://github.com/owu/wsl-dashboard)

![在这里插入图片描述](https://i-blog.csdnimg.cn/direct/913051c70be94cb693c4df9cdf53d736.png)
