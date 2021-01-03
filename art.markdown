---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
heading: Personal art, including fanwork
---
<script src="/assets/js/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
<script src="/assets/js/packery-mode.pkgd.js"></script>
<link rel="stylesheet" href="/assets/css/isotope-image-gallery.css">


<div class="grid">
 {% for image in site.art %}
	<div class="grid-item">
	<a href = "{{site.url}}{{image.image_path}}">
 <img src="{{ site.url }}{{ image.image_path  }}"/>
</a></div>
 {% endfor %}
</div>

<script src="/assets/js/isotope-image-gallery.js"></script>
<link rel="stylesheet" href="/assets/css/lightbox.css">
<script type="text/javascript" src="/assets/js/lightbox.js"></script>
