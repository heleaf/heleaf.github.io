---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
title: Programming
permalink: /programming/
---
programming portfolio

{% for i in site.programming  %}
  <h2>{{ programming.name }} </h2>
{% endfor %}

this doesn't work
