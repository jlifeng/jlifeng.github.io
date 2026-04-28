
### 备份原配置文件  
在修改前需备份原文件，防止配置错误导致系统异常：  
```bash
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
```

### 编辑源文件  
使用文本编辑器（如`vi`或`nano`）修改源文件：  
```bash
sudo vi /etc/apt/sources.list
```

### 国内镜像源配置示例  
根据需求选择以下任意一种镜像源，替换文件内容后保存。  

**清华源（Tuna）**  
```plaintext
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
```

**阿里源（Aliyun）**  
```plaintext
deb http://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
```

**中科大源（USTC）**  
```plaintext
deb https://mirrors.ustc.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
```

**网易源（163）**  
```plaintext
deb http://mirrors.163.com/ubuntu/ jammy main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ jammy-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ jammy-backports main restricted universe multiverse
```

### 更新软件源  
修改完成后运行以下命令使更改生效：  
```bash
sudo apt update
```

### 注意事项  
- **版本代号**：确保使用`jammy`（Ubuntu 22.04），其他版本需替换对应代号（如20.04为`focal`）。  
- **网络环境**：虚拟机需检查网络模式（如VMware的NAT模式），物理机确保网络连通。  
- **协议选择**：部分镜像源支持`http`和`https`，推荐优先使用`https`协议。