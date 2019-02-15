# Pub 故障排除

## 发布包时出现“403”错误

运行pub publish时收到以下错误：

```
HTTP error 403: Forbidden
...
You aren't an uploader for package '<foo>'
```
如果您的某个帐户被授予发布包的权限，但发布客户端向您注册了另一个帐户，则可能发生此问题。

您可以通过删除凭据文件重置pub的身份验证过程：

```bash
rm ~/.pub-cache/credentials.json
```

## 发布包时出现“UnauthorizedAccess”错误

运行pub publish时收到以下错误：

```
UnauthorizedAccess: Unauthorized user: <username> is not allowed to upload versions to package '<foo>'..
```

如果您不在授权发布新版本软件包的人员列表中，您将看到此消息。 请参阅[作者与上传者](./publishing.html#authors-versus-uploaders)。

## Pub构建失败，出现HttpException错误

运行pub build时收到类似于以下内容的HttpException错误：

```
Pub build failed, [1] IsolateSpawnException: 'HttpException: Connection closed while receiving data,
...
library handler failed
...
```
这可能是由于某些防病毒软件（例如AVG 2013 Internet安全套件）而导致的。 查看安全套件的手册，了解如何暂时禁用此功能。 例如，请参阅[如何禁用AVG组件](https://support.avg.com/SupportArticleView?urlName=How-to-disable-AVG)。


## Pub get fails from behind a corporate firewall
使用命令行 设置http_proxy和https_proxy环境变量。 您可以按如下方式设置代理服务器环境变量。

Linux/macOS:

```bash
$ export https_proxy=hostname:port
```
Windows:

```bash
> set https_proxy=hostname:port
```
如果代理需要凭据，您可以按如下方式设置它们。

Linux/macOS:

```bash
$ export https_proxy=username:password@hostname:port
```
Windows:
```bash
> set https_proxy=username:password@hostname:port
```
