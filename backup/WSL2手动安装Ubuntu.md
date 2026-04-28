

### **WSL2手动安装Ubuntu完整指南：更灵活、更可控的Linux环境部署**

在Windows系统上搭建Linux开发环境，WSL2（Windows Subsystem for Linux 2）已经成为了开发者的首选方案。相比通过微软商城的自动安装方式，手动安装提供了更多的灵活性和控制权，特别是对于希望自定义安装位置、选择特定Ubuntu版本的用户来说，手动安装是更推荐的方式。

#### **为什么选择手动安装？**

手动安装WSL2上的Ubuntu系统相比商城安装有几个显著优势：

1. **自定义安装位置**：商城安装的系统默认存储在C盘，无法更改安装路径，而手动安装可以指定任意磁盘位置
2. **版本选择自由**：可以下载特定版本的Ubuntu镜像，包括最新的LTS版本
3. **镜像类型多样**：可以选择适合自己需求的Ubuntu变体，从轻量级到完整版
4. **更好的磁盘管理**：手动安装的系统更容易进行备份、迁移和磁盘空间管理

#### **Ubuntu镜像类型选择**

Ubuntu官方提供了多种版本的镜像，手动安装时可以根据需求选择：

- **Ubuntu Desktop**：桌面版，包含GUI界面和常用软件，体积约3GB
- **Ubuntu Server**：服务器版，默认不带GUI，体积约1GB
- **Ubuntu Cloud**：云版，相比服务器版更精简，体积约450MB
- **Ubuntu Core**：为树莓派等嵌入式设备打包的特殊版本，最轻量，约300MB

对于WSL2环境，**Ubuntu Cloud版本是最佳选择**，它提供了完整的Linux环境而不会占用过多磁盘空间，特别适合命令行开发工作。

#### **手动安装详细步骤**

**第一步：获取Ubuntu Cloud镜像**

前往[Ubuntu Cloud Images官方镜像站](https://cloud-images.ubuntu.com/)，下载适合的镜像文件。以Ubuntu 20.10 LTS为例，在镜像站中以`wsl`为关键字搜索，找到对应AMD或ARM平台的镜像文件进行下载。

**第二步：使用wsl命令导入系统**

打开PowerShell（管理员身份），执行以下命令：

```powershell
wsl --import {自定义名称} "{安装位置路径}" "{镜像文件路径}"
```

例如：
```powershell
wsl --import Ubuntu-20.10 "D:\WSL\Ubuntu" "C:\Downloads\ubuntu-20.10-cloudimg-amd64-wsl.rootfs.tar.gz"
```

**重要提示**：路径中的双引号不要省略，确保路径中包含空格时也能正确解析。

#### **安装后的系统管理**

手动安装的系统可以通过标准的wsl命令进行管理：

- `wsl --list` 或 `wsl -l`：列出发行版
- `wsl --list --verbose` 或 `wsl -l -v`：列出发行版及其版本信息
- `wsl --set-default-version 2`：设置默认WSL版本为2
- `wsl --shutdown`：立即终止所有正在运行的发行版

#### **文件系统访问**

WSL2的文件系统访问非常便捷：

- 从Windows文件管理器可以直接访问`\\wsl$\Ubuntu`（将"Ubuntu"替换为你的发行版名称）
- 在WSL2终端中，可以使用`explorer.exe .`命令直接打开当前目录的Windows文件管理器
- Windows磁盘在WSL中挂载为`/mnt/c`、`/mnt/d`等，但建议将文件复制到WSL目录下操作以获得更好的性能

#### **磁盘空间管理技巧**

随着使用时间增长，WSL2系统可能会占用较多磁盘空间，以下是清理方法：

**在Linux内部清理：**
```bash
sudo fstrim /
```

**Windows专业版压缩虚拟硬盘：**
```powershell
wsl --shutdown
optimize-vhd -Path "{安装位置\ext4.vhdx}" -Mode full
```

**Windows家庭版压缩虚拟硬盘：**
```powershell
wsl --shutdown
diskpart
# 在新窗口中执行
select vdisk file="{安装位置\ext4.vhdx}"
attach vdisk readonly
compact vdisk
detach vdisk
exit
```

#### **系统迁移与备份**

手动安装的系统迁移非常方便：

```powershell
# 导出系统
wsl --export <发行版名称> <备份文件路径>

# 导入系统到新位置
wsl --import <新发行版名称> <新安装位置> <备份文件路径>
```

这种方式比使用LxRunOffline工具更简单直接，且不会影响系统的更新管理。

#### **总结**

手动安装WSL2上的Ubuntu系统虽然比商城安装多几个步骤，但带来的好处是显著的：完全控制安装位置、自由选择Ubuntu版本和变体、更灵活的磁盘管理和系统迁移能力。对于需要在多台设备间同步开发环境、或者希望将Linux系统安装在非系统盘的开发者来说，手动安装是必不可少的选择。

通过本文的步骤，你可以轻松地在Windows系统上搭建一个完全自定义的Linux开发环境，享受WSL2带来的高性能和便利性，同时保持对系统的完全控制。

## 使用wsl管理工具，直接安装

[一款现代、高性能且轻量级的 WSL (Windows Subsystem for Linux) 实例管理面板。基于 Rust 和 Slint 构建，提供高级的原生体验。

](https://github.com/owu/wsl-dashboard) 

<img width="1200" height="900" alt="Image" src="https://github.com/user-attachments/assets/d03a98a9-9ba8-4fe4-b2ec-1b15b5472254" />
