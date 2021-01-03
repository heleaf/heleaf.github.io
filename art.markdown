---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
<link rel="stylesheet" href="/css/image-gallery.css">
<div class="image-gallery grid">
  {% for image in site.art %}
	<a href = "{{site.url}}{{image.image_path}}">
 <img src="{{ site.url }}{{ image.image_path  }}"/>
</a> 
 {% endfor %}
</div>

<link rel="stylesheet" href="/css/lightbox.css">
<script type="text/javascript" src="/js/lightbox.js"></script>
