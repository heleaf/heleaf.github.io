---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Art
permalink: /art/
---
<style>
  .image-gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
    justify-content: center;
    padding:10px;
  }

  .box {
      flex-basis: 25%;
      width: 100%;
      padding: 10px;
      margin: 10px;
  }

  .img-gallery {
	width: 100%;
  height: 200px;
	object-fit: cover;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
</style>
<div class="image-gallery">
{% for file in site.art %}
    {% if file.extname == '.jpg' or 
      file.extname == '.png' or 
      file.extname == '.JPG' or 
      file.extname == '.PNG' %}

      {% assign filenameparts = file.path | split: "/" %}
      {% assign filename = filenameparts | last | replace: file.extname,"" %}

      <a href="{{ file.path }}" title="{{ filename }}">
        <img src="//images.weserv.nl/?url=jekyllcodex.org/{{ file.path }}&w=300&h=300&output=jpg&q=50&t=square" alt="{{ filename }}" />
        <span>{{ filename }}</span>
      </a>
  {% endif %}
{% endfor %}
</div>

<div class="image-gallery">
  {% for image in site.art %}
	 <img src="{{ site.url }}{{ image.image_path  }}"/>
  {% endfor %}
</div>

{% include image-gallery.html folder="myfolder" %}

