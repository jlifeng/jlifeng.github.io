> 个人知识库：[https://jlifeng.github.io/](https://jlifeng.github.io/)
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

[https://github.com/farion1231/cc-switch](https://github.com/farion1231/cc-switch)
![CC Switch 界面截图](https://i-blog.csdnimg.cn/direct/badff775cba14797bc80dfb6b9aa7aec.png)

## WSL 管理工具
推荐使用 [wsl-dashboard](https://github.com/owu/wsl-dashboard)  
![wsl-dashboard 界面截图](https://i-blog.csdnimg.cn/direct/913051c70be94cb693c4df9cdf53d736.png)