---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
<div class="image-gallery">
  {% for image in site.art %}
	<p style="text-align: CENTER; width: 550px"><img src="{{ site.url }}{{ image.image_path  }}"/>
</p> 
  {% endfor %}
</div>
