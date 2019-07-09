---
layout: archive
permalink: /summer-research/
title: "Summer Research Posts by Tags"
author_profile: true
header:
    image: "/images/prosARM.jpg" = 100x
---
{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}