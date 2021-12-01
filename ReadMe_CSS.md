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

