---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
{% include image-gallery.html %}

<div class="image-gallery">
  {% for image in site.art %}
	 <img src="{{ site.url }}{{ image.image_path  }}"/>
	<p></p> 
  {% endfor %}
</div>

