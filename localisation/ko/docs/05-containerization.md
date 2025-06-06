# 05: 컨테이너화

## 시나리오

Contoso는 다양한 야외 활동 제품을 판매하는 회사입니다. Contoso의 마케팅 부서는 기존 고객과 잠재 고객에게 제품을 홍보하기 위한 마이크로 소셜 미디어 웹사이트를 런칭하고자 합니다.

이제 Java 기반 백엔드 앱과 .NET 기반 프론트엔드 앱을 모두 가지고 있습니다. 이들은 모든 플랫폼에 배포할 수 있도록 컨테이너화하고 싶어합니다.

이제 DevOps 엔지니어로서, 두 앱을 모두 컨테이너화해야 합니다.

## 전제 조건

준비를 위해 [README](../README.md) 문서를 참조하세요.

## 시작하기

- [GitHub Copilot 에이전트 모드 확인](#github-copilot-에이전트-모드-확인)
- [커스텀 지시사항 준비](#커스텀-지시사항-준비)
- [Java 애플리케이션 컨테이너화](#java-애플리케이션-컨테이너화)
- [.NET 애플리케이션 컨테이너화](#net-애플리케이션-컨테이너화)
- [컨테이너 오케스트레이션](#컨테이너-오케스트레이션)

### GitHub Copilot 에이전트 모드 확인

1. GitHub Codespace 또는 VS Code 상단의 GitHub Copilot 아이콘을 클릭하고 GitHub Copilot 창을 여세요.

   ![Open GitHub Copilot Chat](./images/setup-02.png)

1. 로그인 또는 가입을 요청받으면 진행하세요. 무료입니다.
1. GitHub Copilot 에이전트 모드를 사용하고 있는지 확인하세요.

   ![GitHub Copilot Agent Mode](./images/setup-03.png)

1. 모델을 `GPT-4.1` 또는 `Claude Sonnet 4` 중 하나로 선택하세요.
1. [MCP 서버](./00-setup.md#mcp-서버-설정)를 구성했는지 확인하세요.

---

좋습니다. "컨테이너화" 단계를 완료했습니다!