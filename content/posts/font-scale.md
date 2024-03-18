---
title: "폰트 단위: em, rem(root em)"
date: 2024-02-15
draft: false
---

시각디자인에서 타이포그래피는 매우 중요한 요소이다. 많은 구루 디자이너들이 자간, 행간, 글자 크기 등을 매우 세심하게 다룬다. 이는 디지털 환경에서도 마찬가지이다. 시각적 위계, 통일감 등을 위해 디자이너들은 타입 스케일을 만드는데 많은 시간을 할애한다.

이번 포스팅에서는 타입 스케일을 만드는데 가장 기본이 되는 폰트의 단위, 그중에서도, em과 rem에 대해 이야기해보고자 한다. 

Mozlia MDN Docs에 따르면 em과 rem은 박스에서 텍스트 크기를 조정할 때 사용하는 상대 길이이다. 

em과 rem을 텍스트의 크기를 조정하기 위해서만 사용한다고 오해할 수 있는데 이는 잘못된 생각이다. em과 rem 모두 px과 마찬가지로 단위를 나타내기 위한 단위일 뿐이다.


즉, px뿐만 아니라 em,  rem 등은 모두 CSS 상에서 박스 혹은 박스 안의 요소들의 크기를 정하는 데 사용할 수 있다. ex(x-height), ch, lh, vw, vmin 등을 포함해서. 차이점은 일부 단위는 텍스트 사이즈를 정하는데, 일부 단위는 박스 사이즈를 정하는데 많이 사용되는 것 정도이다.


## 차이점을 먼저 확인하고 조금 더 상세한 정의를 보자.

| 단위 | 설명                                                 |
|------|------------------------------------------------------|
| EM   | 해당 요소(element)의 글꼴 크기를 1em으로 사용한다.    |
| REM  | 루트 요소(html)의 글꼴 크기를 1rem으로 사용한다.      |

## EM 


em은 요소의 글꼴 크기를 1em으로 갖는다. 만약 해당 요소의 글꼴 크기가 없다면 부모의 폰트 사이즈를 1em으로 해당한다. 이는 폰트 사이즈는 부모 요소로부터 상속받기 때문이다. (상속이란 해당 속성을 스타일 시트 상에 별도로 명세하지 않으면 상위의 요소로부터 그 속성을 그대로 전달받는 것을 의미한다. 가장 대표적인 예시로 color 속성이 있다)



 예시를 보자. 

```
<style> 
    .hero-section { font-size: 24px; } 
    .hero-section .title { font-size: 1em; } 
    .hero-section .subtitle { font-size: 0.8em; } 
</style> 

<body> 
    <div class="hero-section"> 
        <div class="title"></div> 
        <div class="subtitle"></div> 
    </div> 
</body>

```



이 경우 hero-section 안의 title과 subtitle은 명시적으로 폰트 사이즈가 정해져 있지 않으므로 상위 요소인 hero-section의 폰트 사이즈를 1em으로 사용한다. 따라서 title의 font-size: 1em은 24px로, subtitle의 1em 역시 24px로 계산된다.



여기까지 문제가 없었다면 em을 이해하는 장벽 중 하나인 중첩에 대해 알아보자. 중첩이란 여러 요소들이 서로를 포함하고 있는 것으로 html을 작성할 때 당연히 일어나는 것이다. 

```
.hero-section .title {
    font-size: 1em;
}
.hero-section .subtitle {
    font-size: 0.8em;
}
.hero-section .subtitle .leading {
    font-size: 0.625em;
}
```

이 경우에 subtitle안에 leading은 hero-section 안에, subtitle 안에 중첩되어 위치하게 된다. 그렇다면 이때 leading의 폰트 사이즈는 몇이 되는가? 24px  *0.8 * 0.625가 된다. 



한 걸음 더 나가보자.

```
.hero-section .subtitle .leading {
    font-size: 0.625em;
    width: 0.625em;
    height: 0.625em;
    background-color: red;
}
```


이 경우 leading의 width와 height는 몇이 되는가?

앞서 em은 해당 요소의 font-size를 1em으로 사용한다고 했다. 따라서 1em은? 24px  *0.8 * 0.625이며

width와 height가 갖는 0.625em은 24 * 0.8 * 0.625 * 0.625 = 7.5px이 된다.


브라우저 개발자 도구에서 computed value로 확인해보자.






## REM (Root + em)


em에 비해 rem은 매우 간단하다. rem은 루트 요소인 html의 폰트 사이즈를 1 rem으로 사용한다. 따라서 중첩이 되는 경우에도 em과 달리 기준값이 변하지 않는다. html의 font-size가 10px이라면 해당 html의 내의 어떤 요소든 1 rem = 10px이다. (10px이 아니라. 625%라고 사용하기도 한다. 이는 일반적으로 폰트 사이즈가 16px이고 여기에 0.625를 곱하면 10이 되기 때문)

```
<style> 
    html { font-size: 10px; } 
    .hero-section .title { font-size: 1rem; } 
    .hero-section 
    .subtitle { font-size: 0.8em; } 
</style> 
<body> 
    <div class="hero-section">
    <div class="title"></div>
    <div class="subtitle"></div> 
    </div>
</body>
```



## 언제 EM과 REM을 사용하는가?


해당 요소가 폰트 사이즈에 따라서 padding과 margin, width 등 박스 모델의 너비를 계산하는 값이 바뀌어야 하는 경우에는 em을 사용할 수 있다. 



하지만 나는 em보다는 rem을 선호한다. 만약 UI에서 일종의 리그레션, 버그 예) 특정 컴포넌트의 스타일을 바꾸었는데 생각지도 않는 컴포넌트의 스타일이 변경된 경우, 가 생긴다면 em으로만 한 경우 디버깅이 쉽지 않았기 때문이다.



참고로 px 대신에 rem을 사용하는 이유는 많은 유저들이 브라우저의 기본 폰트 값을 16px이 아니라 바꾸어서 사용하는데 이를 대응하기 위해서도 있고, 적응형 디자인을 보다 쉽게 만들기 위해서도 있다.  이에 대해서는 이후 기회가 된다면 상세히 적겠다.