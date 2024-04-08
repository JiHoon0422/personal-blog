---
title: CSS-in-Depth
date: 2024-04-07
draft: false
type: blog
---

CSS는 디자이너를 위한 언어라고 생각하고 있습니다. 처음에 CSS를 배울 때도, 계속 공부하고 있는 지금도 이 생각은 변하지 않고 있습니다. 이 생각에는 여러 이유가 있는데, 가장 큰 이유는 아래 두 가지입니다.

1. CSS는 화면을 그리기 위한 언어이다.
2. 디자이너가 개발자와 효율적으로 소통하기 위해 배워야 하는 여러 툴 중에 가장 가성비가 좋다.

하지만 이런 생각에도 불구하고 지금까지 CSS를 깊게 이해하지 못하고 있었습니다. 무엇인지 아는 것과 사용할 줄 아는 것과 제대로 아는 것은 매우 다른다고 들었는 데 사용할 줄 아는 상태에서 계속 머물러 있었습니다.

그래도 언젠가 궁금증을 해소하기 위해 평소에 정확히 알지 못하고 경험적으로 썼던 것들을 리스트업 해놓았고 다음과 같습니다. 저와 비슷한 궁금증이 있으신 분들이라면 마지막에 추천하는 두 책에서 궁금증을 해결할 수 있을 거예요.

## 1. 선택자 명시도

- (https://developer.mozilla.org/ko/docs/Web/CSS/Specificity, https://specifishity.com/)

## 2. Device Pixel Ratio와 Physical Resolution, Logical Resolution

- ppi가 다른 스크린에 CSS는 어떻게 같은 코드로 같은 사이즈의 이미지를 그리는가?

## 3. Margin collapsing

- Margin collapsing을 만든 이유와 일어나는 경우

## 4. Lobotomized Owls( _ + _)을 정확히 언제, 어떻게 사용해야 하는가?

- (https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/)

## 5. 상속이 되는 속성과 상속이 되지 않는 속성

## 6. calc()를 활용한 완전한 반응형 디자인

## 7. Media Query의 @supports

## 8. Visual regression test

- https://github.com/garris/BackstopJS

## 9. floating 레이아웃과 clear fix 핵

- clear fix핵을 써야 했던 정확한 이유

## 10. position과 left의 브라우저 렌더링 속도

left 대신에 transform을 써야 하는 이유

## 11. 같은 클래스를 붙여서 여러 번 쓰는 이유

- !important 를 대신한 선택자 명시도 높이기

## 12. inline-block과 overflow이 같이 있을 때 생기는 vertical align 이슈 해결책

외에도 CSS를 쓰면서 더 많은 궁금증이 있었지만, 두 책에서 위 질문에 관련된 답을 얻을 수 있었습니다.
![](https://res.cloudinary.com/jihoon/image/upload/ar_1:1,c_thumb,g_auto/c_scale,w_320/v1712471576/R1280x0.fpng_hxbqjq)
![](https://res.cloudinary.com/jihoon/image/upload/ar_1:1,c_thumb,g_auto/c_scale,w_320/v1712471587/R1280x0.fjpg_ohwhae.jpg)

Css in depth by Keith J. Grant

Debugging CSS by Ahmad Shadeed

끝으로 Guru들이 쓴 책을 볼 때마다 작은 궁금증을 놓치지 않고 집요하게 파고든다는 생각을 합니다. 또 마땅히 그렇게 해야만 깊은 이해도를 얻을 수 있다는 생각을 해봅니다. 2020년도에 읽었던 여러 책 중 가장 추천할만한 두 책이네요.
