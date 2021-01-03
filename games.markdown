---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Games
permalink: /games/
---
<link rel="stylesheet" href="/css/image-gallery.css">
{% assign games = site.games | sort: "ordering" | reverse  %}
<div class="image-gallery">
{% for project in games %}
	<a href="{{ site.url }}{{ project.permalink }}">
	<img src="{{ site.url }}{{ project.image_path }}"/>
	</a>
{% endfor %}
</div>
