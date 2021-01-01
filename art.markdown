---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
<div class="test">
![My helpful screenshot]({{ site.url }}/art/wangxian.png)
</div>
<div class="image-gallery">
  {% for image in site.art %}
/*	 <img src="{{ site.url }}/art/{{ image.name }}"/> */
	![art]({{ site.url }}/art/{{ image.name }})
  {% endfor %}
</div>
