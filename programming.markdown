---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Programming
permalink: /programming/
---
<div>
{% for project in site.programming%}
	<img src="{{ site.url }}{{ project.image_path }}"/>
{% endfor %}
</div>
