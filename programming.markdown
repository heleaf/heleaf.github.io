---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Code
permalink: /code/
# heading: Selected programming projects
---
<script src="/assets/js/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
<script src="/assets/js/packery-mode.pkgd.js"></script>
<link rel="stylesheet" href="/assets/css/isotope-image-gallery.css">
<link rel="stylesheet" href="/assets/css/text-hover.css">
{% assign prgmming = site.programming | sort: "ordering" | reverse  %}
<div class="grid">
{% for project in prgmming %}
	<div class="grid-item">
	<div class="container">
	<a href="{{ site.url }}{{ project.permalink }}">
	<img src="{{ site.url }}{{ project.image_path }}"/>
	<div class="overlay">
		<div class="text">{{project.description}}</div>
	</div>
	</a>
	</div>
	<p>{{ project.title }}</p>
	</div>
{% endfor %}
</div>

<script src="/assets/js/isotope-image-gallery.js"></script>

