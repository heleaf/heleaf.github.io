---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
digital art portfolio
![My helpful screenshot]({{ site.url }}/art/wangxian.png)

<div class="image-gallery">
  {% for image in site.art %}
    {% if image.path contains '/art/' %}
      <img src="{{ site.baseurl }}{{ image.path }}"/>
    {% endif %}
  {% endfor %}
</div>
