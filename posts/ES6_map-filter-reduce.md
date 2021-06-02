---
title: "ES6 map() filter() reduce() 정리"
date: "2021-06-02"
image: "/images/4444.jpg"
description: "fetching한 data 정렬할 때, 배열 요소에 특정 처리를 하는 등 배열을 다룰 떄 유용하게 사용할 수 있다. 기존 for, forEach문 등등 사용할 때에 비해 매우매우 편리하게 사용할 수 있다."
tag: ["ES6"]
link:
  [
    { id: "#map", name: "map()" },
    { id: "#filter", name: "filter()" },
    { id: "#reduce", name: "reduce()" },
    { id: "#filter&reduce", name: "filter(),reduce()" },
  ]
---

### <a name="map"></a>

**map()**

Syntax: currentValue, index, array

fetching한 data 정렬할 때, 배열 요소에 특정 처리를 하는 등 배열을 다룰 떄 유용하게 사용할 수 있습니다.

<pre>
<code>
    let arr = ['Apple', 'Banana', 'Potato', 'Pineapple']
    function App() {
    return (
        <div>
        {arr.map((value, index, array) => 
            <div>index={index + 1}, value={value}, Array={array}</div>)}
        </div>
        )
    }
</code>
</pre>

=>

<pre>
<code>
    index=1, value=Apple, Array=AppleBananaPotatoPineapple
    index=2, value=Banana, Array=AppleBananaPotatoPineapple
    index=3, value=Potato, Array=AppleBananaPotatoPineapple
    index=4, value=Pineapple, Array=AppleBananaPotatoPineapple
</code>
</pre>

### <a name="filter"></a>

**filter()**

Syntax: currentValue, index, array

특정 조건식을 걸어 그 결과 값과 같은 새로운 배열을 return 합니다.

<pre>
<code>
    let arr = ['Apple', 'Banana', 'Potato', 'Pineapple']
    function App() {
    return (
        arr.filter((value) => value !== "Apple")
        )
    }
</code>
</pre>

=>

<pre>
<code>
    Banana Potato Pineapple
</code>
</pre>

### <a name="reduce"></a>

**reduce()**

reduce 는 빈 요소를 제외한 배열 내에 존재하는 각 요소에 대해 콜백함수를 실행하여 마지막 호출된 하나의 값을 도출합니다.  
includes함수를 같이 사용하여 중복을 제거하는 예제 입니다.

<pre>
<code>
        let arr2 = ["Dog", "Cat", "Bird", "Dog", "Giraff", "Cat", "Elepant"]
        arr2.reduce(
          (unique, item) =>
            unique.includes(item) ? unique : [...unique, item],
          []
        )
</code>
</pre>

=>

<pre>
<code>
    Dog Cat Bird Giraff Elepant
</code>
</pre>

### <a name="filter&reduce"></a>

**filter()와 reduce()동시 사용하기**

filter함수를 통해 특정 값(Dog)를 제거한 후 중복을 제거하는 예제입니다.

<pre>
<code>
    let arr2 = ["Dog", "Cat", "Bird", "Dog", "Giraff", "Cat", "Elepant"]
    arr2.filter((value) => value !== "Dog")
          .reduce(
            (unique, item) =>
              unique.includes(item) ? unique : [...unique, item],
            []
          )

</code>
</pre>

=>

<pre>
<code>
    Cat Bird Giraff Elepant
</code>
</pre>

[CodeSandBox link!](https://codesandbox.io/s/es6mapfilterreduce-forked-m42h9?file=/src/index.js)
