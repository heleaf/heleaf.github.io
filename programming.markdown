---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Programming
permalink: /programming/
heading: Selected programming projects
---
<script src="/js/jquery-3.5.1.min.js"></script>
<script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
<script src="/js/packery-mode.pkgd.js"></script>
<link rel="stylesheet" href="/css/isotope-image-gallery.css">

{% assign prgmming = site.programming | sort: "ordering" | reverse  %}
<div class="grid">
{% for project in prgmming %}
	<div class="grid-item">
	<a href="{{ site.url }}{{ project.permalink }}">
	<img src="{{ site.url }}{{ project.image_path }}"/>
	</a>
	<p>{{ project.title }}</p>
	</div>
{% endfor %}
</div>

<script src="/js/isotope-image-gallery.js"></script>

