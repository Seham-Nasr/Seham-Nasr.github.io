---
layout: archive
title: "Projects"
permalink: /Projects/
author_profile: true
---

{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a list of all the projects I've collaborated in!</a></p>

{% endif %}

{% for post in site.Projects reversed %}
  {% include archive-single-Projects.html %}
{% endfor %}
