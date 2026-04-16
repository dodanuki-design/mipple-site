# mipple — ミュージアムから、美のさざなみを。

アート・文化施設とクリエイターをつなぐプラットフォーム

## 🚀 デプロイ手順（10分で公開）

### Step 1: GitHubにリポジトリを作成
1. https://github.com にログイン
2. 右上の「+」→「New repository」
3. Repository name: `mipple-site`
4. 「Create repository」をクリック

### Step 2: コードをアップロード
GitHubの画面で「uploading an existing file」をクリックし、
このフォルダの全ファイルをドラッグ＆ドロップ：
- `package.json`
- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`

「Commit changes」をクリック。

### Step 3: Vercelでデプロイ
1. https://vercel.com にGitHubアカウントでログイン
2. 「Add New...」→「Project」
3. `mipple-site` リポジトリを選択 →「Import」
4. そのまま「Deploy」をクリック
5. 数分でサイトが公開されます！

### Step 4: ドメインを接続（後から）
1. Vercelのプロジェクト → Settings → Domains
2. 取得したドメインを入力
3. ドメインのDNS設定でVercelのIPを指定

## 📁 ファイル構成
```
mipple-site/
├── index.html          ← エントリポイント
├── package.json        ← 依存パッケージ
├── vite.config.js      ← Vite設定
└── src/
    ├── main.jsx        ← React起動
    └── App.jsx         ← LP + デモアプリ
```

## © Dodanuki Plannings Co., Ltd.
