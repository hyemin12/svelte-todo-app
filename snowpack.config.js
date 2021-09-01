module.exports = {
  mount: {
    // 원하는 이름으로 지정 가능
    // 단, 폴더 생성 시 이름을 동일하게 생성해야함
    public: "/",
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-optimize",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-sass",
  ],
  alias: {
    "~": "./src",
  },
  devOptions: {
    // port: 8080

    // 개발서버 열때 브라우저 자동으로 오픈 X
    open: "none",
  },
};
