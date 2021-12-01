# ReadMe_CSS.md
Learning how does `CSS` with `Responsive-Layout` works and `CSS` Positions

## Position
- Position is the `CSS Tags` which determines the `position` of each tags

### static
- The default value of `Position` Tag 
- Stack from `left-side` to `right-side`, `top-side` to `bottom-side`
- It's not necessary to write `static` because the `Position` default value is `static`

```css
div {position: static;}
#some-tag-id {position: static;}
.some-tag-class {position: static;}
```

### relative
- Use `relative` to change the `position` of tag
- You can handle the `position` of `top`, `right`, `bottom` and `left` attribute

```css
div {position: relative; top: 5px;}
#some-tag-id {position: relative; top: 5px;}
.some-tag-class {position: relative; top: 5px;}

div {position: relative; right: 5px;}
#some-tag-id {position: relative; right: 5px;}
.some-tag-class {position: relative; right: 5px;}

div {position: relative; bottom: 5px;}
#some-tag-id {position: relative; bottom: 5px;}
.some-tag-class {position: relative; bottom: 5px;}

div {position: relative; left: 5px;}
#some-tag-id {position: relative; left: 5px;}
.some-tag-class {position: relative; left: 5px;}
```

### absolute
- `Relative` move owns the current `position` when it status value is `static`, `absolute` has no attribute, named `static`
- If current `position` has no attribute `relative`, `absolute`, `fixed`, 
then the top position of tag becomes `standard`

```css
#some-tag-id-absolute {background: yellow; position: absolute; right: 0;}
#some-tag-id-parent {position: relative; width: 100px; height: 100px; background: skyblue;}
#some-tag-id-child {position: absolute; right: 0;}
```

### fixed
- Use `Fixed` to set the particular location of tag
- Even User or Developer `scrolls` to the `left`, or `right`, `top`, `bottom`,
It just set the particular-location

```css
div {background: yellow; position: fixed; right: 0;}
#some-tag-id {background: yellow; position: fixed; right: 0;}
.some-tag-class {background: yellow; position: fixed; right: 0;}
```

### sticky
- `sticky` change owns value as `relative` and `fixed` when user or developer `scroll` the page
- When the `Scroll position` reached to a particular-location, it works like using `fixed`

```css
div {position: -webkit-sticky; position: sticky; top: 4px; background: red;}
#some-tag-id {position: -webkit-sticky; position: sticky; top: 4px; background: red;}
.some-tag-class {position: -webkit-sticky; position: sticky; top: 4px; background: red;}
```


## Pseudo-Element
- `Pseudo-Element` is a keyword added to a selector that lets you to style a `specific part` of the `elements` selected by a `CSS Selector`

### ::before(:before)
- Create new `child-element` in front of the `Real-exisitng-tags (Selected CSS Selectors)`

```css
div {background-color: #cccccc;}
div:before {position: fixed; top: 0; left: 0; right: 0;}

#some-tag-id {background-color: #cccccc;}
#some-tag-id:before {position: fixed; top: 0; left: 0; right: 0;}

.some-tag-class {background-color: #cccccc;}
.some-tag-class:before {position: fixed; top: 0; left: 0; right: 0;}
```

## ::after(:after)
- Create new `child-element` behind the `Real-Existing-tags (Selected CSS Selector)`

```css
div {position: fixed; top: 0; left: 0; right: 0;}
div:after {top: 50px; height: 1px; background-color: #cccccc;}

#some-tag-id {position: fixed; top: 0; left: 0; right: 0;}
#some-tag-id:after {top: 50px; height: 1px; background-color: #cccccc;}

.some-tag-class {position: fixed; top: 0; left: 0; right: 0;}
.some-tag-class:after {top: 50px; height: 1px; background-color: #cccccc;}
```
