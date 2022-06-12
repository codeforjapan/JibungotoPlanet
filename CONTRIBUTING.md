# Contributor Guide

## バックエンドの開発

### 前提条件

開発には、node, yarn, java, amplify が必要です。node, yarn は最新バージョン、java はバージョン 8 以上をインストールして下さい。
インストールされているバージョンは以下で確認できます。また、aws cli のインストールも推奨です。

```bash
node -v; yarn -v; java --version; amplify --version; aws --version
# 以下は実行結果の例
v16.13.0 # Node.jsのバージョン
1.22.17 # yarnのバージョン、npmでなくyarnを使って下さい。
openjdk 16.0.1 2021-04-20 # 注：M1 Macの場合はこのバージョンでないとうまく動きません（2020/6/11現在）。
OpenJDK Runtime Environment (build 16.0.1+9-24)
OpenJDK 64-Bit Server VM (build 16.0.1+9-24, mixed mode, sharing)
8.4.0 # amplifyのバージョン
aws-cli/2.7.7 Python/3.9.11 Darwin/21.5.0 exe/x86_64 prompt/off # aws cliのバージョン
```

---

### ローカルのでの開発方法

#### DynamoDB

クライアントの DynamoDB の mock 環境で開発・テストができると効率的です。
amplify mock で DynamoDB の mock も立ち上がりますがその DB に aws cli からアクセスする方法は以下です。

```bash
aws configure # aws cliの環境設定。一回やればOKです。
AWS Access Key ID [****************DNFO]: fake
AWS Secret Access Key [****************X7fg]: fake
Default region name [ap-northeast-1]: us-fake-1
Default output format [None]:

amplify mock # モック環境を立ち上げ
aws dynamodb list-tables --endpoint-url http://localhost:62224 # テーブル一覧の表示。
```

:::note info
amplify の mock の DynamoDB のエンドポイントは`http://localhost:62224`になります。
:::

データのインポートは dynamodb-csv をインストールして実行します。data/local を gitignore に追加していますので、本番用の csv データを配置して下さい。

```bash
cd data
./install.sh
./load.sh
```

#### REST api の作り方

```bash
$ amplify import storage

? Select from one of the below mentioned services: DynamoDB table - NoSQL Database
✔ Select the DynamoDB Table you want to import: · Parameter-dikfjlx7xncgpo5s3xzv5x56ie-dev

✅ DynamoDB Table 'Parameter-dikfjlx7xncgpo5s3xzv5x56ie-dev' was successfully imported.

Next steps:
- This resource can now be accessed from REST APIs (`amplify add api`) and Functions (`amplify add function`)

$ amplify import storage

? Select from one of the below mentioned services: DynamoDB table - NoSQL Database
✔ Select the DynamoDB Table you want to import: · Profile-dikfjlx7xncgpo5s3xzv5x56ie-dev

✅ DynamoDB Table 'Profile-dikfjlx7xncgpo5s3xzv5x56ie-dev' was successfully imported.

Next steps:
- This resource can now be accessed from REST APIs (`amplify add api`) and Functions (`amplify add function`)

$ amplify add api

? Select from one of the below mentioned services: REST
✔ Would you like to add a new path to an existing REST API: (y/N) · no
✔ Provide a friendly name for your resource to be used as a label for this category in the project: · profile

✔ Provide a path (e.g., /book/{isbn}): · /profiles/{id}
✔ Choose a Lambda source · Create a new Lambda function
? Provide an AWS Lambda function name: profile
? Choose the runtime that you want to use: NodeJS
? Choose the function template that you want to use: CRUD function for DynamoDB (Integrati
on with API Gateway)
? Choose a DynamoDB data source option Use DynamoDB table configured in the current Amplif
y project
? Choose from one of the already configured DynamoDB tables Profiledikfjlx7xncgpo5s3xzv5x5
6iedev

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration
- Environment variables configuration
- Secret values configuration

? Do you want to configure advanced settings? No
? Do you want to edit the local lambda function now? No
Successfully added resource profile locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/profile/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
To access AWS resources outside of this Amplify app, edit the /Users/naoto/Documents/projects/code-for-japan/Footprint-Jibungoto/amplify/backend/function/profile/custom-policies.json
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
✅ Successfully added the Lambda function locally
✔ Restrict API access? (Y/n) · no
✔ Do you want to add another path? (y/N) · no
✅ Successfully added resource profile locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```

#### テストのやり方

```bash
amplify mock # モック環境の起動

# 以下は別shellで実施。テスト用のリクエストsrc/event.jsonを読み込んで実行。
amplify mock function profile

? Provide the path to the event JSON object relative to /Users/naoto/Documents/projects/c
ode-for-japan/Footprint-Jibungoto/amplify/backend/function/profile src/event.json

```
