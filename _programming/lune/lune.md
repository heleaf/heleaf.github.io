---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
title: Lune
description: Story concepts
permalink: /projects/lune/
image_path: /programming/lune/lune_cover1.jpg
ordering: 12
# youtubeId: SfVfqmwELns
big-heading: 月 (Lune)
---
<script src="../../assets/js/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
<script src="../../assets/js/packery-mode.pkgd.js"></script>
<link rel="stylesheet" href="../../assets/css/isotope-image-gallery.css">

Concept art for a story set in ancient China + 
[a script for the opening scene][opening]

<div class="grid gallery">
 {% for image in site.lune %}
	<div class="grid-item">
	<a href = "{{site.url}}{{image.image_path}}">
 <img width="20%" src="{{ site.url }}{{ image.image_path  }}" />
</a></div>
 {% endfor %}
</div>

<script src="../../assets/js/isotope-image-gallery.js"></script>

<link rel="stylesheet" href="../../assets/css/lightbox.css">
<script type="text/javascript" src="../../assets/js/lightbox.js"></script>


[opening]: {{site.url}}/lune/lune_opening.pdf