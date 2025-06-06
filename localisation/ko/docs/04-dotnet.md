# 04: JavaScript에서 .NET으로 마이그레이션

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

이들은 이미 JavaScript, 더 구체적으로는 React로 작성된 프론트엔드 앱을 가지고 있습니다. 하지만 갑자기 .NET, 특히 Blazor를 사용하여 프론트엔드 앱을 재개발하라는 새로운 요구사항을 보냈습니다.

이제 .NET 개발자로서, 기존 React 앱을 Blazor로 마이그레이션해야 합니다. 참고로 JavaScript와 React에 대한 지식은 매우 적습니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [Blazor 웹 앱 프로젝트 준비](#blazor-웹-앱-프로젝트-준비)
- [React 웹 앱 마이그레이션](#react-웹-앱-마이그레이션)

### GitHub Copilot 에이전트 모드 확인

1. GitHub Codespace 또는 VS Code 상단의 GitHub Copilot 아이콘을 클릭하고 GitHub Copilot 창을 여세요.

   ![Open GitHub Copilot Chat](./images/setup-02.png)

1. 로그인 또는 가입을 요청받으면 진행하세요. 무료입니다.
1. GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.

   ![GitHub Copilot Agent Mode](./images/setup-03.png)

1. 모델을 `GPT-4.1` 또는 `Claude Sonnet 4` 중 하나로 선택하세요.
1. [MCP 서버](./00-setup.md#mcp-서버-설정)를 구성했는지 확인하세요.

---

좋습니다. ".NET" 단계를 완료했습니다. [STEP 05: 컨테이너화](./05-containerization.md)로 이동하겠습니다.