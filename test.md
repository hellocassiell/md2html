---
title: 使用SDK进行开发
type: quick_start
order: 2

---

推荐通过[SDK](https://github.com/MalongTech)使用ProductAI的功能。目前官方支持4种语言的SDK

## Python SDK

安装请使用

```
pip install productai
```

查看[源代码](https://github.com/MalongTech/productai-python-sdk)

>支持Python 2.7/3.5/3.6

## PHP SDK

安装请使用

```
composer require malong/productai
```

查看[源代码](https://github.com/MalongTech/productai-php-sdk)。

国内用户可切换到[国内composer源](https://pkg.phpcomposer.com/)，再进行安装。

>支持PHP5.6及以上版本

## Java SDK

安装请下载[JAR](https://github.com/MalongTech/productai-java-sdk/releases)包。在项目中引用该JAR包即可。

查看[源代码](https://github.com/MalongTech/productai-java-sdk)

> 支持JDK1.6、1.8

## .Net SDK

安装请使用

```
Install-Package MalongTech.ProductAI.API
```

查看[源代码](https://github.com/MalongTech/productai-csharp-sdk)

> 支持 .Net4.0及以上版本

## 创建第一个搜索服务

ProductAI使用access_key_id和secret_key来识别客户，同时保护客户的调用不会被第三方滥用。下面的示例代码会创建一个使用客户 access_key_id和secret_key的客户端对象。查看access_key_id和secret_key方法请参考[这里](../console/access_key)。

```python
from productai import Client

# 输入access_key_id和secret_key创建客户端
cli = Client(ACCESS_KEY_ID, SECRET_KEY)
```

```php
use ProductAI;

$product_ai = new ProductAI\API(ACCESS_KEY_ID, SECRET_KEY, 'zh-Hans');
```

```java
import cn.productai.api.core.*;
import cn.productai.api.core.enums.*;
import cn.productai.api.pai.entity.service.*;
import cn.productai.api.pai.entity.dataset.*;

// 设置API调用初始化参数
IProfile profile = new DefaultProfile();
profile.setAccessKeyId(ACCESS_KEY_ID);
profile.setSecretKey(SECRET_KEY);
profile.setVersion("1");
profile.setGlobalLanguage(LanguageType.Chinese);

IWebClient client = new DefaultProductAIClient(profile);
```

```csharp
using MalongTech.ProductAI.Core;

IProfile profile = new DefaultProfile
{
    Version = "1",
    AccessKeyId = ACCESS_KEY_ID,
    SecretKey = SECRET_KEY
};
var client = new DefaultProductAIClient(profile);
```

ProductAI中的重要概念之一是数据集（ImageSet），数据集等同于传统数据库中的一个数据表。数据集中包含了数据（Image），等同于数据表中记录的概念。

```python
# 创建一个新的数据集
api = cli.get_image_set_creating_api()
resp = api.create_image_set(name=SET_NAME, description=SET_DESC)

# 获取数据集ID
from json import loads
image_set = loads(resp.content)
image_set_id = image_set['id']
```

```php
$result = $product_ai->createImageSet($name=SET_NAME, $description=SET_DESC);
$image_set_id = $result['id']
```

```java
// 设置数据集名称和描述参数
CreateDataSetRequest request = new CreateDataSetRequest(SET_NAME, SET_DESC);
request.setLanguage(LanguageType.Chinese);

// 调用API，获取调用结果
CreateDataSetResponse response = client.getResponse(request);
// 获取数据集ID
String image_set_id = response.getDataSetId();
```

```csharp
var request = new CreateDataSetRequest
{
    Name = SET_NAME,
    Description = SET_DESC
};

var response = client.GetResponse(request);
var dataSetId = response.DataSetId;
```

数据（Image）是被索引的对象。目前数据主要为图片。

```python
# 获取操作数据集的api
api = cli.get_image_set_api(IMAGE_SET_ID)
api.add_image('https://yyyy')
```

```php
$result = $product_ai->addImageToSet($image_set_id=IMAGE_SET_ID, 'https://yyyy');
```

```java
DataSetSingleAddByImageUrlRequest request = new DataSetSingleAddByImageUrlRequest(IMAGE_SET_ID);
request.setImageUrl("https://yyyy");
DataSetModifyResponse response = client.getResponse(request);
```

```csharp
var request = new DataSetSingleAddByImageUrlRequest(IMAGE_SET_ID)
{
    ImageUrl = "https://yyyy"
};
var response = client.GetResponse(request);
```

基于数据集（ImageSet）创建某个场景（Scenario）的服务（Service）

```python
# 获取操作数据集的api
api = cli.get_image_set_api(IMAGE_SET_ID)

# 通过一个数据集创建一个新的场景搜索服务
resp = api.create_service(name='NAME', scenario='fashion')

# 获取服务ID
from json import loads
service = loads(resp.content)
service_id = service['id']
```

```php
$result = $product_ai->createService($image_set_id=IMAGE_SET_ID, $name='NAME', $scenario='fashion');
$service_id = $result['id']
```

```java
// 设置搜索服务参数
CreateSearchServiceRequest request = new CreateSearchServiceRequest(IMAGE_SET_ID, "NAME", SearchScenario.Fashion_V5_4);
request.setLanguage(LanguageType.Chinese);
// 调用API，获取调用结果
CreateSearchServiceResponse response = client.getResponse(request);
// 获取服务ID
String service_id = response.getServiceId();
```

```csharp
var request = new CreateSearchServiceRequest
{
    Name = "NAME",
    Scenario = SearchScenario.Fashion_V5_4,
    DataSetId = IMAGE_SET_ID
};

var response = client.GetResponse(request);
var serviceId = response.ServiceId;
```

发起搜索请求到 *服务（Service）*

```python
# 通过service_id获取一个搜索服务api
api = cli.get_image_search_api(SERVICE_ID)

# 在索引中搜索与image_url对应的图片视觉上相似的结果
resp = api.query(image_url = 'http://yyyy')

# 获取搜索结果
from json import loads
results = loads(resp.content)

for result in results['results']:
    url = result['url']
    score = results['score']
```

```php
$response = $product_ai->searchImage('search', SERVICE_ID, 'http://yyyy');

foreach ($response['results'] as $value) {
    url = $value['url']
    score = $value['score']
}
```

```java
ImageSearchByImageUrlRequest request = new ImageSearchByImageUrlRequest(SERVICE_ID);
request.setUrl("http://yyyy");

ImageSearchResponse response = client.getResponse(request);
for (SearchResult r : response.getResults()) {
    url = r.getUrl();
    score = r.getScore();
}
```

```csharp
var request = new ImageSearchByImageUrlRequest(SERVICE_ID)
{
    Url = "http://yyyy"
};

var response = client.GetResponse(request);
foreach (var r in response.Results) {
    url = r.Url
    score = r.Score
}
```