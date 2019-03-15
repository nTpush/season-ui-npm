# Button 按钮

## 基础用法

:::demo 通过`plain`属性可以设置为朴素的按钮；通过`disabled`属性可以设置按钮是否禁用；按钮的类型`type`有`info` 、`success`、`danger`、`warning`

```html
<style>
.btn-wrap {
margin-top: 20px;
}
</style>
<se-button>按钮1</se-button>
<se-button type="info">按钮2</se-button>
<se-button type="success" round>按钮3</se-button>
<se-button type="warning">按钮4</se-button>
<se-button type="danger">按钮5</se-button>
<se-button plain>按钮6</se-button>
<se-button plain size="small">按钮7</se-button>
<se-button disabled>按钮8</se-button>
<se-button plain type="danger" disabled>按钮9</se-button>
<se-button plain type="warning">按钮10</se-button>
<se-button type="info">按钮11</se-button>
<se-button plain type="info">按钮12</se-button>
<div class="btn-wrap">
<se-button size="big">按钮13</se-button>
</div>
<div class="btn-wrap">
<se-button size="big" type="danger" round>按钮14</se-button>
</div>
```

:::


:::tip 有情提示
:::

:::warning 这是一个警告d
:::