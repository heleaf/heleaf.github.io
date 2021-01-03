---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
<script src="/js/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
<script src="/js/packery-mode.pkgd.js"></script>
<link rel="stylesheet" href="/css/isotope-image-gallery.css">

<div class="grid">
 {% for image in site.art %}
	<div class="grid-item">
	<a href = "{{site.url}}{{image.image_path}}">
 <img src="{{ site.url }}{{ image.image_path  }}"/>
</a> </div>
 {% endfor %}
</div>

<script>
$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'packery',
  packery: { gutter: 10 }
});
</script>


<link rel="stylesheet" href="/css/lightbox.css">
<script type="text/javascript" src="/js/lightbox.js"></script>
