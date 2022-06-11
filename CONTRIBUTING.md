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
