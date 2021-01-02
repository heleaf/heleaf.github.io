---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
<style>
  .image-gallery {overflow: auto; margin-left: -1%!important;}
  .image-gallery a {float: left; display: block; margin: 0 0 1% 1%; width: 19%; text-align: center; text-decoration: none!important;}
  .image-gallery a span {display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 3px 0;}
  .image-gallery a img {width: 100%; display: block;}
</style>

<div class="image-gallery">
  {% for image in site.art %}
	<a href = "{{site.url}}{{image.image_path}}">
 <img style="padding: 10px; float: center;" src="{{ site.url }}{{ image.image_path  }}"/>
</a> 
 {% endfor %}
</div>
<script type="text/javascript" src="/lightbox.js"></script>
<link rel="stylesheet" href="/lightbox.css">
