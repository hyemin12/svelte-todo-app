import App from "./App.svelte";

// html의 body가 svelte 파일이 출력될 타겟으로 설정
const app = new App({
  target: document.body,
});

export default app;
