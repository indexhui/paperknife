這個專案是克隆 PaperKnife 的網站 (https://paperknife.club/)

### 說明

觀察 Paperknife 原始碼，發現是由 WordPress 建立的。 WordPress 頁面常見是由套件和套件組合而成，元件區塊之間的嵌套較為複雜，因此之間的 div 架構我就不予參考，直接以視覺為基準重新劃分製作。

網頁空間分布主要是以寬度 480px、768px、992px、1280px 作為 breakpoints。

此網站的主要效果分別為 3D 滑動效果、滾動浮現。

滾動浮現此效果是搭帶 Framer motion 中[whileInView](https://www.framer.com/docs/gestures/###whileinview)製作。

3D 滑動效果是單純搭配 React 滑鼠事件 onMouseMove 來捕捉滑鼠位置和 Section(移動有效區塊)關係來改變元素的 transform 數值。

### 技術和套件使用

React JS 、Chakra UI、Framer motion

### 備註

Metadata 的內容，直接取用 Paperknife 上的。

Header 上的按鈕文字有 typo，有做更正

目前只有按鈕和文字有去做模組化，時間關係有在思考幾個元件要不要去做拆分(浮出效果等)
